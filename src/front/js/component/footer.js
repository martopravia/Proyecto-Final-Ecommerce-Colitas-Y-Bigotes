import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");
	const [formValid, setFormValid] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!name || !email || !comment) {
			setFormValid(false);
			alert("Por favor, complete todos los campos.");
			return;
		}
		alert("Nos contactaremos con usted a la brevedad.");

		setName("");
		setEmail("");
		setComment("");
		setFormValid(true);
	};
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
					<form onSubmit={handleSubmit}>
						<div className="form-group mb-2">
							<input
								className={`form-control ${!formValid && !name ? 'is-invalid' : ''}`}
								type="text"
								placeholder="Ingrese su nombre"
								id="contact_name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{!formValid && !name && <div className="invalid-feedback">Este campo es obligatorio</div>}
						</div>
						<div className="form-group mb-2">
							<input
								className={`form-control ${!formValid && !email ? 'is-invalid' : ''}`}
								type="text"
								placeholder="Ingrese su email"
								id="contact_email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{!formValid && !email && <div className="invalid-feedback">Este campo es obligatorio</div>}
						</div>
						<div className="form-floating mb-2">
							<textarea
								className={`form-control ${!formValid && !comment ? 'is-invalid' : ''}`}
								placeholder="Leave a comment here"
								id="contact_textArea"
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							></textarea>
							{!formValid && !comment && <div className="invalid-feedback">Este campo es obligatorio</div>}
							<label htmlFor="floatingTextarea2">Comments</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Enviar
						</button>
					</form>
				</section>
			</footer>
		</div>
	);
}