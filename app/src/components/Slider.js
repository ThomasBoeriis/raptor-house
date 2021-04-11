import React from "react";

const Slider = (props) => {


    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                   props?.images?.map((item, index) => (
                    <div key={item?.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img className="d-block w-100" alt={item.alt} src={`data:image/png;base64,${item?.image}`} />
                    </div>
                   )) 
                }
            </div>
        </div>
    )
}
export default Slider;