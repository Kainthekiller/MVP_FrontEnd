import React, {useState} from "react";
import "../StyleSheet/CreateNewAccount.css"
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
function CreateNewAccount(props)
{
    //Use State
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [admin, setAdmin] = useState(false);
const [accountCreated, setAccountCreated] = useState(false)
    //Custom Method

    function handleSubmit(e)
    {
        e.preventDefault()
        if (username === "")
        {
            alert("Please Type A UserName")
            return

        }
        else if (password === "")
        {
            alert("Please Type A Password")
            return

        }
        else if (email === "")
        {
            alert("Please Type A Email")
            return

        }
        const data = {
           username: username,
           password: password,
           emailAddress: email,
           admin: admin
       }
       setAccountCreated(true);
       props.postNewAccount(data)
    }

    //Main
    return (
        <>
            <div style={{textAlign: "center"}}>
            <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center", textDecoration: "underline"}}>Create New Account</h1>
            <div className={"InputFormsPost"}>
            <form onSubmit={(e) => handleSubmit(e)} style={{textAlign: "center", }}>
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
                {!accountCreated ?
                    <div>
                <Button type={"submit"} sx={{backgroundColor: "Black", color: "yellow"}} variant={"contained"}>Create Account</Button>
                        <br/>
                    </div>
                        :

                    <div>
                    <p style={{color: "green"}}>Account Created</p>
                    </div>}
            </form>
                <div style={{textAlign: "center"}}>
                <Link style={{color: "inherit"}} to={"/Login"}><Button sx={{backgroundColor: "black", color: "yellow"}} variant={"contained"}>Go Back</Button></Link>
                </div>
            </div>
        </>
    )
}

export default CreateNewAccount