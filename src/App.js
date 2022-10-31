import logo from './logo.svg';
import './App.css';
import {Link} from "@mui/material";

function App() {
  return (
      <>
    <div className="MainPageHead">
      <h1>Welcome To PMCS</h1>
      <div className="NavLinks">

      <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}} href="#" underline="hover">
        {'Main'}
      </Link>


      <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2}} href="#" underline="hover">
        {'See All TM'}
      </Link>

      <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 3, paddingRight: 3}} href="#" underline="hover">
        {'Find TM'}
      </Link>

      </div>
    </div>
      </>
  );
}

export default App;
