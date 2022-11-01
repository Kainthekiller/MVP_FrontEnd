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
        e.preventDefault()
        const data = {
            itemName: "Humvee (Variations 1097)",
            publishDate: "1991-06-18",
            tmNumber: "TM 9-2320-280-20-1 Post",
            pageCount: 420,
            pagePmcsStart: 115,
            link: "https://www.hmmwvinscale.com/HMMWV%20TM.pdf#page=115"
        }
        props.postTM(data);
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
                placeholder={"Publish Date"}
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
                placeholder={"Link To TM"}
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
