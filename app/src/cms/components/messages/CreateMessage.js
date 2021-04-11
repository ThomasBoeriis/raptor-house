import React, { useState, useEffect } from "react";

import { getAll, post } from "../../../context/Context";

//History
import { useHistory } from "react-router-dom";



//DeStructing
const CreateMessage = ({ setState }) => {

    let history = useHistory();

    const [message, setMessage] = useState();
    

    useEffect(() => {
    }, []);

    const handleChange = (event) => {
        event.persist();
        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }
        setMessage(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleImageLoad = (reader) => {

        setMessage(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }
    const handleCreate = (event) => {
        event.preventDefault();
        post("messages", message).then(res => {
            setState(prevState => ([
                ...prevState,
                res
            ]));

            history.push("/cms/messages");
        });
    }
    return (
        <form>
            <section>
                <h2>Create Message</h2>
                <hr />
                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="name" className="form-control" placeholder="name" onChange={handleChange} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-8">
                        <input type="email" required id="email" className="form-control" placeholder="email" onChange={handleChange} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="subject" className="form-control" placeholder="subject" onChange={handleChange} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8">
                        <textarea required id="content" className="form-control" placeholder="content" onChange={handleChange} ></textarea>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="col-md-8">
                        <input type="date" required id="date" className="form-control" placeholder="date" onChange={handleChange} />
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

export default CreateMessage;