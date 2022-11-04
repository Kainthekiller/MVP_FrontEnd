import React, {useState} from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function HelpFind(props)
{
    //Use State
    const [itemName, setItemName] = useState("")
    const [category, setCategory] = useState("")
    const [brief, setBrief] = useState("")
    const [uniqueName, setUniqueName] = useState("")

    //Custom Method
    function handleSubmit(e)
    {
        e.preventDefault()
        if (itemName === "")
        {
            alert("Please Put a Equipment Name")
            return
        }
       else if (category === "")
        {
            alert("Please Fill Out Category")
            return
        }
        else if (brief === "")
        {
            alert("Please Fill out Brief Description")
            return
        }
        else if (uniqueName === "")
        {
            alert("Please Fill Out any Unique Name or just Put N/A")
            return
        }
        const data = {
            itemName: itemName,
            category: category,
            brief: brief,
            uniqueName: uniqueName
        }
        props.PostRecommendations(data)
        alert("Thank you for your Help")
        setItemName("")
        setCategory("")
        setBrief("")
        setUniqueName("")
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
            <h1 style={{textAlign: "center"}}>Help Me!!</h1>
            <h3 style={{textAlign: "center"}}>Sometimes I am missing information you need. Help me know if I am missing something
            you would find valuable by submitting what I am missing form</h3>
            <Link to={"/"} style={{color: "inherit"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Go Back</Button></Link>
        <div className={"InputFormsPost"}>
            <form onSubmit={(e) => handleSubmit(e)} style={{textAlign: "center"}}>
            <span style={{margin: 115}}>
            Equipment Name:
        </span>
                <input
                placeholder={"Equipment Name"}
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                />
                <br/>
                <span style={{margin: 5 }}>
            Radio?, Vehicle?, Generator?:
        </span>
                <input
                placeholder={"Category"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
                <br/>
                <span style={{margin: 5 }}>
            Your Best Brief Description.
        </span>
                <input
                placeholder={"Any Extra Helpful Information"}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                />
                <br/>
                <span style={{margin: 5 }}>
           Unique Names for the Equipment.
        </span>
                <input
                    placeholder={"Unique Names?"}
                    value={uniqueName}
                    onChange={(e) => setUniqueName(e.target.value)}
                />
                <br/>
                <Button type={"submit"} variant={"contained"} style={{width: 200, height: 50}} sx={{backgroundColor: "Black", color: "Yellow" }}>Submit</Button>
            </form>
        </div>
        </>
    )
}

export default HelpFind