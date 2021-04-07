import React from "react";

import { Link, useHistory } from "react-router-dom";

const NavCms = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("user");
        history.push("/");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/cms">Raptor House CMS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#cmsNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="cmsNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/cms">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cms/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cms/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cms/contacts">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cms/homes">Homes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cms/messages">Messages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cms/sliders">Sliders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavCms;