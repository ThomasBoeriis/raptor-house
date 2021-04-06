import React, { useState } from "react";

const Menu = () => {

    const [categories] = useState([{}, {}, {}, {},]);

    return (

        <section className="p-3" style={{ background: "#fff" }}>
            <h2 style={{ color: "maroon" }}>Menu</h2>
            <div className="row">
                <div className="offset-lg-3 col-12 col-lg-6">
                    <div className="row" style={{ paddingTop: 30 }}>
                        {
                            categories?.map(category => (
                                <div className="col-6">
                                    <div className="p-3" style={{ marginBottom: 30, backgroundColor: "maroon" }}>
                                        <img alt={category?.title} src="https://picsum.photos/250/250" className="img-fluid w-100 d-block" />
                                        <p className="text-center text-white fw-bold py-1 m-0">category?.title</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Menu;