import React from "react";
import { IonIcon } from "@ionic/react";
import { search, notificationsOutline, caretDown, apps } from 'ionicons/icons';
import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { AppContext } from "../context/AppContext.tsx";

const Navbar : React.FC = () => {
    const {isSidebarVisible, setIsSidebarVisible} = React.useContext(AppContext)
    
    return(
        <div className="navbarWrapper">
            <img src={logo} className="logo" alt="logo"/>
            <div className="searchWrapper">
                <input />
                <IonIcon icon={ search } className="searchIcon"/>
            </div>

            <div className="content">
                <a href="/users">Docs</a>
                <IonIcon icon={ notificationsOutline } className="icon notificationIcon"/>
                <img src={avatar} className="avatar" alt="avatar"/>
                <p className="name">Adedeji <IonIcon icon={ caretDown } className="icon"/></p>
                <IonIcon icon={ apps } className="icon bars" onClick={() => setIsSidebarVisible(!isSidebarVisible)}/>
            </div>
        </div>
    )
}

export default Navbar;