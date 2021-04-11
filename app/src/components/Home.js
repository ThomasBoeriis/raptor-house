import React, { useEffect, useState } from "react";

import Slide1 from "../content/temp/Slide01.jpg";
import Slide2 from "../content/temp/Slide02.jpg";
import Slide3 from "../content/temp/Slide03.jpg";
import { getAll } from "../context/Context";
import Slider from "./Slider";

const Home = () => {

    const [images, setImages] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll("sliders").then(res => setImages(res));
        getAll("products").then(res => setProducts(res.slice(0, 4)));
    }, []);


    return (
        <>
            <div className="row pb-3">
                <div className="col-md-9 d-none d-md-block">
                    <div className="whiteBorder">
                        <Slider images={images} />
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="whiteBorder h-100" style={{ backgroundColor: "#fff" }}>
                        <div className=" text-white p-1" style={{ backgroundColor: "maroon", height: "49%", marginBottom: "1%" }}>
                            <h4>Åbningstider:</h4>
                                Bla bla bla
                            </div>
                        <div className="text-white p-1" style={{ backgroundColor: "maroon", height: "23%", marginBottom: "1%" }}>
                            Menu
                            </div>
                        <div className=" text-white p-1" style={{ backgroundColor: "maroon", height: "24%", marginBottom: "1%" }}>
                            Her finder du os
                            </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center py-3" style={{ borderTop: "2px solid maroon", borderBottom: "2px solid maroon", backgroundColor: "#bf945d" }}>
                {
                    products.map(item => (
                        <div className="col-md-3">
                            <div className="whiteBorder text-center" style={{ backgroundColor: "#fff" }}>
                                <img  className="img-fluid" src={`data:image/png;base64,${item?.image}`} />
                            </div>
                        </div>
                    ))
                }
               
            </div>
            <div className="row pt-3">
                <div className="col-12">
                    <div className="whiteBorder text-white" style={{ backgroundColor: "maroon" }}>
                        <p>Man kan fremad se, at de har været udset til at læse, at der skal dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og de kan optimeres fra oven af at formidles stort uden brug fra optimering af presse.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;