import React from "react";

//Icons
import { FaEdit, FaTrash } from "react-icons/fa";
//Router
import { Link } from "react-router-dom";

//Context
import {del} from "./../../context/Context";

const ListView = ({ items, title, setState }) => {

    const handleDelete = (event) => {
        const id = event.currentTarget.id;
        const confirm = window.confirm("Are you sure?");
        if(confirm) {
            del(title, id).then(res =>  {
                setState(prevState => ([
                    ...prevState.filter(item => item.id !== Number(id)),
                ]))
            });
        }
    }
    return (
        <section className="row">
            <h2 className="mb-4">Showing {title}(s)</h2>
            <div className="col-12 py-5">
                <Link to={`/cms/create${title?.toLowerCase()}`} className="btn btn-primary float-end">Create</Link>
            </div>
            <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th className="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items?.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    {item?.title != null ? item.title : ""}
                                    {item?.alt != null ? item.alt : ""}
                                    {item?.subject != null ? item.subject : ""}
                                </td>
                                <td className="text-end">
                                    <Link className="mx-2" to={`/cms/edit${title?.toLowerCase()}/${item?.id}`}><FaEdit /></Link>
                                    <Link className="mx-2" to="#" onClick={handleDelete} id={item.id} ><FaTrash /></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListView;