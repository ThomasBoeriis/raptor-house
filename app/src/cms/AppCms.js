import React, { useState, useEffect } from "react";

//Layout
import NavCms from "./components/layout/NavCms";
import FooterCms from "./components/layout/FooterCms";


//router
import { Route } from "react-router-dom";

//components
import HomeCms from "./components/HomeCms";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import ListView from "./components/ListView";

import CreateCategory from "./components/CreateCategory";
import Editcategory from "./components/EditCategory";

import CreateSlider from "./components/sliders/CreateSlider";
import EditSlider from "./components/sliders/EditSlider";

import CreateMessage from "./components/messages/CreateMessage";
import EdditMessage from "./components/messages/EditMessage";


//Context
import { getAll } from "../context/Context";



const AppCms = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sliders, setSliders] = useState([]);
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        getAll("products").then(res => setProducts(res));
        getAll("categories").then(res => setCategories(res));
        getAll("sliders").then(res => setSliders(res));
        getAll("messages").then(res => setMessages(res));
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


                {/* Sliders */}
                <Route path="/cms/sliders" render={() => (
                    <ListView items={sliders} setState={setSliders} title="Sliders" />
                )} />
                <Route path="/cms/createsliders" render={() => (
                    <CreateSlider setState={setSliders} />
                )} />
                <Route path="/cms/editsliders/:id" render={(props) => (
                    <EditSlider items={sliders} setState={setSliders} id={props.match.params.id} />
                )} />


                {/* Messages */}
                <Route path="/cms/messages" render={() => (
                    <ListView items={messages} setState={setMessages} title="Messages" />
                )} />
                <Route path="/cms/createmessages" render={() => (
                    <CreateMessage setState={setMessages} />
                )} />
                <Route path="/cms/editmessages/:id" render={(props) => (
                    <EdditMessage items={messages} setState={setMessages} id={props.match.params.id} />
                )} />



            </main>
            <FooterCms />
        </>
    )
}

export default AppCms;