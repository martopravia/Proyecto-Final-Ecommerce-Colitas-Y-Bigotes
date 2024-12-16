import React, { Component } from "react";

export const Footer = () => (
	<footer className="d-flex justify-content-between p-5 footer">
		<section>
			<h4 className="mb-4">Colitas y Bigotes</h4>
			<p> <i class="fa-solid fa-phone"> </i> +10101010101 </p>
			<p> <i class="fa-solid fa-envelope"> </i> correo@gmail.com </p>
			<p> <i class="fa-solid fa-map-pin"></i> Tienda Online</p>
			<p> <i className="fa-regular fa-clock"> </i> Lunes a viernes</p>
			<i className="fa-brands fa-facebook icon"></i>
			<i className="fa-brands fa-instagram icon"></i>
			<i className="fa-brands fa-linkedin icon"></i>
		</section>
		<section>
			<h4 className="mb-4">FAQs</h4>
			<p>¿Quienes somos?</p>
			<p>Registro</p>
			<p>Pedidos y Compras</p>
			<p>Envios</p>
			<p>Cambios y devoluciones</p>
		</section>
		<section>
			<h4 className="mb-4"> Contactanos</h4>
			<form action="#" method="get">
				<input className="d-block mb-2" type="text" placeholder="Ingrese su nombre" id="contact_name" />
				<input className="mb-2" type="text" placeholder="Ingrese su email" id="contact_email" />
				<div className="form-floating">
					<textarea className="form-control" placeholder="Leave a comment here" id="contact_textArea" style={{ height: "150px" }}>

					</textarea>
					<label for="floatingTextarea2">Comments</label>
				</div>
			</form>
		</section>
	</footer>
);
