import React from 'react'
import "./Carousel.css"

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src="https://cdn.pixabay.com/photo/2017/01/22/17/13/sushi-2000239_960_720.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>California especial</h5>
                        <p>Los tradicionales rollos california acompañados de nuestra salsa de anguila especial de la casa</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="https://cdn.pixabay.com/photo/2014/10/16/17/23/sushi-491425_960_720.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Avocado especial</h5>
                        <p>Rollos con aguacate servidos acompañados de nuestra sala chipotle especial de la casa</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="https://cdn.pixabay.com/photo/2016/05/21/14/09/food-1406883_960_720.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Salmon especial</h5>
                        <p>Rollos de salmón acompañados importado</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel