from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, Text, Float, DateTime, ForeignKey, Table
from sqlalchemy import relationship


db = SQLAlchemy()

class User(db.Model):
    _tablename_ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    order = db.relationship("Order", backref="user")
    
    def _repr_(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        
class Order(db.Model):
     _tablename_ = "orders"
     id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
     date = db.Column(db.DateTime, default=datetime.now, nullable=False)
     amount = db.Column(db.Float, nullable=False)
     address = db.Column(db.String(180), nullable=False)
     deliver_address = db.Column(db.String(180), nullable=False)
     status = db.Column(db.String(180), nullable=False)
     user_id = db.Column(db.Integer, ForeignKey("users.id"))
     order_detail = db.relationship("OrderDetail", backref = "order")
     
class OrderDetail(db.Model):
    __tablename__ = "order_detail"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False) 
    order_id = db.Column(db.Integer, ForeignKey("orders.id"), primary_key=True, nullable=False)
    product_id = db.Column(db.Integer, ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False) 
    amount = db.Column(db.Float, nullable=False)

class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    photo = db.Column(db.String(200), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    category_id = db.Column(db.Integer, ForeignKey("categories.id"), nullable=False)
    subcategory_id = db.Column(db.Integer, ForeignKey("subcategories.id"), nullable=False)
    order_detail = db.relationship("OrderDetail", backref="product")

class Category(db.Model):
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    product = db.relationship("Product", backref="category")
    subcategory = db.relationship("Subcategory", backref="category")
    
class Subcategory(db.Model):
    __tablename__ = "subcategories"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    category_id = db.Column(db.Integer, ForeignKey("categories.id"), nullable=False)
    product =db.relationship("Product", backref="subcategory")

     
     