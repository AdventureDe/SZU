package info

import (
	"errors"

	"szu_market/internal/db"

	"gorm.io/gorm"
)

// UserService 定义用户服务
type UserService struct {
	DB *gorm.DB
}

// NewUserService 创建新的用户服务实例
func NewUserService(db *gorm.DB) *UserService {
	return &UserService{DB: db}
}

// UserInfoResponse 用户信息响应结构
type UserInfoResponse struct {
	UserID           uint   `json:"user_id"`
	Username         string `json:"username"`
	Email            string `json:"email"`
	Phone            string `json:"phone"`
	RegistrationDate string `json:"registration_date"`
}

// GetUserInfo 获取用户信息
func (s *UserService) GetUserInfo(userID uint) (*UserInfoResponse, error) {
	// 验证用户ID
	if userID == 0 {
		return nil, errors.New("用户ID无效")
	}

	// 查询用户信息
	var user db.User
	if err := s.DB.First(&user, userID).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.New("用户不存在")
		}
		return nil, errors.New("查询用户信息失败")
	}

	// 构建响应
	response := &UserInfoResponse{
		UserID:           user.UserID,
		Username:         user.Username,
		Email:            user.Email,
		Phone:            user.Phone,
		RegistrationDate: user.RegistrationDate.Format("2006-01-02 15:04:05"),
	}

	return response, nil
}
