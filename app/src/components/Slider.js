import React from "react";

const Slider = (props) => {


    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                   props?.images?.map((image, index) => (
                    <div key={image?.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={image.url} className="d-block w-100" alt={image.title} />
                    </div>
                   )) 
                }
            </div>
        </div>
    )
}
export default Slider;