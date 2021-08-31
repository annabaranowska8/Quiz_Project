import React from "react";

const Header = () => {
    const name = localStorage.getItem("NameLocalStorage");
    const group = localStorage.getItem("GroupLocalStorage");
    return <>
    <div className="header">
        <div className="container">
            <div className="logoHeader">
                <h1>Sekrety Rozwoju<br/> Osobistego</h1>
            </div>
        </div>
    </div>
    </>
}

export default Header;