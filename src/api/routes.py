"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Category, Subcategory, RecoverPassword, OTP, Order, OrderDetail
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os, datetime
from datetime import datetime, timedelta
from base64 import b64encode
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import cloudinary.uploader
from random import sample
import cloudinary



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)


print("Cloudinary Config:")
print("CLOUD_NAME:", os.getenv("CLOUDINARY_CLOUD_NAME"))
print("API_KEY:", os.getenv("CLOUDINARY_API_KEY"))
print("API_SECRET:", os.getenv("CLOUDINARY_API_SECRET"))

@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    products_serialized = [product.serialize() for product in products]
    return jsonify(products_serialized), 200

@api.route('/products/<int:id>', methods=['GET'])
def get_products_by_id(id):
    product = Product.query.get(id)
    if not product: 
        return jsonify({"message" : "Producto no encontrado"}), 404
    return jsonify(product.serialize()), 200

# ruta solo filtrado de producto por categoria   
@api.route('/products/categories/<int:category_id>', methods=['GET'])
def get_products_by_category(category_id):
    products = Product.query.filter_by(category_id=category_id).all()
    if not products: 
        return jsonify({"message" : "Producto no encontrado"}), 404
    return jsonify([product.serialize() for product in products]), 200  
   
   
# ruta para filtro de productos por categoria y subcategoria   
@api.route('/products/categories/<int:category_id>/subcategories/<int:subcategory_id>', methods=['GET'])
def get_products_by_category_and_subcategory(category_id, subcategory_id):
    products = Product.query.filter_by(category_id=category_id, subcategory_id=subcategory_id).all()
    return jsonify([product.serialize() for product in products]), 200  
   

@api.route('/products/related/<int:category_id>', methods=['GET'])
def get_randomProduct_by_category(category_id):
    
    products = Product.query.filter(Product.category_id == category_id).order_by(db.func.random()).limit(4).all()
    products_ids = (prod.id for prod in products)
    ramdom_products = Product.query.filter(Product.id.in_(products_ids)).all()

    return jsonify([product.serialize() for product in ramdom_products]), 200 


       
@api.route('/products', methods=['POST'])
def add_products():
    body = request.form
    print(body)
 
 


    if 'photo' not in request.files:
        return jsonify({"error": "photo required"}), 400
    if 'name' not in body:         
        return jsonify({"error": "name required"}), 400  
    if 'amount' not in body:
        return jsonify({"error" : "amount required"}), 400
    if 'category_id' not in body:
        return jsonify({"error": "category_id required"}), 400 
    if 'subcategory_id' not in body:
        return jsonify({"error": "subcategory_id required"})
    if 'price' not in body:
        return jsonify({"error": "price required"})
    subcategory_exist = Subcategory.query.filter_by(name=body['name']).first()     
    if subcategory_exist:
        return jsonify({"error" : "subcategory name already exist"}), 400 
    
    file = request.files["photo"]
    resp = cloudinary.uploader.upload(file, folder="mygallery")
    if not resp: 
        return jsonify({"error": "error uploading photo"}), 400
    
    
    new_product = Product(
        name=body['name'],
        photo= resp["secure_url"], 
        public_id= resp["public_id"],
        amount=body['amount'],
        category_id=body['category_id'],
        subcategory_id=body['subcategory_id'],
        price=body['price']
                  
        )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product added" }), 200

@api.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    try:
        product = Product.query.get(id)
        if not product:
            return jsonify({"message" : "No existe producto"}),400
        db.session.delete(product)
        db.session.commit()
        return jsonify({"message" : "Producto eliminado correctamente"}),200
    except Exception as e:
        db.session.rollback()
 

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
    name = body.get("name")
    lastname = body.get("lastname")
    email = body.get("email")
    password = body.get("password")

    if not email or not password or not name or not lastname:
        return jsonify({"message": "Faltan datos"}), 400

    user_exist = User.query.filter_by(email=email).first()
    if user_exist:
        return jsonify({"message": "El usuario ya existe"}), 400

    salt = b64encode(os.urandom(32)).decode("utf-8")
    hashed_password = generate_password_hash(f"{password}{salt}")

    new_user = User(
        name=name,
        lastname=lastname,
        email=email,
        password=hashed_password,
        salt=salt,
        admin=False
    )

    db.session.add(new_user)
    db.session.commit()

    # ✅ Generamos el token para que el usuario se loguee directamente
    token = create_access_token(identity=new_user.id, expires_delta=timedelta(days=3))

    return jsonify({
        "message": "Usuario registrado con éxito",
        "token": token,
        "name": new_user.name,
        "lastname": new_user.lastname,
        "email": new_user.email,
        "admin": new_user.admin
    }), 201

# @api.route('/register', methods=["POST"])
# def register():
#     body = request.json
#     name = body.get("name", None)
#     lastname = body.get("lastname", None)
#     email = body.get("email", None)
#     password = body.get("password", None)
#     admin = body.get("admin", False)
    
#     if email is None or password is None or name is None or lastname is None:
#         return jsonify({"message": "Los campos email, name, lastname y password son obligatorios"}), 400
#     else:
#         user = User()
#         user_exist = User.query.filter_by(email=email).one_or_none()
        
#         if user_exist is not None:
#             return jsonify({"message": "El usuario ya se encuentra registrado"}), 400
        
#         salt = b64encode(os.urandom(32)).decode("utf-8")
#         password = generate_password_hash(f"{password}{salt}")
        
#         user.name = name
#         user.lastname = lastname
#         user.email = email
#         user.password = password
#         user.salt = salt
#         user.admin = admin
#         db.session.add(user)
        
#         try:
#             db.session.commit()
#             return jsonify({"message": "Usuario registrado con éxito"}), 201
#         except Exception as err:
#             db.session.rollback()
#             return jsonify({"message": f"Error:{err.args}"}),500
    
@api.route('/get_users', methods=["GET"])
def get_users():
    users = User.query.all()
    users_serialized = [user.serialize() for user in users]
    return jsonify(users_serialized), 200

@api.route('/login', methods=["POST"])
def login():
    body = request.get_json()
    if not body:
        return jsonify({"message": "El cuerpo de la solicitud esta vacío"})
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
                expire_at = timedelta(days=3)
                token = create_access_token(identity=str(user.id), expires_delta=expire_at)
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

@api.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    try:
        product = Product.query.get(id)
        if not product:
            return jsonify({"error": "Product not found"}), 404

        body = request.form
        file = request.files.get("photo")

        product.name = body.get('name', product.name)
        product.public_id = body.get('public_id', product.public_id)
        product.photo = body.get('photo', product.photo)
        product.amount = body.get('amount', product.amount)
        product.price = body.get('price', product.price)
        product.category_id = body.get('category_id', product.category_id)
        product.subcategory_id = body.get('subcategory_id', product.subcategory_id)

        if file:
            resp = cloudinary.uploader.upload(file, folder="mygallery")
            product.photo = resp["secure_url"]
            product.public_id = resp["public_id"]
            
        db.session.commit()

        return jsonify({"message": "Producto modificado correctamente", "product": product.serialize()}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@api.route('/profile', methods=["PUT"])
@jwt_required()
def update_profile():
    try:
        id = get_jwt_identity()
        profile = User.query.get(id)
        body = request.json
        
        
        
        profile.name = body.get('name', profile.name)
        profile.lastname = body.get('lastname', profile.lastname)
        profile.email = body.get('email', profile.email)
        
        db.session.commit()          
        return jsonify({"message": "Perfil modificado correctamente", "profile": profile.serialize()}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500    
    
    
  

@api.route('/update-password', methods=["PUT"])
@jwt_required()
def change_password():
    try:
        id = get_jwt_identity()
        profile = User.query.get(id)
        body = request.json
        current_password = body.get("current_password")
        new_password= body.get("new_password")
        
        if current_password is None or new_password is None:
            return jsonify({"message" : "Los campos contraseña actual y nueva contraseña son obligatorios"}), 400
       
        if not check_password_hash(profile.password, f"{current_password}{profile.salt}"):
            return jsonify({"message" : "La constraseña actual no es correcta"}), 400
        
        salt = b64encode(os.urandom(32)).decode("utf-8")
        new_password = generate_password_hash(f"{new_password}{salt}")
     
        profile.password = new_password
        profile.salt = salt
        
        db.session.commit()
        return jsonify({"message" : "Contraseña actualizada correctamente"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500     
  
@api.route('/products/search', methods=["GET"])
def search_products():
    search_word = request.args.get("q")
    if not search_word:
        products = Product.query.all()
        products_serialized = [product.serialize() for product in products]
        return jsonify(products_serialized), 200  
     
              
    products = Product.query.filter(Product.name.ilike(f"%{search_word}%"))
    products = [prod.serialize() for prod in products] 
    return jsonify(products), 200


@api.route('/verify-otp', methods=["POST"])
def verify_otp():
    body = request.json
    email = body.get("email")
    otp = body.get("otp")
    new_password = body.get("new_password")

    if not email or not otp or not new_password:
        return jsonify({"message": "Email, OTP y nueva contraseña son requeridos"}), 400

    try:
        otp_entry = OTP.query.filter_by(email=email, otp=otp).first()

        if not otp_entry:
            return jsonify({"message": "OTP inválido"}), 400

        if datetime.utcnow() > otp_entry.expires_at:
            return jsonify({"message": "El OTP ha expirado"}), 400


        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({"message": "Usuario no encontrado"}), 404


        salt = b64encode(os.urandom(32)).decode("utf-8")
        hashed_password = generate_password_hash(f"{new_password}{salt}")
        user.password = hashed_password
        user.salt = salt

        db.session.delete(otp_entry)
        db.session.commit()

        return jsonify({"message": "Contraseña actualizada correctamente"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@api.route('/save_otp', methods=["POST"])
def save_otp():
    print("Recibiendo OTP")
    body = request.json
    email = body.get("email")
    otp = body.get("otp")
    
    if not email or not otp:
        return jsonify({"message" : "Email y OTP son requeridos"}), 400
    
    expiration_time = datetime.utcnow() + timedelta(minutes=10)
    
    try:
        otp_entry = OTP(email=email, otp=otp, expires_at=expiration_time)
        db.session.add(otp_entry)
        db.session.commit()
        
        return jsonify({"message" : " OTP guardado"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
        
    
# @api.route('/get_order', methods=["GET"])
# @jwt_required()
# def get_order():
#     try:
#         user_id =  get_jwt_identity()
#         data = request.json
#         address = data.get("address_dom")
#         deliver_address = data.get("address_dom")
#         items = data.get("items", [])
        
        
        
        
    # except Exception as e:
    #     return jsonify({"error", e})

@api.route('/order', methods= ['POST'])
@jwt_required()
def create_order():
    data = request.get_json()
    date = datetime.now()
    price = data.get("total")
    address = "Direccion de Prueba"
    deliver_address = "Direccion de Prueba"
    status = "OK"
    items = data.get('items')
    user_id=get_jwt_identity() 
    
    if not items:
        return jsonify({"message": "Faltan datos"}), 400
    
    try:
        new_order = Order(user_id=user_id, date=date, price=price, address=address, deliver_address=deliver_address, status=status)
        db.session.add(new_order)
        db.session.commit()
        
        for item in items:
            new_detail = OrderDetail(
                order_id= new_order.id,
                product_id=item['product_id'],
                quantity=item['quantity'],
                price=item['price'],
                name=item['name']
                
            )
            db.session.add(new_detail)
        db.session.commit()
        
        return jsonify({"message": "Orden Creada con éxito", "order_id": new_order.id})
    except Exception as e:
        db.session.rollback()
        print(e)
        return jsonify({"message": str(e)}), 500

@api.route('/orders', methods=['GET'])
@jwt_required()
def get_orders():
    try:
        
        user_id = get_jwt_identity()
        orders = Order.query.filter_by(user_id=user_id).all()
        if not orders:
            return jsonify({"message": "No se encontraron órdenes"}), 404

        result = []
        for order in orders:
            order_details = OrderDetail.query.filter_by(order_id=order.id).all()
            
            details = [{
                "product_id": detail.product_id,
                "quantity": detail.quantity,
                "price": detail.price,
                "name": Product.query.get(detail.product_id).name, 
                "photo": Product.query.get(detail.product_id).photo 
                
            } for detail in order_details]

            result.append({
                "id": order.id,
                "total": order.price,
                "items": details,
                "date": order.date
                
            })

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500