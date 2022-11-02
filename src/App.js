import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SeeAllTM from "./Pages/SeeAllTM";
import PostNewTM from "./Pages/PostNewTM"
import {useEffect, useState} from "react";
import axios from "axios";
import CreateNewAccount from "./Pages/CreateNewAccount";

function App() {
    const URL = "http://localhost:8080/PMCS"
    const URLAccount = "http://localhost:8080/Account"
    //Use State
    //Login States
    const [aUserLoggedIn, setaUserLoggedIn] = useState(false);
    const [userLogedIn, setUserLoggedIn] = useState("") // Admin, Guest, Regular User
    const [authenticatedUser, setAuthenticatedUser] = useState(false)
    const [userData, setUserData] = useState({})
    //ALL TM State
    const [allTM, setAllTM] = useState([])
    const [TMSearch, setTMSearch] = useState([])
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

    async function postTM(data)
    {
      await  axios.post(URL, data)
      await  getAllTM()
    }
    async function searchTM(name)
    {
        const response = await
         axios.get(URL + "/byEquipmentName/" + name)
        setTMSearch(response.data)
    }
    async function postNewAccount(data)
    {
        await  axios.post(URLAccount, data)

    }

    async function authenticateLogin(username, password)
    {
        const response = await
       axios.get(URLAccount + "/LookUpAccount/" + username + "/" + password )
        setUserData(response.data)

        setaUserLoggedIn(true)
    }

    useEffect(() =>
    {
        setUserLoggedIn(userData.username)
        setAuthenticatedUser(userData.admin)
        console.log(userData.username)
    }, [userData])



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
                                             authenticateLogin={authenticateLogin}
                     />}/>

              <Route path={"/SeeAllTm"}
                     element={<SeeAllTM
                                             getAllTM={getAllTM} allTM={allTM}
                                             aUserLoggedIn={aUserLoggedIn}
                                             userLogedIn={userLogedIn}


                     />}/>
              <Route path={"/PostNewTM"}
                     element={<PostNewTM
                         getAllTM={getAllTM} allTM={allTM}
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                        postTM={postTM}
                     />}/>
              <Route path={"/CreateNewAccount"}
                     element={<CreateNewAccount
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}

                     />}/>

          </Routes>

      </Router>

  );
}

export default App;
