import React, {useState} from "react";
import "../StyleSheet/CreateNewAccount.css"
import {Button, colors} from "@mui/material";
function CreateNewAccount(props)
{
    //Use State
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [admin, setAdmin] = useState(false);
const [accountCreated, setAccountCreated] = useState(false)
    //Custom Method

    //Main
    return (
        <>
            <div style={{textAlign: "center"}}>
            <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center", textDecoration: "underline"}}>Create New Account</h1>
            <div className={"InputFormsPost"}>
            <form style={{textAlign: "center", }}>
                <span style={{margin: 5}}>
           UserName:
                </span>
                <input
                placeholder={"Username..."}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <span style={{margin: 15}}>
           Password:
                </span>
                <input
                    placeholder={"Password..."}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <span style={{margin: 57}}>
          Email:
                </span>
                <input
                    placeholder={"Email..."}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                Admin Account?
                <div className={"largeCheckBox"}>
                <input
                type={"checkbox"}
                style={{padding: 50}}
                onChange={(e) => setAdmin(e.target.checked)}
                />
                </div>
                {accountCreated ?
                    <div>
                <Button sx={{backgroundColor: "Black", color: "yellow"}} variant={"contained"}>Create Account</Button>
                        <br/>
                        <Button sx={{backgroundColor: "black", color: "yellow"}} variant={"contained"}>Go Back</Button>
                    </div>
                        :

                    <div>
                    <p style={{color: "green"}}>Account Created</p>
                    <Button sx={{backgroundColor: "black", color: "yellow"}} variant={"contained"}>Go Back</Button>
                    </div>}
            </form>
            </div>
        </>
    )
}

export default CreateNewAccount