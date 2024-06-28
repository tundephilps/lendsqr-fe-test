import React from "react";
import { IonIcon } from "@ionic/react";
import { briefcase, caretDown } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from "react-router-dom"

import "../styles/Sidebar.scss";
import Routes from "../routes/Sidebar.ts";
import { AppContext } from "../context/AppContext.tsx";

const Sidebar : React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const { isSidebarVisible } = React.useContext(AppContext);

    
    return(
        <div className={`sidebarWrapper ${isSidebarVisible ? "sidebarWrapper-active" : ""}`}>
            <div className="itemWrapper">
                <button className="organization"><IonIcon icon={ briefcase }/> Switch Organization <IonIcon icon={ caretDown }/></button>
            </div>

            <div className="wrapper">
                { Routes.map((route, key) => (
                    <div key={key} className="itemWrapper">
                        <p className="category">{ route.category }</p>
                        {route.children.map((item, index) => (
                            <button onClick={() => navigate(item.route)} className={item.route === pathName ? "item active" : "item"} key={ index }><FontAwesomeIcon icon={ item.icon }/> { item.title } </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;