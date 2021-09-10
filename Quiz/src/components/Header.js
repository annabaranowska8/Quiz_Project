import React from "react";

const Header = () => {
  // const name = localStorage.getItem("nameInLocalStorage");
  // const group = localStorage.getItem("groupInLocalStorage");

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <h1>
            <a href="https://www.sekretyrozwojuosobistego.pl/" target="blank">
              Sekrety Rozwoju
              <br /> Osobistego
            </a>
          </h1>
        </div>
        {/* <div className="personalData">
                    {localStorage.getItem("nameInLocalStorage", "groupInLocalStorage") && <h2>Witaj {name}!</h2>}
                    {localStorage.getItem("nameInLocalStorage", "groupInLocalStorage") && <h2>Grupa: {group}</h2>}
                </div> */}
      </div>
    </div>
  );
};

export default Header;
