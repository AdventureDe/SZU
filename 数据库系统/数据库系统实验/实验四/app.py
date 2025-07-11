from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os
import secrets
from sqlalchemy.dialects import mysql

secret_key = secrets.token_hex(16)  # 生成一个 32 字符长的随机密钥
app = Flask(__name__)
CORS(app)

# 配置数据库连接
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/exp4'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = secret_key
db = SQLAlchemy(app)

# 定义用户模型
class User(db.Model):
    __tablename__ = 'User'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # 用户ID
    username = db.Column(db.String(100), unique=True, nullable=False)      # 用户名
    password = db.Column(db.String(255), nullable=False)                   # 加密存储的密码
    email = db.Column(db.String(100), nullable=True)                       # 电子邮件 (可为空)
    role = db.Column(db.Integer, nullable=False)  # 角色，1表示管理员，2表示普通用户
    registration_date = db.Column(db.TIMESTAMP, default=db.func.current_timestamp())  # 注册日期
    phone = db.Column(db.String(20), nullable=True)                        # 联系电话 (可为空)

# 定义商品模型
class SpecialProduct(db.Model):
    __tablename__ = 'specialproduct'
    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # 商品ID，主键，自增
    category = db.Column(db.String(50), nullable=False)  # 商品类别
    product_name = db.Column(db.String(255), nullable=False)  # 商品名称
    product_description = db.Column(db.Text)  # 商品描述
    origin = db.Column(db.String(100))  # 商品来源
    price = db.Column(db.Numeric(10, 2), nullable=False)  # 商品价格
    sales_period = db.Column(db.String(50))  # 销售周期
    user_id = db.Column(db.Integer)  # 用户ID
    publish_date = db.Column(db.TIMESTAMP, default=db.func.current_timestamp())  # 发布日期，默认当前时间
    is_active = db.Column(db.Boolean, default=True)  # 是否激活，默认1
    is_violation = db.Column(db.Boolean, default=False)  # 是否违规，默认0
    image_url = db.Column(db.String(255))  # 商品图片的URL或路径

    def to_dict(self):
        return {
            'product_id': self.product_id,
            'category': self.category,
            'product_name': self.product_name,
            'product_description': self.product_description,
            'origin': self.origin,
            'price': str(self.price),
            'sales_period': self.sales_period,
            'publish_date': self.publish_date,
            'is_active': self.is_active,
            'is_violation': self.is_violation,
            'image_url': self.image_url
        }

# 购物车商品模型
class CartItem(db.Model):
    __tablename__ = 'cart_items'

    cart_id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # 购物车物品的主键
    user_id = db.Column(db.Integer, nullable=False)  # 用户ID
    product_id = db.Column(db.Integer, nullable=False)  # 商品ID
    quantity = db.Column(db.Integer, nullable=False)  # 商品数量
    add_time = db.Column(db.DateTime, default=datetime.utcnow)  # 商品添加时间

    # 添加 status 字段，默认为 'in_cart'
    status = db.Column(db.Enum('in_cart', 'purchased', 'removed', name='cart_item_status'), default='in_cart',
                       nullable=False)

    # def __repr__(self):
    #     return f"<CartItem(cart_id={self.cart_id}, user_id={self.user_id}, product_id={self.product_id},
    #     quantity={self.quantity}, status={self.status})>"
    #

# 订单模型
class Order(db.Model):
    __tablename__ = 'orders'
    order_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, nullable=False)
    total_price = db.Column(db.Numeric(10, 2), nullable=False)
    order_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

# 创建数据库表（第一次运行时）
with app.app_context():
    db.create_all()

# 注册接口
@app.route('/register', methods=['POST'])
def register():
    # 获取前端传过来的数据
    username = request.json.get('username')
    password = request.json.get('password')
    email = request.json.get('email', None)  # 如果没有提供邮箱，默认为 None
    phone = request.json.get('phone', None)  # 如果没有提供电话，默认为 None
    role = request.json.get('role', 2)  # 默认角色为 2（普通用户）

    # 检查是否存在相同用户名、邮箱或手机号
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "用户名已存在"}), 400
    if email and User.query.filter_by(email=email).first():  # 只有提供了email才检查邮箱
        return jsonify({"message": "邮箱已存在"}), 400
    if phone and User.query.filter_by(phone=phone).first():  # 只有提供了phone才检查手机号
        return jsonify({"message": "手机号已存在"}), 400

    # 对密码进行加密
    hashed_password = generate_password_hash(password)

    # 创建新用户对象
    new_user = User(username=username, password=hashed_password, email=email, phone=phone, role=role)

    # 添加到数据库
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "注册成功"}), 201

@app.route('/login', methods=['POST'])
def login():
    # 获取前端传来的数据
    data = request.json
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')

    if not username or not password or not role:
        return jsonify({"error": "用户名、密码和角色不能为空"}), 400

    # 查询数据库中的用户
    user = User.query.filter_by(username=username).first()

    if user:
        # 检查密码是否匹配
        if check_password_hash(user.password, password):
            if user.role == role:
                session['user_id'] = user.user_id  # 将user_id存入session
                print(user.user_id)
                return jsonify({
                    "message": "登录成功",
                    "role": user.role,  # 返回用户角色
                    "userId": user.user_id    # 返回用户ID
                })
            else:
                return jsonify({"error": "角色不匹配"}), 400
        else:
            return jsonify({"error": "用户名或密码错误"}), 400
    else:
        return jsonify({"error": "用户名不存在"}), 404

# 获取商品列表API
@app.route('/api/shouye_products', methods=['GET'])
def get_shouye_products():
    products = SpecialProduct.query.filter(SpecialProduct.is_active == True).all()  # 查询激活的商品
    return jsonify([product.to_dict() for product in products])

# 获取商品列表API
@app.route('/api/admin_product', methods=['GET'])
def get_admin_products():
    products = SpecialProduct.query.filter(SpecialProduct.is_active == True).all()  # 查询激活的商品
    return jsonify([product.to_dict() for product in products])

# 添加商品的接口
@app.route('/api/add_products', methods=['POST'])
def add_product():
    data = request.get_json()

    category = data.get('category')
    product_name = data.get('name')
    product_description = data.get('description')
    origin = data.get('origin')
    price = data.get('price')
    sales_period = data.get('sales_period')
    user_id = data.get('user_id')
    image_url = data.get('image_url')
    is_active = data.get('is_active', True)
    is_violation = data.get('is_violation', False)
    print(image_url)
    temp = os.path.basename(image_url)
    image_url = os.path.join(r"goods_pic", temp)
    print(image_url)
    if not (category and product_name and price and user_id and image_url):
        return jsonify({"error": "缺少必需的字段"}), 400

    # 创建新的商品并保存到数据库
    new_product = SpecialProduct(
        category=category,
        product_name=product_name,
        product_description=product_description,
        origin=origin,
        price=price,
        sales_period=sales_period,
        user_id=user_id,
        image_url=image_url,
        is_active=is_active,
        is_violation=is_violation
    )

    db.session.add(new_product)
    db.session.commit()

    return jsonify({"success": True, "message": "商品添加成功"}), 201

# 获取商品列表的接口
@app.route('/api/products', methods=['GET'])
def get_own_products():
    try:
        user_id = request.args.get('user_id')
        if not user_id:
            return jsonify({"error": "用户 ID 未提供"}), 400

        products = SpecialProduct.query.filter_by(user_id=user_id).all()

        if not products:
            return jsonify([]), 200

        product_list = []
        for product in products:
            product_data = {
                'product_id': product.product_id,
                'category': product.category,
                'name': product.product_name,
                'description': product.product_description,
                'origin': product.origin,
                'price': str(product.price),
                'sales_period': product.sales_period,
                'image_url': product.image_url,
                'is_active': product.is_active,
                'publish_date': product.publish_date.isoformat(),
                'is_violation': product.is_violation
            }
            product_list.append(product_data)

        return jsonify(product_list), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500  # 捕获异常并返回错误信息

# 删除商品（用户端下架商品
@app.route('/api/products/<int:product_id>/remove', methods=['DELETE'])
def remove_product(product_id):
    user_id = request.json.get('user_id')  # 获取用户ID
    if not user_id:
        return jsonify({"message": "未提供用户ID"}), 400

    # 查找商品并确保是该用户的商品
    product = SpecialProduct.query.filter_by(product_id=product_id, user_id=user_id).first()

    if not product:
        return jsonify({"message": "商品未找到或没有权限删除该商品"}), 404

    # 删除商品
    db.session.delete(product)
    db.session.commit()

    return jsonify({"success": True, "message": "商品已删除"})

# 下架商品
@app.route('/api/admin_product/<int:product_id>', methods=['DELETE'])
def remove_product1(product_id):
    # 查找商品
    product = SpecialProduct.query.get(product_id)

    if product:
        # 更新商品的状态，设置为下架（is_active=0）并标记为违规（is_violation=1）
        product.is_active = 0
        product.is_violation = 1
        db.session.commit()  # 提交更改

        return jsonify({'success': True, 'message': '商品已下架并标记为违规'}), 200
    else:
        return jsonify({'success': False, 'message': '商品未找到'}), 404

# 用户信息加载
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user_info(user_id):
    # 从数据库中获取用户信息
    user = User.query.get(user_id)
    if user:
        return jsonify({
            'success': True,
            'username': user.username  # 返回用户名
        })
    else:
        return jsonify({'success': False, 'message': '用户不存在'}), 404

# 加载购物车物品
@app.route('/api/cart', methods=['GET'])
def get_cart_items():
    # 从请求的查询参数中获取 user_id
    user_id = request.args.get('user_id')
    print(f"User ID: {user_id}")  # 输出用户ID，确认是否正确获取

    if not user_id:
        return jsonify({'message': 'User not logged in'}), 401  # 用户未登录

    # 查询该用户的所有购物车商品
    cart_items = db.session.query(
        CartItem.cart_id,  # 购物车ID
        SpecialProduct.product_id,
        SpecialProduct.product_name,
        SpecialProduct.product_description,
        SpecialProduct.price,  # 获取价格
        SpecialProduct.image_url,
        CartItem.quantity  # 获取商品数量
    ).join(
        SpecialProduct, CartItem.product_id == SpecialProduct.product_id
    ).filter(
        CartItem.user_id == user_id,
        CartItem.status == 'in_cart'
    ).all()

    if not cart_items:
        print("No items found in cart.")
        return jsonify({'items': []})  # 返回空购物车

    cart_list = []
    for cart_item in cart_items:
        cart_list.append({
            'cart_id': cart_item.cart_id,
            'product_id': cart_item.product_id,
            'product_name': cart_item.product_name,
            'product_description': cart_item.product_description,
            'price': str(cart_item.price),  # 转为字符串
            'quantity': cart_item.quantity,
            'image_url': cart_item.image_url
        })

    return jsonify({'items': cart_list})

# 添加物品到购物车
@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    # 从请求体获取 user_id 和 product_id
    data = request.get_json()
    user_id = data.get('user_id')  # 从请求体获取 user_id
    product_id = data.get('product_id')
    quantity = data.get('quantity', 1)  # 默认数量为 1

    # 用户未登录的情况
    if not user_id:
        return 'User not logged in', 401  # 用户未登录

    # 检查商品是否存在
    product = SpecialProduct.query.get(product_id)
    if not product:
        return 'Product not found', 404

    # 查询购物车中是否已有该商品
    cart_item = CartItem.query.filter_by(user_id=user_id, product_id=product_id, status='in_cart').first()

    if cart_item:
        # 如果购物车中已经存在该商品，更新数量
        cart_item.quantity += quantity
    else:
        # 如果购物车中没有该商品，创建新记录
        cart_item = CartItem(user_id=user_id, product_id=product_id, quantity=quantity)

    # 保存到数据库
    db.session.add(cart_item)
    db.session.commit()

    return '', 204  # 只返回成功状态码，表示成功添加数据

@app.route('/api/cart/<int:product_id>', methods=['DELETE'])
def delete_cart_item(product_id):
    user_id = request.args.get('user_id')  # 从请求的查询参数中获取 user_id

    if not user_id:
        return jsonify({'message': 'User not logged in'}), 401  # 如果没有用户ID，则返回 401 错误

    # 查询购物车中是否存在该商品
    cart_item = CartItem.query.filter_by(user_id=user_id, product_id=product_id, status='in_cart').first()

    if not cart_item:
        return jsonify({'message': 'Item not found in cart'}), 404  # 如果找不到该商品，返回 404 错误

    # 删除该商品
    db.session.delete(cart_item)
    db.session.commit()

    return jsonify({'success': True, 'message': 'Item successfully deleted from cart'}), 200

@app.route('/api/cart/<int:product_id>', methods=['PUT'])
def update_cart_item_quantity(product_id):
    user_id = request.args.get('user_id')  # 获取查询参数中的 user_id
    if not user_id:
        return jsonify({'message': 'User not logged in'}), 401  # 如果没有用户 ID，则返回 401 错误

    new_quantity = request.json.get('quantity')  # 获取请求体中的数量
    if not new_quantity or new_quantity <= 0:
        return jsonify({'message': 'Invalid quantity'}), 400  # 如果数量无效，则返回 400 错误

    # 查询购物车中的商品
    cart_item = CartItem.query.filter_by(user_id=user_id, product_id=product_id, status='in_cart').first()

    if not cart_item:
        return jsonify({'message': 'Item not found in cart'}), 404  # 如果找不到商品，返回 404 错误

    # 更新商品数量
    cart_item.quantity = new_quantity
    db.session.commit()  # 提交更改

    # 返回成功响应
    return jsonify({'success': True, 'message': 'Quantity updated successfully'}), 200

# 创建订单
@app.route('/api/order', methods=['POST'])
def create_order():
    try:
        data = request.get_json()  # 获取前端发送的 JSON 数据
        user_id = data.get('userId')
        total_price = data.get('totalPrice')

        if not user_id:
            return jsonify({'success': False, 'message': '用户未登录'}), 400

        if total_price is None or total_price <= 0:
            return jsonify({'success': False, 'message': '无效的订单总价'}), 400

        # 创建新订单
        new_order = Order(user_id=user_id, total_price=total_price, order_date=datetime.utcnow())
        db.session.add(new_order)
        db.session.commit()

        return jsonify({
            'success': True,
            'orderId': new_order.order_id,
            'totalPrice': float(new_order.total_price)
        })

    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500


# 取消订单 API
@app.route('/api/order/<int:order_id>', methods=['DELETE'])
def cancel_order(order_id):
    try:
        order = Order.query.get(order_id)

        if not order:
            return jsonify({'success': False, 'message': '订单不存在'}), 404

        db.session.delete(order)
        db.session.commit()

        return jsonify({'success': True, 'message': '订单已取消'})

    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500


# 支付订单 API
@app.route('/api/order/<int:order_id>/pay', methods=['POST'])
def pay_order(order_id):
    try:
        order = Order.query.get(order_id)

        if not order:
            return jsonify({'success': False, 'message': '订单不存在'}), 404
        # 支付订单
        db.session.delete(order)
        db.session.commit()

        return jsonify({'success': True, 'message': '支付成功'})

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
