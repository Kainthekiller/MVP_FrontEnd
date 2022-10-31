import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";

function App() {
  return (

      <Router>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/Login"} element={<Login/>}/>
          </Routes>
      </Router>

  );
}

export default App;
