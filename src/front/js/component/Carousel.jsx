import React from "react";


const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mt-3"  data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/id/237/1920/1080"
            className="d-block w-100 carouselImg"
                       alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/id/40/1920/1080"
            className="d-block w-100 carouselImg"
           
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/id/1012/1920/1080"
            className="d-block w-100 carouselImg"
            
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
