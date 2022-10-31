import React from "react";
import {Button} from "@mui/material";



function Login()
{
    return (
        <>
        <input
        type={"text"}
        placeholder={"UserName"}
        />
            <input
                type={"text"}
                placeholder={"Password"}
            />
            <Button variant={"contained"}>Login</Button>
        </>
    )
}

export default Login