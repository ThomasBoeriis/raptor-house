import React, {useState } from "react";
import './login.css';

import {post} from "./../../context/Context";

import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory();

    const [user,setUser] = useState();

    const handleChange = (event) => {
        event.persist();

        setUser(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(user);

        post("users/validate",user).then(res => {
            localStorage.setItem("user",JSON.stringify(res));
            history.push("/cms");
        });
    }

    return (
        <main className="form-signin text-center">
            <form>
                <h1>Login</h1>
                <hr />
                <div className="form-floating mb-2">
                    <input required type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" onChange={handleChange} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input required type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" onChange={handleChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign in</button>
            </form>
        </main>
    )
}

export default Login;