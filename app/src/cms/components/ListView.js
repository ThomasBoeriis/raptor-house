import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";


const ListView = ({ items, title }) => {
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
                            <tr>
                                <td>1</td>
                                <td>entity.title</td>
                                <td className="text-end">
                                    <Link className="mx-2" to={`/cms/edit${title?.toLowerCase()}/${item?.id}`}><FaEdit /></Link>
                                    <Link className="mx-2" to={`/cms/delete${title?.toLowerCase()}/${item?.id}`}><FaTrash /></Link>
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