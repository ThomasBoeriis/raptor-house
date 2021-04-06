import React from "react";

//Layout
import NavCms from "./components/layout/NavCms";
import FooterCms from "./components/layout/FooterCms";


//router
import {Route} from "react-router-dom";

//components
import HomeCms from "./components/HomeCms";
import CreateProduct from "./components/CreateProduct";
import ListView from "./components/ListView";
import EditProduct from "./components/EditProduct";

const AppCms = () => {
    return (
        <>
            <NavCms />
            <main className="container p-3 bg-light" style={{minHeight: 550}}>
                <Route exact path="/cms" component={HomeCms} />
                <Route path="/cms/products" render={() => (
                    <ListView items={[{},{},{}]} title="Product" />
                )} />

                <Route path="/cms/createproduct" component={CreateProduct}  />
                <Route path="/cms/editproduct/:id" component={EditProduct}  />
            </main>
            <FooterCms />
        </>
    )
}

export default AppCms;