import React from "react";

const Header = () => {
    const name = localStorage.getItem("NameLocalStorage");
    const group = localStorage.getItem("GroupLocalStorage");
    return <>
    <div className="header">
        <div className="logoHeader">
            <h1>Sekrety Rozwoju Osobistego</h1>
        </div>
        <div className="personalData">
            <h2>Witaj {name}!</h2>
            <h2>Grupa: {group}</h2>
        </div>
    </div>
    </>
}

export default Header;