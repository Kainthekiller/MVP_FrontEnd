import React from "react";
import {Link, Navigate} from "react-router-dom";
import {Button} from "@mui/material";
import "../StyleSheet/AdminTools.css"

function AdminTools(props)
{
    //Use State

    //Custom Method
    function handleRedirect()
    {
        if (!props.authenticatedUser)
        {
            return <Navigate to="/" />
        }
    }

    //Main
    return (
        <>
            <div className={"LoginStatus"}>
                {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
            </div>
            <div style={{textAlign: "center"}}>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center" ,textDecoration: "underline"}}>Admin Tools</h1>
            <h3 style={{textAlign: "center"}}>Here You Can Add New TM To The DataBase</h3>
            <h3 style={{textAlign: "center"}}>And Remove TM From The Database</h3>
            <div className="AdminToolsNav">
            <Link style={{color: "inherit"}}  to={"/PostNewTM"} underline="hover">
                <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Post New TM</Button>
            </Link>
                <Link style={{color: "inherit"}}  to={"/SeeAllTMAdmin"} underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Delete TM</Button>
                </Link>
                <Link style={{color: "inherit"}}  to={"/"} underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Delete Users</Button>
                </Link>
                <Link style={{color: "inherit"}}  to={"/"} underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Go Back</Button>
                </Link>
            </div>
            {handleRedirect()}
        </>
    )
}

export default AdminTools