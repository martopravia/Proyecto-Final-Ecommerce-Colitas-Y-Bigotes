import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="container-fluid mt-5">
			<footer className="row p-5 footer-text">
				<section className="col-md-4 col-12 col-sm-12 mb-sm-4 mb-4 fs-5">
					<h4 className="mb-4 mb-sm-2">Colitas y Bigotes</h4>
					<p> <i className="fa-solid fa-phone fs-6 me-2"> </i> +10101010101 </p>
					<p> <i className="fa-solid fa-envelope fs-6 me-2"> </i> Correo@gmail.com </p>
					<p> <i className="fa-solid fa-map-pin fs-6 me-2"></i> Tienda Online</p>
					<p> <i className="fa-regular fa-clock fs-6 me-2"> </i> Lunes a Viernes</p>
					<i className="fa-brands fa-facebook fs-3 me-2"></i>
					<i className="fa-brands fa-instagram fs-3 me-2"></i>
					<i className="fa-brands fa-linkedin fs-3 me-2"></i>
				</section>
				<section className="col-md-4 col-12 col-sm-12 mb-4">
					<h4 className="mb-4 mb-sm-2">FAQs</h4>
					<div><Link to="/questionsAnswer" className="text-decoration-none"> <button className="btn text-white fs-5"> ¿Quienes somos? </button> </Link> </div>
					<div><Link to="/questionsAnswer" className="text-decoration-none"> <button className="btn text-white fs-5"> Registro </button> </Link> </div>
					<div> <Link to="/questionsAnswer" className="text-decoration-none"> <button className="btn text-white fs-5"> Envios </button> </Link> </div>
					<div> <Link to="/questionsAnswer" className="text-decoration-none"> <button className="btn text-white fs-5"> Cambios y Devoluciones </button> </Link> </div>
				</section>
				<section className="col-md-4 col-12 col-sm-12">
					<h4 className="mb-4 mb-sm-2"> Contactanos</h4>
					<form action="#" method="get">
						<div className="form-group mb-2">
							<input className="form-control" type="text" placeholder="Ingrese su nombre" id="contact_name" />
						</div>
						<div className="form-group mb-2">
							<input className="form-control" type="text" placeholder="Ingrese su email" id="contact_email" />
						</div>
						<div className="form-floating mb-2">
							<textarea className="form-control" placeholder="Leave a comment here" id="contact_textArea">
							</textarea>
							<label htmlFor="floatingTextarea2">Comments</label>
						</div>
					</form>
				</section>
			</footer>
		</div>
	);
}