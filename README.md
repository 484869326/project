


![PHP 7.4 badge](https://img.shields.io/badge/PHP-7.4-blue)  ![MySQL 5.7.26 badge](https://img.shields.io/badge/MySQL-5.7.26-blue)    ![Laravel 5.7.29 badge](https://img.shields.io/badge/Laravel-5.7.29-red)         ![UniApp](https://img.shields.io/badge/UniApp-v4.0.0-brightgreen) ![Vue 3](https://img.shields.io/badge/Vue-3.4.21-brightgreen) ![Element Plus](https://img.shields.io/badge/Element%20Plus-v2.6.1-brightgreen)   ![Pinia](https://img.shields.io/badge/Pinia-v2.1.7-brightgreen)  ![Echarts](https://img.shields.io/badge/Echarts-v5.2.2-brightgreen) ![Vite](https://img.shields.io/badge/Vite-v5.1.5-brightgreen)

 - [在线访问网站](http://20.255.60.222:3333/)
 
 - 服务器系统Ubuntu。用jenkins使用自动化部署，1g1核服务器很容易崩，望见谅

> tips：
> 说明文档如果图片没显示，是因为我把图片弄在GitHub的仓库，得使用科学上网才能正常加载。
> 数据库可以拿现有，也可以laravel命令生成，首先得先创建数据库(create database store;)
> 命令行窗口到shoppingApi目录下,执行 php artisan migrate  
> 最后数据填充  php artisan db:seed 
<h1 align="center">小E商城</h1>

## 1.系统功能结构图
### 1.1前台系统
![image](https://github.com/484869326/picture/blob/main/mallApp/mallApp.png?raw=true)
### 1.2 后台系统
![image](https://github.com/484869326/picture/blob/main/mallBackend/mallBackend.png?raw=true)
## 2.系统架构图
![image](https://github.com/484869326/picture/blob/main/structure.png?raw=true)
## 3.系统展示（前台）
### 3.1 登录/注册界面
![image](https://github.com/484869326/picture/blob/main/mallApp/login_code.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/login_validate.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/login_register.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/login_password.png?raw=true)
### 3.2 首页界面
   ![image](https://github.com/484869326/picture/blob/main/mallApp/home.png?raw=true)
### 3.3 搜索页面
  ![image](https://github.com/484869326/picture/blob/main/mallApp/search.png?raw=true)
  ![image](https://github.com/484869326/picture/blob/main/mallApp/search_list.png?raw=true)
### 3.4 分类界面
![image](https://github.com/484869326/picture/blob/main/mallApp/category.png?raw=true)
### 3.5 商品界面
![image](https://github.com/484869326/picture/blob/main/mallApp/detail.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/order.png?raw=true)
### 3.6 购物车界面
![image](https://github.com/484869326/picture/blob/main/mallApp/shop_empty.png?raw=true) 
![image](https://github.com/484869326/picture/blob/main/mallApp/shop.png?raw=true)
### 3.7 订单管理界面
![image](https://github.com/484869326/picture/blob/main/mallApp/order_manage.png?raw=true)
### 3.8 我的界面
![image](https://github.com/484869326/picture/blob/main/mallApp/my.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/my_login.png?raw=true)
### 3.9 设置页面
![image](https://github.com/484869326/picture/blob/main/mallApp/setting.png?raw=true)
### 3.10 地址管理界面
![image](https://github.com/484869326/picture/blob/main/mallApp/address_null.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/address_insert.png?raw=true)
![image](https://github.com/484869326/picture/blob/main/mallApp/address_list.png?raw=true)
## 4.系统展示（后台）
### 4.1登录界面
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/login.png)
### 4.2技术总览界面
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/technology.png)
### 4.3系统统计(数据可视化)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/statistics.png)
### 4.4用户管理
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/user_manage.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/user_manage_edit.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/user_manage_add.png)
### 4.5菜单管理
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/menu_manage.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/menu_manage_edit.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/menu_manage_edit2.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/menu_manage_add.png)
### 4.6 管理员管理
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/admin_manage.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/admin_manage_edit.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/admin_manage_add.png)
### 4.7 商品类别管理
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/category_manage.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/category_manage_edit.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/category_manage_edit2.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/category_manage_edit3.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/category_manage_add.png)
### 4.8商品管理
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/good_manage.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/good_manage_edit.png)
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/good_manage_add.png)
### 4.9订单管理
![image](https://raw.githubusercontent.com/484869326/picture/main/mallBackend/order_manage.png)