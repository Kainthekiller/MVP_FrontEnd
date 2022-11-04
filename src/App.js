import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SeeAllTM from "./Pages/SeeAllTM";
import PostNewTM from "./Pages/PostNewTM"
import FindTM from "./Pages/FindTM"
import SeeAllTMAdmin from "./Pages/SeeAllTMAdmin"
import AdminTools from "./Pages/AdminTools"
import Recommendations from "./Pages/Recommendations"
import HelpFind from "./Pages/HelpFind"
import {useEffect, useState} from "react";
import axios from "axios";
import CreateNewAccount from "./Pages/CreateNewAccount";
import DeleteUser from "./Pages/DeleteUser";

function App() {
    const URL = "http://localhost:8080/PMCS"
    const URLAccount = "http://localhost:8080/Account"
    const URLRecommendations = "http://localhost:8080/Recommend"
    //Use State
    //Login States
    const [aUserLoggedIn, setaUserLoggedIn] = useState(false);
    const [userLogedIn, setUserLoggedIn] = useState("") // Admin, Guest, Regular User
    const [authenticatedUser, setAuthenticatedUser] = useState(false)
    const [userData, setUserData] = useState({})
    //ALL TM State
    const [allTM, setAllTM] = useState([])
    const [TMSearch, setTMSearch] = useState([])
    const [allUser, setAllUser] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [allRecommendations, setAllRecommendations] = useState([])
    //Use Effect
useEffect(() => {
    getAllTM()
    getAllUsers()
    GetAllRecommendations()
}, [])

    //Custom Method
   async function getAllTM()
    {
        const response = await
            axios.get(URL)
        setAllTM(response.data);
    }
    async function getAllUsers()
    {
        const response = await
            axios.get(URLAccount)
        setAllUser(response.data)
    }
    async function GetAllRecommendations()
    {
        const response = await
        axios.get(URLRecommendations)
        setAllRecommendations(response.data)
    }
    async function PostRecommendations(data)
    {
        await axios.post(URLRecommendations, data)
        await GetAllRecommendations()
    }
    async function DeleteRecommendation(id)
    {
        await axios.delete(URLRecommendations + "/" + id)
        await GetAllRecommendations();
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
        await getAllUsers()

    }

    async function authenticateLogin(username, password)
    {
        try{
            const response = await
            axios.get(URLAccount + "/LookUpAccount/" + username + "/" + password )
            setUserData(response.data)
            setaUserLoggedIn(true)
            setErrorMessage("")
        }catch(e)
        {

            if (e.response.status === 406)
            {
                setErrorMessage("Invalid Password")
            }
            else if(e.response.status === 404)
            {
                setErrorMessage("User Account Dose Not Exist")
            }



        }

    }
    async function deleteTM(id)
    {
        await axios.delete(URL + "/" + id)
        getAllTM()
    }
    async function deleteUser(id)
    {
        await axios.delete(URLAccount + "/" + id)
        getAllUsers()
    }
    useEffect(() =>
    {
        setUserLoggedIn(userData.username)
        setAuthenticatedUser(userData.admin)
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
                                             errorMessage={errorMessage}
                                             setErrorMessage={setErrorMessage}
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
              <Route path={"/FindTM"}
                     element={<FindTM
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}

                     />}/>

              <Route path={"/SeeAllTMAdmin"}
                     element={<SeeAllTMAdmin
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}
                         getAllTM={getAllTM} allTM={allTM}
                         deleteTM={deleteTM}

                     />}/>
              <Route path={"/AdminTools"}
                     element={<AdminTools
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}

                     />}/>
              <Route path={"/DeleteUser"}
                     element={<DeleteUser
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}
                         getAllTM={getAllTM} allTM={allTM}
                         allUser={allUser}
                         deleteUser={deleteUser}
                     />}/>
              <Route path={"/HelpFind"}
                     element={<HelpFind
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}
                         getAllTM={getAllTM} allTM={allTM}
                         allUser={allUser}
                         deleteUser={deleteUser}
                         setAllRecommendations={setAllRecommendations}
                         PostRecommendations={PostRecommendations}

                     />}/>
              <Route path={"/Recommendations"}
                     element={<Recommendations
                         aUserLoggedIn={aUserLoggedIn}
                         userLogedIn={userLogedIn}
                         authenticatedUser={authenticatedUser}
                         TMSearch={TMSearch}
                         searchTM={searchTM}
                         postNewAccount={postNewAccount}
                         getAllTM={getAllTM} allTM={allTM}
                         allUser={allUser}
                         deleteUser={deleteUser}
                         GetAllRecommendations={GetAllRecommendations}
                         DeleteRecommendation={DeleteRecommendation}
                         allRecommendations={allRecommendations}
                     />}/>

          </Routes>




      </Router>

  );
}

export default App;
