import React, { useState } from "react";
import logo from "./logo.ico";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiVideoAddlLine } from "react-icon/bi";
import { IpMdNotoficationsoutline } from "react-icon/bi";
import {BiUserCircle} from "react-icon/bi"

const Navbar = ({ toggledrawer, seteditcreatechanelbtn }) => {
  const [authbtn, setauthbtn] = useState(false);
  const currentuser = null;
  return (
    <>
      <div className="container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => toggledrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/."} className="logo_div_navbar">
            <img src={logo} alt="" />
            <p className="logo_title-Navbar"> Your Tube</p>
          </Link>
        </div>
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
        <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        </div>
        <IpMdNotoficationsoutline size={22} className={"vid_bell_Navbar"}/>
        <div className="Auth_cont_Navbar">
            {currentuser ?(
                <>
                <div className="chanel_logo_App" onClick={()=>setauthbtn(true)}>
                    <p className="fstChar_logo_App">
                        {currentuser?.result.name ?(
                            <>{currentuser?.result.name.charAT(0).toUpperCase()}</>
                        ) :( 
                            <>{currentuser?.result.email.charAT(0).toUpperCase()}</>
                        )}
                    </p>
                </div>
                </>
            ) :(
               <>
               <BiUserCircle size={22}/>
               <b>Sign in</b>
               </>
            )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
