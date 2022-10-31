import React from "react";
import {Button} from "@mui/material";



function Login()
{
    return (
        <div className={"LoginPageInput"}>
            <header>
                <img className={"LoginImg"} src={"https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt={""}/>
            </header>
        <input
        type={"text"}
        placeholder={"UserName"}
        />
            <input
                type={"text"}
                placeholder={"Password"}
            />
            <Button variant={"contained"}>Login</Button>

        </div>
    )
}

export default Login