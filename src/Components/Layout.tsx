import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "../index.css";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <Navbar />
        </header>
        <main></main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default Layout;
