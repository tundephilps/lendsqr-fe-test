import React from "react";
import "../styles/Login.scss";
import logo from "../assets/logo.png";
import signin from "../assets/signin.png";
import useLogin from "../hooks/Login.ts";

const Login : React.FC = () => {
    const { inputs, isVisiblePassword, handleInput, handleTogglePassword, handleLogin } = useLogin();

    return (
        <div className="loginWrapper">
            <img src={logo} className="logo" alt="logo"/>
            <div className="content">
                <img src={signin} className="signin" alt="signin"/>
                <div className="container">
                    <h3 className="title">Welcome!</h3>
                    <p className="intro">Enter details to login</p>

                    <div className="inputBox">
                        <input placeholder="Email" value={inputs.email} onInput={event => handleInput("email", (event.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="inputBox">
                        <input type={ isVisiblePassword ? "text" : "password" } value={inputs.password} placeholder="Password" onInput={event => handleInput("password", (event.target as HTMLInputElement).value)}/>
                        <label onClick={ handleTogglePassword }>SHOW</label>
                    </div>

                    <a href="/">FORGOT PASSWORD?</a>
                    <button onClick={ handleLogin }>LOG IN</button>
                </div>
            </div>
        </div>
    )
}

export default Login;