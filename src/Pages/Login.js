import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {Button} from "@mui/material";




function Login(props)
{
    //Use State
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    //Use Effect

    //Custom Method
    function handleLogin(e)
    {

        if (userName === "admin" && password === "password")
        {
            console.log("Click")
            props.setAuthenticatedUser(true);
            props.setUserLoggedIn("admin")
            props.setaUserLoggedIn(true)
            setUserName("")
            setPassword("")
        }
        setUserName("")
        setPassword("")

    }

    //Main
    return (

        <div className={"LoginPage"}>

            <div className={"LoginStatus"}>
                {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
            </div>
        <div className={"LoginPageInput"}>


            <div>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <header>

                <img className={"LoginImg"} src={"https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt={""}/>
            </header>
            <form onSubmit={(e) => handleLogin(e)}>

                {!props.aUserLoggedIn ?
                    <div>
        <input
        type={"text"}
        placeholder={"UserName..."}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />
            <input
                type={"text"}
                placeholder={"Password..."}
                value={password}
                onChange={(e) => setPassword(e.target.value) }
            />
            <Link style={{color: "inherit"}} onClick={(e) => handleLogin(e)} underline="hover"  to={""}>
                <Button type={"submit"} variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Login</Button>
            </Link>
                    </div>
                    : <p style={{color: "Green", fontSize: 25}}>Logged In As {props.userLogedIn}</p>}
            <br/>
            <Link style={{color: "inherit"}} underline="hover" to={"/"}>
                <Button  variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Go Back</Button>
            </Link>

            </form>
        </div>
            </div>

    )
}

export default Login