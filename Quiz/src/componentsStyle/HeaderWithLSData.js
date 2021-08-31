import React from "react";
import NameLocalStorage from "../componentsLogic/NameLocalStorage";
import GroupLocalStorage from "../componentsLogic/GroupLocalStorage";

const HeaderWithLSData = () => {
    const name = localStorage.getItem("nameInLocalStorage");
    const group = localStorage.getItem("groupInLocalStorage");

    return <>
    <div className="header">
        <div className="container">
            <div className="logoHeader">
                <h1>Sekrety Rozwoju<br/> Osobistego</h1>
            </div>
            <div className="personalData">
                <h2>Witaj {name}!</h2>
                <h2>Grupa: {group}</h2>
            </div>
        </div>
    </div>
    </>
}

export default HeaderWithLSData;