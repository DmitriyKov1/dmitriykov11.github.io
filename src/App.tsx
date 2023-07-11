import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import File from "./Pages/File";
import { LOGIN_ROUTE, FILE_ROUTE } from "./constants";
import UserStore from "./UserStore";
import APIrequest from "./APIrequest";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserStore>
        <APIrequest>
          <div className="container">
            <div className="app">
              <div className="wrapper">
                <header>
                  <Navbar />
                </header>
                <main>
                  <Routes>
                    <Route path={LOGIN_ROUTE} element={<Login />} />
                    <Route path={FILE_ROUTE} element={<File />} />
                  </Routes>
                </main>
                <footer>
                  <Footer />
                </footer>
              </div>
            </div>
          </div>
        </APIrequest>
      </UserStore>
    </BrowserRouter>
  );
};

export default App;
