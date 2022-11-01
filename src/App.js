import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SeeAllTM from "./Pages/SeeAllTM";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const URL = "http://localhost:8080/PMCS"

    //Use State
    //Login States
    const [aUserLoggedIn, setaUserLoggedIn] = useState(false);
    const [userLogedIn, setUserLoggedIn] = useState("") // Admin, Guest, Regular User
    const [authenticatedUser, setAuthenticatedUser] = useState(false)

    //ALL TM State
    const [allTM, setAllTM] = useState([])

    //Use Effect
useEffect(() => {
    getAllTM()
}, [])

    //Custom Method
   async function getAllTM()
    {
        const response = await
            axios.get(URL)
        setAllTM(response.data);
    }



  return (


      <Router>
          <Routes>
              <Route path={"/"}

                     element={<HomePage   aUserLoggedIn={aUserLoggedIn} userLogedIn={userLogedIn}
                                          setUserLoggedIn={setUserLoggedIn}
                                          setaUserLoggedIn={setaUserLoggedIn}
                                        authenticatedUser={authenticatedUser}
                                          setAuthenticatedUser={setAuthenticatedUser}
                                          getAllTM={getAllTM}
                     />}/>
              <Route path={"/Login"}


                     element={<Login         aUserLoggedIn={aUserLoggedIn} userLogedIn={userLogedIn}
                                             setUserLoggedIn={setUserLoggedIn}
                                             setaUserLoggedIn={setaUserLoggedIn}
                                             authenticatedUser={authenticatedUser}
                                             setAuthenticatedUser={setAuthenticatedUser}
                     />}/>

              <Route path={"/SeeAllTm"}
                     element={<SeeAllTM
                                             getAllTM={getAllTM} allTM={allTM}
                                             aUserLoggedIn={aUserLoggedIn}
                                             userLogedIn={userLogedIn}


                     />}/>
          </Routes>
      </Router>

  );
}

export default App;
