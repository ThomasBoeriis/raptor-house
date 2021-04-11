import React, { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../context/Context";

const Contact = () => {

    const [message, setMessage] = useState();

    const handleChange = (event) => {
        event.persist();
        
        setMessage(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
            "date": new Date()
        }));
    }

    const handleMessage = (event) => {
        event.preventDefault();

        post("messages",message).then(res => {
            setMessage({
                name: "",
                email: "",
                subject: "",
                content:""
            });
            //Tak for din besked pop up.
            alert("Tak for din besked vi har nu modtaget den og vil besvare din besked inden for kort tid.")
        });
    }

    return (
        <section className="p-3 bg-white">
            <h2 style={{ color: "maroon" }}>Kontakt</h2>
            <div className="row h-100">
                <div className="col-md-6">
                    <div className="p-2 text-white" style={{ background: "maroon", height: "39%", marginBottom: "1%" }}>
                        <h4>Raptor House</h4>
                    </div>
                    <div className="p-2 text-white" style={{ background: "maroon", height: "18%", marginTop: "1%", marginBottom: "1%" }}>
                        <Link to="/map" className="text-decoration-none text-white">Vis på kort</Link>
                    </div>
                    <div className="p-2 text-white" style={{ background: "maroon", height: "39%", marginBottom: "1%" }}>
                        <h4>Åbningstider</h4>
                    </div>
                </div>
                <div className="col-md-6 text-white">
                    <div className="p-3" style={{ background: "maroon" }}>
                        <h5>Send os en mail</h5>
                        <table className="w-100">
                            <tbody>
                                <tr>
                                    <td className="p-2">Navn:</td>
                                    <td className="p-2"><input type="text" value={message?.name} required palceholder="Navn" name="name" className="w-100" onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td className="p-2">E-mail:</td>
                                    <td className="p-2"><input type="email" value={message?.email} required palceholder="Email" name="email" className="w-100" onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td className="p-2">Emne:</td>
                                    <td className="p-2"><input type="text" value={message?.subject} required palceholder="emne" name="subject" className="w-100" onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td className="p-2" colSpan="2">
                                        <textarea required name="content"  value={message?.content} className="w-100" rows="6" onChange={handleChange}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button onClick={handleMessage}>Send</button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact;