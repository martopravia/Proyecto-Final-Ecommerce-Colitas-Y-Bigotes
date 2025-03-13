import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Pay = () => {
  const { store, actions } = useContext(Context)
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);


  const navigate = useNavigate()

  const amount = store.cartTotal; 

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let errorMessages = [];


    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      errorMessages.push("La tarjeta debe tener 16 dígitos.");
    }


    if (cvc.length !== 3 && cvc.length !== 4 || isNaN(cvc)) {
      errorMessages.push("El CVC debe tener 3 o 4 dígitos.");
    }


    if (!firstName) {
      errorMessages.push("Por favor, ingrese su nombre.");
    }


    if (!lastName) {
      errorMessages.push("Por favor, ingrese su apellido.");
    }


    if (!city) {
      errorMessages.push("Por favor, ingrese su ciudad.");
    }


    if (postalCode.length !== 5 || isNaN(postalCode)) {
      errorMessages.push("El código postal debe tener 5 dígitos.");
    }


    if (errorMessages.length > 0) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      alert("Pago realizado con éxito.");


      setCardNumber("");
      setCvc("");
      setFirstName("");
      setLastName("");
      setCity("");
      setPostalCode("");
      setMessage("");
      

      navigate("/order");
      const sendOrderToBack = async () => {
        try {

          const token = localStorage.getItem("token")
          const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
          const response = await fetch("https://stunning-guacamole-7vrgrg6947wvhp6qv-3001.app.github.dev/api/order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token
            },
            body: JSON.stringify({
              total: store.cartTotal,
              items: store.cart.map((item) => ({ 
                product_id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price
              }))

            })
          })
          console.log(response.ok)
          console.log(response.status)
          if (response.ok) {
            const data = await response.json()
            console.log("orden fue creada: ", data)
            actions.clearCart()
          } else {
            console.log("Error creando la orden", response.status)
          }
        } catch (err) {
          console.error("Error creando la orden", err)
        }
      }
      sendOrderToBack()
    }
  }


  return (
    <div className="container col-8">
      <div className="card mt-5">
        <div className="card-header fs-5 fw-bolder text-start">
          Ingrese los datos de su tarjeta
        </div>
        <div className="card-body pb-0">
          <form onSubmit={handleSubmitForm}>
            <div className="row">
              <div className="col-sm-5 pb-3">
                <label htmlFor="cardNumber" className="form-label fw-semibold">
                  Número de tarjeta #
                </label>
                <input
                  type="text"
                  className={`form-control ${cardNumber.length !== 16 || isNaN(cardNumber) ? 'is-invalid' : ''}`}
                  id="cardNumber"
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="col-sm-3 pb-3">
                <label htmlFor="CVC" className="form-label fw-semibold">
                  CVC #
                </label>
                <input
                  type="text"
                  className={`form-control ${cvc.length !== 3 && cvc.length !== 4 || isNaN(cvc) ? 'is-invalid' : ''}`}
                  id="CVC"
                  placeholder="0000"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
              <div className="col-sm-4 pb-3">
                <label htmlFor="amount" className="form-label fw-semibold">
                  Importe $
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  value={`${amount}`} 
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 pb-3">
                <label htmlFor="firstName" className="form-label fw-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  className={`form-control ${!firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-sm-6 pb-3">
                <label htmlFor="lastName" className="form-label fw-semibold">
                  Apellido
                </label>
                <input
                  type="text"
                  className={`form-control ${!lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 pb-3">
                <label htmlFor="city" className="form-label fw-semibold">
                  Ciudad
                </label>
                <input
                  type="text"
                  className={`form-control ${!city ? 'is-invalid' : ''}`}
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-sm-6 pb-3">
                <label htmlFor="postalCode" className="form-label fw-semibold">
                  Código Postal
                </label>
                <input
                  type="text"
                  className={`form-control ${postalCode.length !== 5 || isNaN(postalCode) ? 'is-invalid' : ''}`}
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pb-3">
                <p htmlFor="exampleAccount" className="fw-semibold">
                  We accept:
                </p>
                <div className="btn-group" data-toggle="buttons">
                  <label className="btn btn-secondary">
                    <input
                      autoComplete="off"
                      defaultChecked=""
                      id="masterCard"
                      name="options"
                      type="radio"
                    />
                    <i className="fa-brands fa-cc-mastercard" />
                  </label>
                  <label className="btn btn-secondary">
                    <input autoComplete="off" id="visaCard" name="options" type="radio" />
                    <i className="fa-brands fa-cc-visa" />
                  </label>
                  <label className="btn btn-secondary">
                    <input autoComplete="off" id="dinersClub" name="options" type="radio" />
                    <i className="fa-brands fa-cc-diners-club" />
                  </label>
                  <label className="btn btn-secondary">
                    <input autoComplete="off" id="amex" name="options" type="radio" />
                    <i className="fa-brands fa-cc-amex" />
                  </label>
                </div>
              </div>


              <div className="col-md-6 pb-3 mb-2">
                <label htmlFor="message" className="fw-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <small className="text-muted">Agregue comentarios aquí</small>
              </div>
            </div>





            {errors.length > 0 && (
              <div className="alert alert-danger" role="alert">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="card-footer text-muted text-end">
              <button className="btn btn-primary fs-6" type="submit">
                Procesar Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pay;
