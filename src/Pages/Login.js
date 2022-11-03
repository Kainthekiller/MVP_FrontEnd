import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";




function Login(props)
{
    //Use State
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    //Use Effect
        useEffect(() => {
        }, [])
    //Custom Method
    function handleLogin(e)
    {
        e.preventDefault()
        props.authenticateLogin(userName, password)
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



                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            <h1 style={{textDecoration: "underline"}}>Login</h1>
            <header>

                <img className={"LoginImg"} src={"https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt={""}/>
            </header>
            <h1>{props.errorMessage}</h1>
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
                type={"password"}
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

            {!props.aUserLoggedIn ?
                <div>
                    <p>Need an account?<Link to={"/CreateNewAccount"} style={{color: "inherit"}}><Button sx={{m: 2, backgroundColor: "blacK", color: "yellow"}} variant={"contained"}>Create an Account</Button></Link></p></div>

                : null}
        </div>


            </div>

    )
}

export default Login