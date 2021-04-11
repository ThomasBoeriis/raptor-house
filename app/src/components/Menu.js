import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../context/Context";

const Menu = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAll("categories").then(res => setCategories(res));
    }, []);
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
                                        
                                        <Link to={"/menu/"+category.id} className="d-block ratio ratio-4x3">
                                            <img alt={category?.title} src={`data:image/png;base64,${category?.image}`} className="img-fluid w-100 d-block" />
                                        </Link>
                                        <p className="text-center text-white fw-bold py-1 m-0">{category?.title}</p>
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