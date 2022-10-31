import './App.css';
import {Link} from "@mui/material";

function App() {
  return (
      <>
    <div className="MainPageHead">
      <h1>Welcome To PMCS</h1>
      <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
      <img className={"NavImage"} src="https://www.armyupress.army.mil/portals/7/nco-journal/images/2021/April/PMCS/Feature.jpg" alt=""></img>
      <img className={"NavImageTwo"} src="https://api.army.mil/e2/c/images/2022/03/31/c2981df3/original.jpg" alt=""></img>

      <div className="NavLinks">

      <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}} href="#" underline="hover">
        {'Login'}
      </Link>
        <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}} href="#" underline="hover">
          {'Post TM'}
        </Link>


      <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2}} href="#" underline="hover">
        {'See All TM'}
      </Link>

      <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 3, paddingRight: 3}} href="#" underline="hover">
        {'Find TM'}
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
              <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}} href="#" underline="hover">
                  {'AKO'}
              </Link>
              <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 4, paddingRight: 4}} href="#" underline="hover">
                  {'Army Publishing Directorate'}
              </Link>


              <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2}} href="#" underline="hover">
                  {'Wikipedia PMCS'}
              </Link>

              <Link sx={{m: 2, backgroundColor: "Black", color: "Yellow", padding: 2, paddingLeft: 3, paddingRight: 3}} href="#" underline="hover">
                  {'Army PMCS FlashCard'}
              </Link>
          </div>
      </>

  );
}

export default App;
