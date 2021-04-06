import React, { useState, useEffect } from "react";

import { getAll, post } from "../../context/Context";


const CreateProduct = () => {

    const [product, setProduct] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        
        getAll("categories").then((res) => {
            setCategories(res);
        })
    }, []);

    const handleChange = (event) => {
        event.persist();
        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }
        setProduct(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleImageLoad = (reader) => {

        setProduct(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }
    const handleCreate = () => {
        post("products",product).then(res => {
            console.log(res);
        });
    }
    return (
        <section>
            <h2>Create Product</h2>
            <hr />
            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label htmlFor="title">Title</label>
                </div>
                <div className="col-md-8">
                    <input type="text" required id="title" className="form-control" placeholder="Title" onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label htmlFor="content">Content</label>
                </div>
                <div className="col-md-8">
                    <textarea required id="content" className="form-control" placeholder="Content" rows="5" onChange={handleChange}></textarea>
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label htmlFor="imageFile">Image</label>
                </div>
                <div className="col-md-8">
                    <input type="file" required id="image" className="form-control" placeholder="File" onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label htmlFor="weight">Weight</label>
                </div>
                <div className="col-md-8">
                    <input type="number" step=".01" required id="weight" className="form-control" placeholder="Weight" onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label htmlFor="price">Price</label>
                </div>
                <div className="col-md-8">
                    <input type="price" step=".01" required id="price" className="form-control" placeholder="Price" onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label htmlFor="categoryId">Category</label>
                </div>
                <div className="col-md-8">
                    <select required id="categoryId" className="form-select" onChange={handleChange} >
                        <option value="">Pick Category</option>
                        {
                            categories?.map((item) => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-md-4 d-none d-md-block">
                    <label>Create</label>
                </div>
                <div className="col-md-8">
                    <button className="btn btn-primary" onClick={handleCreate}>Create</button>
                </div>

            </div>

        </section>
    )
}

export default CreateProduct;