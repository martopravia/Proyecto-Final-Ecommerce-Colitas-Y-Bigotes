import React, { Component } from "react";

export const Footer = () => {
	return (
		<div className="container-fluid p-4">
			<footer className="row p-3 bg-light">
				<section className="col-md-4 col-12 col-sm-12">
					<h4 className="mb-4">Colitas y Bigotes</h4>
					<p> <i className="fa-solid fa-phone"> </i> +10101010101 </p>
					<p> <i className="fa-solid fa-envelope"> </i> correo@gmail.com </p>
					<p> <i className="fa-solid fa-map-pin"></i> Tienda Online</p>
					<p> <i className="fa-regular fa-clock"> </i> Lunes a viernes</p>
					<i className="fa-brands fa-facebook icon"></i>
					<i className="fa-brands fa-instagram icon"></i>
					<i className="fa-brands fa-linkedin icon"></i>
				</section>
				<section className="col-md-4 col-12 col-sm-12">
					<h4 className="mb-4">FAQs</h4>
					<p>¿Quienes somos?</p>
					<p>Registro</p>
					<p>Pedidos y Compras</p>
					<p>Envios</p>
					<p>Cambios y devoluciones</p>
				</section>
				<section className="col-md-4 col-12 col-sm-12">
					<h4 className="mb-4"> Contactanos</h4>
					<form action="#" method="get">
						<div className="form-group">
							<input className="form-control" type="text" placeholder="Ingrese su nombre" id="contact_name" />
						</div>
						<div className="form-group">
							<input className="form-control" type="text" placeholder="Ingrese su email" id="contact_email" />
						</div>
						<div className="form-floating">
							<textarea className="form-control" placeholder="Leave a comment here" id="contact_textArea">
							</textarea>
							<label for="floatingTextarea2">Comments</label>
						</div>
					</form>
				</section>
			</footer>
		</div>
	);
}