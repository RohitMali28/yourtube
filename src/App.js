import logo from './logo.svg';
import './App.css';
import  react {useState} from "react"
import Navbar from './Component/Navbar/Navbar';


function App() {
  const [toggledrawersidebar, settogledrawersidebar useState = ({
    display: "none"
  })];
  const toggledrawersidebar=()=>{
    if(toggledrawersidebar.diplay==="none"){
      settogledrawersidebar({
        display:"flex",
      });

    }else{
      settogledrawersidebar({
        display:"none",
      });
    }
  }
const[editcreatchanlbtn,seteditcreatechanelbtn]=useState(false);
const[videouploadpage,setvideouploadpage]=useState(false);
  return (
    <Navbar seteditcreatechanelbtn={seteditcreatechanelbtn}toggledrawe={toggledrawer}/>
   
  );
}

export default App;
