import React, { useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {Button} from "@mui/material";
import  "../StyleSheet/PostNewTM.css"


function PostNewTM(props)
{
    //Use State
    const [itemName, setItemName] = useState("")
    const [publishDate, setPublishDate] = useState("")
    const [tmNumber , setTMNumber] = useState("")
    const [pageCount, setPageCount] = useState(0);
    const [pagePMCSStart, setPagePMCSStart] = useState(0);
    const [link, setLink] = useState("")
    //Custom Method

    //Handles If the User is allowed to Post
    function handleRedirect()
    {
        if (!props.authenticatedUser)
        {
            return <Navigate to="/" />
        }
    }

    function handleSubmit(e)
    {
        let holderDateMonth = publishDate.charAt(5) + publishDate.charAt(6)
        parseInt(holderDateMonth)
        let holderDateDay = publishDate.charAt(8) + publishDate.charAt(9)
        parseInt(holderDateDay)
        e.preventDefault()
        if (itemName === "")
        {
            alert("Please Put Equipment Name")
            return;
        }

        if (publishDate === "" || publishDate.length !== 10 || publishDate.charAt(5) > 1 || parseInt(holderDateMonth) > 12  || parseInt(holderDateDay) > 31)
        {
            alert("Please Put Valid Publish Date")
            return;
        }
        if (tmNumber === "")
        {

            alert("Please Put TM Number")
            return;
        }
        if (pageCount === 0)
        {
            console.log("Ran")
            alert("Please Put Page Count")
            return;
        }
        if (pagePMCSStart === 0)
        {

            alert("Please Put PMCS Start Page")
            return;
        }
        if (link === "")
        {

            alert("Please Put In A Link")
            return;
        }

        const data = {
            itemName: itemName,
            publishDate: publishDate,
            tmNumber: tmNumber,
            pageCount: pageCount,
            pagePmcsStart: pagePMCSStart,
            link: link
        }
        props.postTM(data);
        setItemName("")
        setPublishDate("")
        setTMNumber("")
        setPageCount(0)
        setPagePMCSStart(0)
        setLink("")
        alert("TM Added To DataBase")
    }
    //Use Effect
    // useEffect(() =>
    // {
    //     handleRedirect()
    // }, [])

    //Main
    return (
        <>
            {handleRedirect()}

                <div className={"LoginStatus"}>
                    {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
                </div>
            <div style={{textAlign: "center"}}>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center"}}>Post New TM Into Database</h1>

            <Link to={"/"} style={{color: "inherit"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Go Back</Button></Link>
    <div className={"InputFormsPost"}>
        <form style={{textAlign: "center"}} onSubmit={(e) => handleSubmit(e)}>
         <span style={{margin: 5}}>
            Equipment Name:
        </span>
               <input
                   style={{textAlign: "center"}}
               placeholder={"Equipment Name"}
               value={itemName}
               onChange={(e) => setItemName(e.target.value)}
               />

            <br/>
                <span style={{margin: 50}}>
            Publish Date:
        </span>
            <input
                style={{textAlign: "center"}}
                placeholder={"Publish Date YYYY-MM-DD"}
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
            />
            <br/>
            <span style={{margin: 55}}>
            TM Number:
        </span>
            <input
                style={{textAlign: "center"}}
                placeholder={"TM Number"}
                value={tmNumber}
                onChange={(e) => setTMNumber(e.target.value)}
            />
            <br/>
            <span style={{margin: 59}}>
           Page Count:
        </span>
            <input
                style={{textAlign: "center"}}
                placeholder={"Page Count"}
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
            />
            <br/>
            <span style={{margin: 45}}>
            PMCS Starts:
        </span>
            <input
                style={{textAlign: "center"}}
                placeholder={"Page PMCS Starts"}
                value={pagePMCSStart}
                onChange={(e) => setPagePMCSStart(parseInt(e.target.value))}
            />
            <br/>
            <span style={{margin: 65}}>
            Link To TM:
        </span>
            <input
                style={{textAlign: "center"}}
                placeholder={"Link HTTP://www.google.com"}
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <br/>
            <Button type={"submit"} className={"ButtonPost"} variant={"contained"} sx={{backgroundColor: "Black" , color: "Yellow", m: 2}}>Submit</Button>


        </form>
    </div>
        </>
    )
}
export default PostNewTM
