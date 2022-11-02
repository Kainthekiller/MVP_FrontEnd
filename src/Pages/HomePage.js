import React from "react";
import "../App.css";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";





function HomePage(props) {
    //Use State


    //Custom Method
    function handleLogOut()
    {
        props.setAuthenticatedUser(false);
        props.setUserLoggedIn("")
        props.setaUserLoggedIn(false)
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

                <div className="NavLinks">
                    {/*User Login Button*/}
                    {!props.aUserLoggedIn ?

                        <Link  underline="hover" style={{color: "inherit"}}  to={"/login" }>
                            <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Login</Button>
                        </Link>:
                        <Link  underline="hover" style={{color: "inherit"}}  to={"" }>
                            <Button onClick={handleLogOut}  variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Log Out</Button>
                        </Link>}

                    <Link style={{color: "inherit"}}  to={"/PostNewTM"} underline="hover">
                        <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}>Post Tm (Admin)</Button>
                    </Link>


                    <Link style={{color: "inherit"}} to={"/SeeAllTM"} underline="hover">
                        <Button onClick={props.getAllTM} variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >See All TM</Button>
                    </Link>

                    <Link  style={{color: "inherit"}} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 3, paddingRight: 3}} href="#" underline="hover" to={"/FindTM"}>
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
                <Link style={{color: "inherit"}} href="#" underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >AKO</Button>
                </Link>
                <Link style={{color: "inherit"}} href="#" underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Army Publishing Directorate</Button>
                </Link>
                <Link style={{color: "inherit"}} href="#" underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Wikipedia PMCS</Button>
                </Link>

                <Link style={{color: "inherit"}} href="#" underline="hover">
                    <Button variant={"contained"} sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}}  >Army PMCS FlashCard</Button>

                </Link>
            </div>
        </>

    );
}
export default HomePage