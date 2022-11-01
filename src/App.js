import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import {useState} from "react";

function App() {
    const [aUserLoggedIn, setaUserLoggedIn] = useState(false);
    const [userLogedIn, setUserLoggedIn] = useState("") // Admin, Guest, Regular User

  return (


      <Router>
          <Routes>
              <Route path={"/"}

                     element={<HomePage   aUserLoggedIn={aUserLoggedIn} userLogedIn={userLogedIn}
                                          setUserLoggedIn={setUserLoggedIn}
                                          setaUserLoggedIn={setaUserLoggedIn}/>}/>
              <Route path={"/Login"}


                     element={<Login         aUserLoggedIn={aUserLoggedIn} userLogedIn={userLogedIn}
                                             setUserLoggedIn={setUserLoggedIn}
                                             setaUserLoggedIn={setaUserLoggedIn} />}/>
          </Routes>
      </Router>

  );
}

export default App;
