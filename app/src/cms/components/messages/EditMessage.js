import React, { useState, useEffect } from "react";

import { put, get } from "../../../context/Context";

//History
import { useHistory } from "react-router-dom";

const EdditMessage = ({ items, setState, id }) => {

    let history = useHistory();

    const [message, setMessage] = useState();


    useEffect(() => {
        get("messages", id).then(res => {
            setMessage(res);
        });
        
    }, [id]);

    const handleChange = (event) => {
        event.persist();
      
        setMessage(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }
    const handleEdit = (event) => {
        event.preventDefault();

        put("messages", id, message).then(res => {

            const copyList = [...items];
            const indexToEdit = copyList.findIndex(x => Number(x.id) === Number(id));

            copyList[indexToEdit] = message;
            setState(copyList);

            history.push("/cms/messages");
        });
    }
    return (
        <form>
            <section>
                <h2>Edit messages</h2>
                <hr />
                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="name" className="form-control" placeholder="name" defaultValue={message?.name} onChange={handleChange} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-8">
                        <input type="email" required id="email" className="form-control" placeholder="email" defaultValue={message?.email} onChange={handleChange} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="subject" className="form-control" placeholder="subject" defaultValue={message?.subject} onChange={handleChange} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8">
                        <textarea required id="content" className="form-control" placeholder="content" defaultValue={message?.content} onChange={handleChange} ></textarea>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-4 d-none d-md-block">
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" required id="date" className="form-control" placeholder="date" defaultValue={message?.date} onChange={handleChange} />
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

export default EdditMessage;