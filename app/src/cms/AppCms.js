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
import CreateCategory from "./components/CreateCategory";
import Editcategory from "./components/EditCategory";

const AppCms = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAll("products").then(res => setProducts(res));
        getAll("categories").then(res => setCategories(res));
    }, []);

    return (
        <>
            <NavCms />
            <main className="container p-3 bg-light" style={{ minHeight: 550 }}>
                <Route exact path="/cms" component={HomeCms} />

                {/* Prducts */}
                <Route path="/cms/products" render={() => (
                    <ListView items={products} setState={setProducts} title="Products" />
                )} />

                <Route path="/cms/createproducts" render={() => (
                    <CreateProduct setState={setProducts} />
                )} />

                <Route path="/cms/editproducts/:id" render={(props) => (
                    <EditProduct products={products} setState={setProducts} id={props.match.params.id} />
                )} />

                {/* Categories */}
                <Route path="/cms/categories" render={() => (
                    <ListView items={categories} setState={setCategories} title="Categories" />
                )} />
                <Route path="/cms/createcategories" render={() => (
                    <CreateCategory setState={setCategories} />
                )} />
                <Route path="/cms/editcategories/:id" render={(props) => (
                    <Editcategory categories={categories} setState={setCategories} id={props.match.params.id} />
                )} />

            </main>
            <FooterCms />
        </>
    )
}

export default AppCms;