import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get, getAll } from "../context/Context";

const MenuItem = (props) => {

    const id = props.match.params.id;
    const [category, setCategory] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        get("categories", id).then(res => setCategory(res));
        getAll("products").then(res => setProducts(res.filter(p => p.categoryId == Number(id))));
    }, []);
    return (

        <section className="p-3" style={{ background: "#fff" }}>
            <h2 style={{ color: "maroon" }}>{category?.title}</h2>

            <div className="row" style={{ paddingTop: 30 }}>
                {
                    products?.map(item => (
                        <div className="col-6">
                            <div className="p-3" style={{ marginBottom: 30 }}>
                                <div className="row align-items-end">
                                    <div className="h2 col-6 fw-bold">{item?.title}</div>
                                    <div className="h5 col-3">{item?.weight}g</div>
                                    <div className="h3 col-3 text-end">{item?.price},-</div>
                                </div>
                                <hr className="line mt-1 " />
                                <div className="row">
                                    <div className="col-8">
                                        {item?.content}
                                    </div>
                                    <div className="col-4">
                                        <img alt={item?.title} src={`data:image/png;base64,${item?.image}`} className="img-fluid w-100 d-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </section>
    )
}

export default MenuItem;