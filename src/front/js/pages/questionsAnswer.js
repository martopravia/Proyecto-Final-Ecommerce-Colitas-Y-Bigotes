import React from "react";
import { Tab, Nav } from "react-bootstrap";

const QuestionsAnswer = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ fontSize: "2.5rem" }}>
        Preguntas Frecuentes
      </h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-12">
            <Nav variant="pills" className="flex-column" style={{ fontSize: "1.2rem" }}>
              <Nav.Item>
                <Nav.Link eventKey="first" className="btn btn-outline-dark text-dark py-3 my-2">
                  ¿Quiénes somos?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="btn btn-outline-dark text-dark py-3 my-2">
                  ¿Para qué me registro?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="btn btn-outline-dark text-dark py-3 my-2">
                  Pedidos y Compras
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className="btn btn-outline-dark text-dark py-3 my-2">
                  Envíos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth" className="btn btn-outline-dark text-dark py-3 my-2">
                  Cambios y Devoluciones
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-lg-8 col-md-7 col-sm-12">
            <Tab.Content style={{ fontSize: "1.2rem" }}>
              <Tab.Pane eventKey="first">
                <p>Somos una tienda online dedicada al cuidado de tus mascotas. Ofrecemos una amplia variedad de productos para perros, gatos, roedores y aves, incluyendo comida, accesorios y juguetes. Nuestro objetivo es proporcionar productos de calidad que mejoren la vida de tus amigos peludos y emplumados. Sabemos que las mascotas son parte de tu familia, y trabajamos para ser tu mejor aliado en su cuidado.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>
                  Registrarte en nuestra web te permite realizar compras de manera segura y personalizada. Con tu perfil, podrás acceder a tu historial de pedidos, guardar tus productos favoritos y recibir ofertas exclusivas. Además, estar registrado es necesario para poder realizar compras, gestionar tus envíos y resolver cualquier problema de manera eficiente. ¡Regístrate y descubre todas las ventajas que tenemos para ti!
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>
                  Realizar pedidos en nuestra web es muy sencillo. Primero, explora nuestras categorías y agrega los productos que desees al carrito. Luego, accede a tu cuenta para proceder al pago de manera rápida y segura. Recuerda que es necesario estar registrado para completar tus compras. Trabajamos para que cada pedido llegue a tiempo, asegurando que tengas todo lo que necesitas para el bienestar de tus mascotas.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <p>Los envíos son gestionados a través de empresas externas, lo que garantiza cobertura en la mayoría de las localidades. Los pedidos se despachan en un plazo de 2 días hábiles y puedes hacer seguimiento en tiempo real desde tu cuenta. Aunque los costos de envío corren por cuenta del cliente, aseguramos que los productos lleguen en perfectas condiciones, listos para satisfacer las necesidades de tus mascotas.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <p>No realizamos cambios ni devoluciones, pero entendemos que pueden surgir inconvenientes. Si algo no sale como esperabas, no te preocupes: estamos aquí para ayudarte a resolverlo. Nuestro equipo de soporte estará disponible para brindarte soluciones rápidas y efectivas. Contáctanos con confianza, porque tu satisfacción es nuestra prioridad.</p>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default QuestionsAnswer;
