package main

import (
	"fmt"
	"log"
	"net/http"
	"path"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

// 用户模型
type User struct {
	UserID           uint      `gorm:"primaryKey;autoIncrement" json:"user_id"`
	Username         string    `gorm:"unique;not null" json:"username"`
	Password         string    `gorm:"not null" json:"-"`
	Email            string    `json:"email"`
	Role             int       `gorm:"not null" json:"role"`
	RegistrationDate time.Time `gorm:"autoCreateTime" json:"registration_date"`
	Phone            string    `json:"phone"`
}

type SpecialProduct struct {
	ProductID          uint      `gorm:"primaryKey;autoIncrement" json:"product_id"`
	Category           string    `gorm:"type:varchar(50);not null" json:"category"`
	ProductName        string    `gorm:"type:varchar(255);not null" json:"product_name"`
	ProductDescription string    `gorm:"type:text" json:"product_description"`
	Origin             string    `gorm:"type:varchar(100)" json:"origin"`
	Price              string    `gorm:"type:decimal(10,2);not null" json:"price"`
	SalesPeriod        string    `gorm:"type:varchar(50)" json:"sales_period"`
	UserID             uint      `json:"user_id"`
	PublishDate        time.Time `gorm:"autoCreateTime" json:"publish_date"`
	IsActive           bool      `gorm:"default:true" json:"is_active"`
	IsViolation        bool      `gorm:"default:false" json:"is_violation"`
	ImageURL           string    `gorm:"type:varchar(255)" json:"image_url"`
}

func (SpecialProduct) TableName() string {
	return "specialproduct"
}

type CartItem struct {
	CartID    uint      `gorm:"primaryKey;autoIncrement" json:"cart_id"`
	UserID    uint      `gorm:"not null" json:"user_id"`
	ProductID uint      `gorm:"not null" json:"product_id"`
	Quantity  int       `gorm:"not null" json:"quantity"`
	AddTime   time.Time `gorm:"autoCreateTime" json:"add_time"`

	Status string `gorm:"type:enum('in_cart','purchased','removed');default:'in_cart'" json:"status"`
}

type Order struct {
	OrderID    uint      `gorm:"primaryKey;autoIncrement" json:"order_id"`
	UserID     uint      `gorm:"not null" json:"user_id"`
	TotalPrice float64   `gorm:"type:decimal(10,2);not null" json:"total_price"`
	OrderDate  time.Time `gorm:"autoCreateTime" json:"order_date"`
}

func main() {
	initDB()

	r := gin.Default()

	// CORS 支持
	r.Use(cors.Default())
	db.AutoMigrate(&Order{})
	r.Static("/web", "./Web")
	r.Static("/goods_pic", "./Web/goods_pic")

	r.POST("/register", registerHandler)
	r.POST("/login", loginHandler)
	r.POST("/api/add_products", addProductHandler)
	r.POST("/api/cart", addToCartHandler)
	r.POST("/api/order", createOrderHandler)
	r.POST("/api/order/:order_id/pay", payOrderHandler)

	r.GET("/api/shouye_products", getShouyeProductsHandler)
	r.GET("/api/admin_product", getAdminProductsHandler)
	r.GET("/api/products", getOwnProductsHandler)
	r.GET("/api/users/:user_id", getUserInfoHandler)
	r.GET("/api/cart", getCartItemsHandler)

	r.DELETE("/api/products/:product_id/remove", removeProductHandler)
	r.DELETE("/api/admin_product/:product_id", adminRemoveProductHandler)
	r.DELETE("/api/cart/:product_id", deleteCartItemHandler)
	r.DELETE("/api/order/:order_id", cancelOrderHandler)

	r.PUT("/api/cart/:product_id", updateCartItemQuantityHandler)

	r.Run(":5000") // 启动服务
}

func initDB() {
	dsn := "root:@tcp(127.0.0.1:3306)/exp4?charset=utf8mb4&parseTime=True&loc=Local"
	var err error
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("数据库连接失败：", err)
	}

	// 自动迁移模型
	db.AutoMigrate(&User{})
}

func registerHandler(c *gin.Context) {
	var input struct {
		Username string `json:"username"`
		Password string `json:"password"`
		Email    string `json:"email"`
		Phone    string `json:"phone"`
		Role     int    `json:"role"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "参数格式错误"})
		return
	}

	// 默认角色为 2
	if input.Role == 0 {
		input.Role = 2
	}

	// 唯一性校验
	var count int64
	db.Model(&User{}).Where("username = ?", input.Username).Count(&count)
	if count > 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "用户名已存在"})
		return
	}

	if input.Email != "" {
		db.Model(&User{}).Where("email = ?", input.Email).Count(&count)
		if count > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"message": "邮箱已存在"})
			return
		}
	}

	if input.Phone != "" {
		db.Model(&User{}).Where("phone = ?", input.Phone).Count(&count)
		if count > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"message": "手机号已存在"})
			return
		}
	}

	// 加密密码
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "密码加密失败"})
		return
	}

	// 创建用户
	newUser := User{
		Username:         input.Username,
		Password:         string(hashedPassword),
		Email:            input.Email,
		Phone:            input.Phone,
		Role:             input.Role,
		RegistrationDate: time.Now(),
	}

	if err := db.Create(&newUser).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "用户创建失败"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "注册成功"})
}

func loginHandler(c *gin.Context) {
	var input struct {
		Username string `json:"username"`
		Password string `json:"password"`
		Role     int    `json:"role"`
	}

	if err := c.ShouldBindJSON(&input); err != nil || input.Username == "" || input.Password == "" || input.Role == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "用户名、密码和角色不能为空"})
		return
	}

	var user User
	if err := db.Where("username = ?", input.Username).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "用户名不存在"})
		return
	}

	// 校验密码
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "用户名或密码错误"})
		return
	}

	// 校验角色
	if user.Role != input.Role {
		c.JSON(http.StatusBadRequest, gin.H{"error": "角色不匹配"})
		return
	}

	// 模拟 session：直接返回 userId 和 role
	c.JSON(http.StatusOK, gin.H{
		"message": "登录成功",
		"role":    user.Role,
		"userId":  user.UserID,
	})
}

func getShouyeProductsHandler(c *gin.Context) {
	var products []SpecialProduct
	if err := db.Where("is_active = ?", true).Find(&products).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "查询失败"})
		return
	}
	c.JSON(http.StatusOK, products)
}

func getAdminProductsHandler(c *gin.Context) {
	var products []SpecialProduct
	if err := db.Where("is_active = ?", true).Find(&products).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "查询失败"})
		return
	}
	c.JSON(http.StatusOK, products)
}

func addProductHandler(c *gin.Context) {
	var input struct {
		Category    string `json:"category"`
		Name        string `json:"name"`
		Description string `json:"description"`
		Origin      string `json:"origin"`
		Price       string `json:"price"`
		SalesPeriod string `json:"sales_period"`
		UserID      uint   `json:"user_id"`
		ImageURL    string `json:"image_url"`
		IsActive    bool   `json:"is_active"`    // 使用指针支持 null 检查
		IsViolation bool   `json:"is_violation"` // 同上
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "请求数据无效"})
		return
	}
	if input.Category == "" || input.Name == "" || input.Price == "" || input.UserID == 0 || input.ImageURL == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "缺少必需的字段"})
		return
	}
	// 处理图片路径
	temp := path.Base(input.ImageURL)
	fmt.Println(temp)
	finalImagePath := path.Join("goods_pic", temp)
	fmt.Println("Image Path:", finalImagePath)

	// 默认布尔值处理
	isActive := true
	isActive = input.IsActive

	isViolation := false
	isViolation = input.IsViolation

	// 构造并保存商品
	newProduct := SpecialProduct{
		Category:           input.Category,
		ProductName:        input.Name,
		ProductDescription: input.Description,
		Origin:             input.Origin,
		Price:              input.Price,
		SalesPeriod:        input.SalesPeriod,
		UserID:             input.UserID,
		ImageURL:           finalImagePath,
		IsActive:           isActive,
		IsViolation:        isViolation,
		PublishDate:        time.Now(),
	}

	// 错误检查和处理
	if err := db.Create(&newProduct).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "商品添加失败"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"success": true, "message": "商品添加成功"})
}

func getOwnProductsHandler(c *gin.Context) {
	userIDStr := c.Query("user_id")
	if userIDStr == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "用户 ID 未提供"})
		return
	}

	var userID uint
	_, err := fmt.Sscanf(userIDStr, "%d", &userID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "用户 ID 无效"})
		return
	}

	var products []SpecialProduct
	if err := db.Where("user_id = ?", userID).Find(&products).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "查询失败"})
		return
	}

	// 格式化输出
	var productList []gin.H
	for _, p := range products {
		productList = append(productList, gin.H{
			"product_id":   p.ProductID,
			"category":     p.Category,
			"name":         p.ProductName,
			"description":  p.ProductDescription,
			"origin":       p.Origin,
			"price":        p.Price,
			"sales_period": p.SalesPeriod,
			"image_url":    p.ImageURL,
			"is_active":    p.IsActive,
			"publish_date": p.PublishDate.Format(time.RFC3339),
			"is_violation": p.IsViolation,
		})
	}
	if len(productList) == 0 {
		c.JSON(http.StatusOK, []gin.H{}) // 返回空数组，不是 null
		return
	}

	c.JSON(http.StatusOK, productList)
}

func removeProductHandler(c *gin.Context) {
	// 创建一个结构体来绑定请求体中的数据
	var input struct {
		UserID uint `json:"user_id"` // 从请求体中提取 user_id
	}

	// 解析请求体
	if err := c.ShouldBindJSON(&input); err != nil {
		fmt.Println("Error binding JSON:", err) // 打印具体的绑定错误
		c.JSON(http.StatusBadRequest, gin.H{"message": "请求数据无效"})
		return
	}

	userID := input.UserID
	fmt.Println("User ID from body:", userID) // 检查 user_id

	if userID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "未提供用户ID"})
		return
	}

	// 获取商品 ID
	productIDStr := c.Param("product_id")
	var productID uint
	_, err := fmt.Sscanf(productIDStr, "%d", &productID)
	fmt.Println("Product ID from path:", productIDStr)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "商品 ID 无效"})
		return
	}

	// 查找商品并验证是否是该用户的商品
	var product SpecialProduct
	if err := db.Where("product_id = ? AND user_id = ?", productID, userID).Find(&product).Error; err != nil {
		fmt.Println("商品未找到或没有权限删除该商品")
		c.JSON(http.StatusNotFound, gin.H{"message": "商品未找到或没有权限删除该商品"})
		return
	}

	// 删除商品
	if err := db.Delete(&product).Error; err != nil {
		fmt.Println("删除商品失败")
		c.JSON(http.StatusInternalServerError, gin.H{"message": "删除商品失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "商品已删除"})
}

func adminRemoveProductHandler(c *gin.Context) {
	productIDStr := c.Param("product_id")
	var productID uint
	_, err := fmt.Sscanf(productIDStr, "%d", &productID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "商品 ID 无效"})
		return
	}

	var product SpecialProduct
	if err := db.First(&product, productID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"success": false, "message": "商品未找到"})
		return
	}

	product.IsActive = false
	product.IsViolation = true

	if err := db.Save(&product).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "状态更新失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "商品已下架并标记为违规"})
}

func getUserInfoHandler(c *gin.Context) {
	userIDStr := c.Param("user_id")
	var userID uint
	_, err := fmt.Sscanf(userIDStr, "%d", &userID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "用户 ID 无效"})
		return
	}

	var user User
	if err := db.First(&user, userID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"success": false, "message": "用户不存在"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success":  true,
		"username": user.Username,
	})
}

func getCartItemsHandler(c *gin.Context) {
	userIDStr := c.Query("user_id")
	if userIDStr == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "User not logged in"})
		return
	}

	var userID uint
	if _, err := fmt.Sscanf(userIDStr, "%d", &userID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "用户 ID 无效"})
		return
	}

	// 联合查询购物车与商品表
	type CartItemResponse struct {
		CartID             uint   `json:"cart_id"`
		ProductID          uint   `json:"product_id"`
		ProductName        string `json:"product_name"`
		ProductDescription string `json:"product_description"`
		Price              string `json:"price"`
		Quantity           int    `json:"quantity"`
		ImageURL           string `json:"image_url"`
	}

	var results []CartItemResponse

	err := db.Table("cart_items").
		Select("cart_items.cart_id, specialproduct.product_id, specialproduct.product_name, specialproduct.product_description, specialproduct.price, specialproduct.image_url, cart_items.quantity").
		Joins("JOIN specialproduct ON cart_items.product_id = specialproduct.product_id").
		Where("cart_items.user_id = ? AND cart_items.status = ?", userID, "in_cart").
		Scan(&results).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "查询失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"items": results})
}

func addToCartHandler(c *gin.Context) {
	var input struct {
		UserID    uint `json:"user_id"`
		ProductID uint `json:"product_id"`
		Quantity  int  `json:"quantity"`
	}

	if err := c.ShouldBindJSON(&input); err != nil || input.UserID == 0 {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "User not logged in"})
		return
	}
	fmt.Println(input.UserID)
	fmt.Println(input.ProductID)
	if input.Quantity <= 0 {
		input.Quantity = 1
	}

	// 检查商品是否存在
	var product SpecialProduct
	if err := db.Find(&product, input.ProductID).Error; err != nil {
		fmt.Println(err)
		c.JSON(http.StatusNotFound, gin.H{"message": "Product not found"})
		return
	}

	// 查询购物车中是否已有该商品
	var cartItem CartItem
	err := db.Where("user_id = ? AND product_id = ? AND status = ?", input.UserID, input.ProductID, "in_cart").
		Find(&cartItem).Error
	fmt.Println(err)
	if err != nil {
		// 商品已在购物车中，更新数量
		cartItem.Quantity += input.Quantity
		if err := db.Save(&cartItem).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "更新购物车失败"})
			return
		}
	} else {
		// 不存在则创建新项
		newItem := CartItem{
			UserID:    input.UserID,
			ProductID: input.ProductID,
			Quantity:  input.Quantity,
			Status:    "in_cart",
			AddTime:   time.Now(),
		}
		if err := db.Create(&newItem).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "添加购物车失败"})
			return
		}
	}

	c.Status(http.StatusNoContent) // 204 No Content
}

func deleteCartItemHandler(c *gin.Context) {
	productIDStr := c.Param("product_id")
	userIDStr := c.Query("user_id")

	if userIDStr == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "User not logged in"})
		return
	}

	var userID uint
	var productID uint
	if _, err := fmt.Sscanf(userIDStr, "%d", &userID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "参数格式错误"})
		return
	}
	if _, err := fmt.Sscanf(productIDStr, "%d", &productID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "参数格式错误"})
		return
	}

	var cartItem CartItem
	if err := db.Where("user_id = ? AND product_id = ? AND status = ?", userID, productID, "in_cart").
		First(&cartItem).Error; err != nil {
		if gorm.ErrRecordNotFound == err {
			c.JSON(http.StatusNotFound, gin.H{"message": "Item not found in cart"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Database error", "error": err.Error()})
		}
		return
	}

	if err := db.Delete(&cartItem).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "删除失败", "error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "Item successfully deleted from cart"})
}

func updateCartItemQuantityHandler(c *gin.Context) {
	productIDStr := c.Param("product_id")
	userIDStr := c.Query("user_id")

	if userIDStr == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "User not logged in"})
		return
	}

	var userID, productID uint
	if _, err := fmt.Sscanf(userIDStr, "%d", &userID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "参数格式错误"})
		return
	}
	if _, err := fmt.Sscanf(productIDStr, "%d", &productID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "参数格式错误"})
		return
	}
	var body struct {
		Quantity int `json:"quantity"`
	}
	if err := c.ShouldBindJSON(&body); err != nil || body.Quantity <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid quantity"})
		return
	}

	var cartItem CartItem
	if err := db.Where("user_id = ? AND product_id = ? AND status = ?", userID, productID, "in_cart").
		First(&cartItem).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Item not found in cart"})
		return
	}

	cartItem.Quantity = body.Quantity
	if err := db.Save(&cartItem).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "更新失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "Quantity updated successfully"})
}

func createOrderHandler(c *gin.Context) {
	var input struct {
		UserID     uint    `json:"user_id"`
		TotalPrice float64 `json:"totalPrice"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "无效参数"})
		return
	}
	fmt.Println(input.UserID)
	fmt.Println(input.TotalPrice)
	if input.UserID == 0 {
		fmt.Println("用户未登录")
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "用户未登录"})
		return
	}

	if input.TotalPrice <= 0 {
		fmt.Println(input.TotalPrice)
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "无效的订单总价"})
		return
	}

	newOrder := Order{
		UserID:     input.UserID,
		TotalPrice: input.TotalPrice,
		OrderDate:  time.Now(),
	}

	if err := db.Create(&newOrder).Error; err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"success": false, "message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success":    true,
		"orderId":    newOrder.OrderID,
		"totalPrice": newOrder.TotalPrice,
	})
}

func cancelOrderHandler(c *gin.Context) {
	orderIDStr := c.Param("order_id")
	var orderID uint
	if _, err := fmt.Sscanf(orderIDStr, "%d", &orderID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "订单ID无效"})
		return
	}

	var order Order
	if err := db.First(&order, orderID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"success": false, "message": "订单不存在"})
		return
	}

	if err := db.Delete(&order).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false, "message": "订单取消失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "订单已取消"})
}

func payOrderHandler(c *gin.Context) {
	orderIDStr := c.Param("order_id")
	var orderID uint
	if _, err := fmt.Sscanf(orderIDStr, "%d", &orderID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "订单ID无效"})
		return
	}

	var order Order
	if err := db.First(&order, orderID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"success": false, "message": "订单不存在"})
		return
	}

	// 模拟支付：删除订单（建议改成更新支付状态）
	if err := db.Delete(&order).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false, "message": "支付失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "支付成功"})
}
