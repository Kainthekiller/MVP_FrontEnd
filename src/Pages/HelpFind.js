import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function HelpFind(props)
{
    //Use State

    //Custom Method

    //Main
    return (
        <>
            <div className={"LoginStatus"}>
                {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
            </div>
            <div style={{textAlign: "center"}}>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center"}}>Help Me!!</h1>
            <h3 style={{textAlign: "center"}}>Sometimes I am missing information you need. Help me know if I am missing something
            you would find valuable by submitting what I am missing form</h3>
            <Link to={"/"} style={{color: "inherit"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Go Back</Button></Link>
        <div className={"InputFormsPost"}>
            <form style={{textAlign: "center"}}>
            <span style={{margin: 115}}>
            Equipment Name:
        </span>
                <input
                placeholder={"Equipment Name"}
                />
                <br/>
                <span style={{margin: 5 }}>
            Radio?, Vehicle?, Generator?:
        </span>
                <input
                placeholder={"Category"}
                />
                <br/>
                <span style={{margin: 5 }}>
            Your Best Brief Description.
        </span>
                <input
                placeholder={"Any Extra Helpful Information"}
                />
                <br/>
                <Button variant={"contained"} sx={{backgroundColor: "Black", color: "Yellow" }}>Submit</Button>
            </form>
        </div>
        </>
    )
}

export default HelpFind