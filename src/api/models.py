from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    salt = db.Column(db.String(180), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=db.func.now(), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    orders = db.relationship("Order", backref="user")
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name" : self.name,
            "lastname" : self.lastname,
            "email": self.email            
            # do not serialize the password, its a security breach
            
        }
        
class Order(db.Model):
     __tablename__ = "orders"
     id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
     date = db.Column(db.DateTime, default=datetime.now, nullable=False)
     amount = db.Column(db.Float, nullable=False)
     address = db.Column(db.String(180), nullable=False)
     deliver_address = db.Column(db.String(180), nullable=False)
     status = db.Column(db.String(180), nullable=False)
     user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
     order_details = db.relationship("OrderDetail", backref = "order")
     
class OrderDetail(db.Model):
    __tablename__ = "order_detail"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False) 
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"), primary_key=True, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False) 
    amount = db.Column(db.Float, nullable=False)

class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    photo = db.Column(db.String(200), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    subcategory_id = db.Column(db.Integer, db.ForeignKey("subcategories.id"), nullable=False)
    order_detail = db.relationship("OrderDetail", backref="product")
    stock = db.relationship("Stock", backref="product")
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "photo": self.photo,
            "amount": self.amount,
            "category_id": self.category_id,
            "subcategory_id": self.subcategory_id
            
        }
    
class Category(db.Model):
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    product = db.relationship("Product", backref="category")
    subcategory = db.relationship("Subcategory", backref="category")
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
                    
        }
    
class Subcategory(db.Model):
    __tablename__ = "subcategories"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    product =db.relationship("Product", backref="subcategory")
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "category_id" : self.category_id
                    
        }


class Stock(db.Model):
    __tablename__ = "stock"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    products_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    date_in = db.Column(db.DateTime, default=datetime.now, nullable=False)
     
    def serialize(self):
        return {
            
            # do not serialize the password, its a security breach
        }
        
