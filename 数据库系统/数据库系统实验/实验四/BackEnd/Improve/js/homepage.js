// 获取用户 ID
const user_id = parseInt(sessionStorage.getItem("userId") || "0", 10);

// 添加商品到购物车
function addToCart(product) {
    if (!user_id) {
        showNotification('请先登录！');
        console.log(user_id);
        return;
    }
    const quantity = 1; // 默认数量为 1

    // 创建要发送到后端的数据
    const cartData = {
        user_id: parseInt(user_id), // 从 sessionStorage 获取 user_id
        product_id: parseInt(product.product_id),
        quantity: quantity
    };
    console.log(cartData);
    // 调用后端 API，使用 fetch 发送数据
    fetch('http://localhost:5000/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
        .then(response => {
            if (response.status === 204) {
                showNotification('商品已加入购物车！'); // 提示用户商品已加入购物车
            } else if (response.status === 401) {
                showNotification('请先登录！'); // 用户未登录
            } else if (response.status === 404) {
                showNotification('商品未找到！'); // 商品不存在
            } else {
                showNotification('添加商品到购物车失败，请稍后再试');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('添加商品到购物车失败，请稍后再试');
        });
}

// 显示通知的函数
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);

    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // 3秒后隐藏并移除通知
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 加载商品并添加事件监听器
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/api/shouye_products')
        .then(response => response.json())
        .then(products => {
            const productList = document.querySelector('.product-list');
            productList.innerHTML = '';

            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                        <img src="${product.image_url}" alt="${product.product_name}">
                        <div class="product-info">
                            <h3 class="name">${product.product_name}</h3>
                            <p class="category">类别：${product.category}</p>
                            <p class="description">描述：${product.product_description}</p>
                            <p class="place">产地：${product.origin}</p>
                            <p class="price">¥${product.price}</p>
                            <p class="date">销售期：${product.sales_period}</p>
                            <div class="product-footer">
                                <i class="far fa-star star-icon" onclick="toggleFavorite(this)"></i>
                                <button class="add-to-cart">加入购物车</button>
                            </div>
                        </div>
                    `;
                productList.appendChild(productItem);

                // 为新商品的"加入购物车"按钮绑定事件
                const addToCartButton = productItem.querySelector('.add-to-cart');
                addToCartButton.addEventListener('click', () => {
                    addToCart(product);
                });
            });
        })
        .catch(error => console.error('加载商品数据失败', error));

    // 为现有的"加入购物车"按钮绑定事件
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productItem = this.closest('.product-item');
            const product = {
                product_id: 1, // 示例ID
                product_name: productItem.querySelector('.name').textContent,
                price: productItem.querySelector('.price').textContent.replace('¥', '')
            };
            addToCart(product);
        });
    });

    // 搜索栏事件
    document.querySelector('.search-box').addEventListener('input', (event) => {
        console.log(`当前输入内容：${event.target.value}`);
    });
});

// 收藏功能
function toggleFavorite(icon) {
    // 切换填充状态
    icon.classList.toggle('filled');
    // 改变图标样式
    if (icon.classList.contains('filled')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showNotification('已收藏！');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        showNotification('已取消收藏！');
    }
}