import React, { useState, useEffect } from "react";

import { getAll, put, get } from "../../context/Context";

//History
import { useHistory } from "react-router-dom";

const Editcategory = ({ categories, setState, id }) => {

    let history = useHistory();

    const [category, setcategory] = useState();


    useEffect(() => {
        get("categories", id).then(res => {
            setcategory(res);
        });
        
    }, [id]);

    const handleChange = (event) => {
        event.persist();
        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }
        setcategory(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleImageLoad = (reader) => {

        setcategory(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }
    const handleEdit = (event) => {
        event.preventDefault();

        put("categories", id, category).then(res => {

            const copyList = [...categories];
            const indexToEdit = copyList.findIndex(x => Number(x.id) === Number(id));

            copyList[indexToEdit] = category;
            setState(copyList);

            history.push("/cms/categories");
        });
    }
    return (
        <form>
            <section>
                <h2>Create category</h2>
                <hr />
                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="title" defaultValue={category?.title} className="form-control" placeholder="Title" onChange={handleChange} />
                    </div>
                </div>

              

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="imageFile">Image</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <div className="row">
                            <div className="col-6">
                                <input type="file" id="image" className="form-control" placeholder="File" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <img alt="" className="w-100 img-fluid" src={`data:image/png;base64,${category?.image}`} />
                            </div>
                        </div>

                    </div>
                </div>


                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label>Save</label>
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-primary" onClick={handleEdit}>Save</button>
                    </div>

                </div>

            </section>
        </form>
    )
}

export default Editcategory;