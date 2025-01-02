"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Category, Subcategory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os, datetime
from base64 import b64encode
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)



@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    products_serialized = [product.serialize() for product in products]
    return jsonify(products_serialized), 200

   
    
@api.route('/products', methods=['POST'])
def add_products():
    body = request.form
    
    if 'name' not in body:         
        return jsonify({"error": "name required"}), 400  
    if 'amount' not in body:
        return jsonify({"error" : "amount required"}), 400
    if 'category_id' not in body:
        return jsonify({"error": "category_id required"}), 400 
    if 'subcategory_id' not in body:
        return jsonify({"error": "subcategory_id required"})
    subcategory_exist = Subcategory.query.filter_by(name=body['name']).first()     
    if subcategory_exist:
        return jsonify({"error" : "subcategory name already exist"}), 400 
    
    new_product = Product(
        name=body['name'],
        photo=request.files['photo'].filename,
        amount=body['amount'],
        category_id=body['category_id'],
        subcategory_id=body['subcategory_id']
                  
        )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product added" }), 200

@api.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    pass
# falta completar 

@api.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    categories_serialized = [category.serialize() for category in categories]
    return jsonify(categories_serialized), 200
    
    
@api.route('/categories', methods=['POST'])
def add_category():
    body = request.get_json()
    
    if 'name' not in body:         
        return jsonify({"error": "name required"}), 400     
    category_exist = Category.query.filter_by(name=body['name']).first()     
    if category_exist:
        return jsonify({"error" : "category name already exist"}), 400 
   
    new_category = Category(
        
        name=body['name'],       
    )
    db.session.add(new_category)
    db.session.commit()
    return jsonify({"message": "Category Created", "category": new_category.serialize()})

@api.route('/categories/<int:id>', methods=['DELETE'])
def delete_category():
    pass
# falta completar

@api.route('/subcategories', methods=['GET'])
def get_subcategories():
    subcategories = Subcategory.query.all()
    subcategories_serialized = [subcategory.serialize() for subcategory in subcategories]
    return jsonify(subcategories_serialized), 200
    
@api.route('/subcategories', methods=['POST'])
def add_subcategory():
    body = request.get_json()
    
    if 'name' not in body:         
        return jsonify({"error": "name required"}), 400    
    if 'category_id' not in body:
        return jsonify({"error": "category_id required"}), 400 
    subcategory_exist = Subcategory.query.filter_by(name=body['name']).first()     
    if subcategory_exist:
        return jsonify({"error" : "subcategory name already exist"}), 400 
  
    new_subcategory = Subcategory(
        name=body['name'],
        category_id=body['category_id']
                    
    )
    db.session.add(new_subcategory)
    db.session.commit()
    return jsonify({"message": "Subcategory Created", "subcategory": new_subcategory.serialize()})

@api.route('/subcategories/<int:id>', methods=['DELETE'])
def delete_subcategory():
    pass
# falta completar

@api.route('/register', methods=["POST"])
def register():
    body = request.json
    name = body.get("name", None)
    lastname = body.get("lastname", None)
    email = body.get("email", None)
    password = body.get("password", None)
    
    if email is None or password is None or name is None or lastname is None:
        return jsonify({"message": "Los campos email, name, lastname y password son obligatorios"}), 400
    else:
        user = User()
        user_exist = User.query.filter_by(email=email).one_or_none()
        
        if user_exist is not None:
            return jsonify({"message": "El usuario ya se encuentra registrado"}), 400
        
        salt = b64encode(os.urandom(32)).decode("utf-8")
        password = generate_password_hash(f"{password}{salt}")
        
        user.name = name
        user.lastname = lastname
        user.email = email
        user.password = password
        user.salt = salt
        db.session.add(user)
        
        try:
            db.session.commit()
            return jsonify({"message": "Usuario registrado con éxito"}), 201
        except Exception as err:
            db.session.rollback()
            return jsonify({"message": f"Error:{err.args}"}),500
    
@api.route('/get_users', methods=["GET"])
def get_users():
    users = User.query.all()
    users_serialized = [user.serialize() for user in users]
    return jsonify(users_serialized), 200

@api.route('/login', methods=["POST"])
def login():
    body = request.get_json()
    email = body.get("email", None)
    password = body.get("password", None)
    
    required_fields = {"email", "password"}
    missing_field = {field for field in required_fields if not body.get(field)}
    
    if missing_field:
        return jsonify({"message" : f"Estos campos son requeridos {', '.join(missing_field)}"}), 400
    else:
        user = User.query.filter_by(email=email).first()
        if user is None:
            return jsonify({"message" : "Alguno de los datos no es correcto"}), 400
        else: 
            if check_password_hash(user.password, f"{password}{user.salt}"):
                expire_at = datetime.timedelta(days=3)
                token = create_access_token(identity=user.id, expires_delta=expire_at)
                return jsonify({
                    "token" : token,
                    "name" : user.name,
                    "lastname": user.lastname,
                    "email": user.email,
                    "photo": None,
                    "admin": user.admin,
                    }), 200
            else:
                return jsonify({"message":"Sus credenciales no son correctas"}),400

        