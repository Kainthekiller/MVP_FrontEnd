import React, {useEffect, useState} from "react";
import "../App.css";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";





function HomePage(props) {
    //Use State
    const [catData, setCatData] = useState({})
    const [devJokeData, setDevJokeData] = useState({})
    const URLCat = "https://api.thecatapi.com/v1/images/search?limit=1api_key=live_7CSuuXxS39nCeDdxWPVV2VEpmIxYgsgbvC94ymp1yqeHsehyDepFn7NMgMeZAKid"
    const URLDevJoke = "https://backend-omega-seven.vercel.app/api/getjoke"
    //Use Effect
    useEffect(() => {
        getCatPic()
        getDevJoke()
    }, [])


    //Custom Method
    function handleLogOut()
    {
        props.setAuthenticatedUser(false);
        props.setUserLoggedIn("")
        props.setaUserLoggedIn(false)
    }
   async function getCatPic()
    {
        const response = await
            axios.get(URLCat)
        setCatData(response.data[0])


    }
    async function getDevJoke()
    {
        const response = await
            axios.get(URLDevJoke)
        setDevJokeData(response.data[0])

    }

    return (

        <>
            <div className={"LoginStatus"}>
            {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
            </div>
            <div className="MainPageHead">
                <h1>Welcome To PMCS</h1>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
                <img className={"NavImage"} src="https://www.armyupress.army.mil/portals/7/nco-journal/images/2021/April/PMCS/Feature.jpg" alt=""></img>
                <img className={"NavImageTwo"} src="https://api.army.mil/e2/c/images/2022/03/31/c2981df3/original.jpg" alt=""></img>
        <br/>
                <h5>Random Cat Pic</h5>
                <img style={{width: 350, height: 350, textAlign: "center"}} src={catData.url} alt={""}></img>
                <div>
                    <h2>Question</h2>
                    <h3>{devJokeData.question}</h3>
                    <br/>  <br/>
                    <h2>Answer</h2>
                    <h3>{devJokeData.punchline}</h3>
                </div>
                <div className="NavLinks">
                    {/*User Login Button*/}
                    {!props.aUserLoggedIn ?

                        <Link  underline="hover" style={{color: "inherit"}}  to={"/login" }>
                            <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Login</Button>
                        </Link>:
                        <Link  underline="hover" style={{color: "inherit"}}  to={"" }>
                            <Button onClick={handleLogOut}  variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Log Out</Button>
                        </Link>}



                    <Link style={{color: "inherit"}}  to={"/AdminTools"} underline="hover">
                        <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Admin Tools</Button>
                    </Link>


                    <Link style={{color: "inherit"}} to={"/SeeAllTM"} underline="hover">
                        <Button onClick={props.getAllTM} variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >See All TM</Button>
                    </Link>

                    <Link  style={{color: "inherit"}} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 3, paddingRight: 3}} underline="hover" to={"/FindTM"}>
                        <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Find Tm</Button>
                    </Link>

                </div>


            </div>
            {/* After NAV LINK  */}
            <div className={"AboutMe"}>
                <h1>About This Site</h1>
                <h3>This Site Goal is to help you find the TM you need quickly.</h3>
                <p>1. You Can Login</p>
                <p>2. Admin Can Post New TM</p>
                <p>3. Search For Specific TM by Equipment Name</p>
                <p>4. Can See All TM We Have Avaliable</p>
            </div>

            <div className={"BottomPage"}>
                <a style={{color: "inherit"}} href="https://armyknowledgeoffline.com"  target={"_blank"} rel="noreferrer" >
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >AKO Offline</Button>
                </a>
                <a style={{color: "inherit"}} href="https://armypubs.army.mil" target={"_blank"} rel="noreferrer" >
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Army Publishing Directorate</Button>
                </a>
                <a style={{color: "inherit"}} href="https://pmcs.swf.army.mil/login" target={"_blank"} rel="noreferrer"  >
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >OG PMCS</Button>
                </a>

                <a style={{color: "inherit"}} href="https://quizlet.com/24716467/pmcs-flash-cards/" target={"_blank"}  rel="noreferrer" >
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Army PMCS FlashCard</Button>

                </a>
            </div>
        </>

    );
}
export default HomePage