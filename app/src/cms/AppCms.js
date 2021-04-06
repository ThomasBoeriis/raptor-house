import React, { useState, useEffect } from "react";

//Layout
import NavCms from "./components/layout/NavCms";
import FooterCms from "./components/layout/FooterCms";


//router
import { Route } from "react-router-dom";

//components
import HomeCms from "./components/HomeCms";
import CreateProduct from "./components/CreateProduct";
import ListView from "./components/ListView";
import EditProduct from "./components/EditProduct";

//Context
import { getAll } from "../context/Context";

const AppCms = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll("products").then(res => setProducts(res));
    }, []);

    return (
        <>
            <NavCms />
            <main className="container p-3 bg-light" style={{ minHeight: 550 }}>
                <Route exact path="/cms" component={HomeCms} />
                <Route path="/cms/products" render={() => (
                    <ListView items={products} setState={setProducts} title="Products" />
                )} />

                <Route path="/cms/createproducts" render={() => (
                    <CreateProduct setState={setProducts} />
                )} />

                <Route path="/cms/editproducts/:id" render={(props) => (
                    <EditProduct products={products} setState={setProducts} id={props.match.params.id} />
                )} />
            </main>
            <FooterCms />
        </>
    )
}

export default AppCms;