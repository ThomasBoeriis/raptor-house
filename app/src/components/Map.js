import React from "react";

const Map = () => {
    return (
        <div className="row" style={{ minHeight: 600 }}>
            <div className="col-12">
                <div className="bg-white p-3 h-100">
                    <h2 style={{ color: "maroon" }}>Her finder du os</h2>
                    <div style={{ backgroundColor: "maroon" }} className="h-75 p-3 text-white">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.1300561940225!2d10.880095016107571!3d56.413820848282874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd5a4c6ae8bdd%3A0x871aeae678822b75!2zw5hzdGVyZ2FkZSAzNywgODUwMCBHcmVuw6U!5e0!3m2!1sen!2sdk!4v1616588282557!5m2!1sen!2sdk" className="h-100 w-100" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="Map"></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Map;