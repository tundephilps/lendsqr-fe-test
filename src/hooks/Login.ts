import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [ inputs, setInputs ] = React.useState({
        email : "",
        password : ""
    })
    const [ isVisiblePassword, setIsVisiblePassword ] = React.useState(false);
    const navigate = useNavigate();

    const handleInput = (field : string, value : string) => {
        setInputs(prev => ({
            ...prev,
            [field] : value
        }))
    }

    const handleTogglePassword = () => {
        setIsVisiblePassword(!isVisiblePassword);
    }

    const handleLogin = () => {
        navigate("/users")
    }

    return {
        inputs,
        isVisiblePassword,
        handleInput,
        handleTogglePassword,
        handleLogin
    }
}

export default Login;