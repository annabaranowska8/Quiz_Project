import React from 'react'
import Header from "../Header";
import Footer from "../Footer";

const Loader = () => {
    return (
        <>
        <Header />
        <div className="preloader-area">
            <div className="lds-hourglass"></div>
        </div>
        <Footer />
        </>
    );
}
 
export default Loader;