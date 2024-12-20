"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Category, Subcategory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


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

