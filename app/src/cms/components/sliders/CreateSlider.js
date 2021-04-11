import React, { useState, useEffect } from "react";

import { getAll, post } from "./../../../context/Context";

//History
import { useHistory } from "react-router-dom";



//DeStructing
const CreateSlider = ({ setState }) => {

    let history = useHistory();

    const [slider, setSlider] = useState();
    

    useEffect(() => {
    }, []);

    const handleChange = (event) => {
        event.persist();
        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }
        setSlider(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleImageLoad = (reader) => {

        setSlider(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }
    const handleCreate = (event) => {
        event.preventDefault();
        post("sliders", slider).then(res => {
            setState(prevState => ([
                ...prevState,
                res
            ]));

            history.push("/cms/sliders");
        });
    }
    return (
        <form>
            <section>
                <h2>Create Slider</h2>
                <hr />
                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="alt">Alt</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="alt" className="form-control" placeholder="alt" onChange={handleChange} />
                    </div>
                </div>

               

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="imageFile">Image</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <div className="row">
                            <div className="col-6">
                                <input type="file" required id="image" className="form-control" placeholder="File" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <img alt="" className="w-100 img-fluid" src={`data:image/png;base64,${slider?.image}`} />
                            </div>
                        </div>

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
        </form>
    )
}

export default CreateSlider;