import React from "react";
import BackgroundImage from "../Header/images/dunderMifflinLogo2.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/search">
      <div
        //  className="jumbotron jumbotron-image jumbotron-fluid"
        id="jumbotron"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        {/*  <button
          style={{
            background: "white",
            top: "86%",
            left: "36%",
            position: "absolute",
            border: "none",
            borderRadius: "50px",
            color: "#0066CC",
            fontSize: "25px",
            minHeight: "88px",
            fontWeight: "bold",
            minWidth: "400px",
          }}
        >
          Vyhľadať zamestnanca
        </button> */}
        <div className="container" />
      </div>
    </Link>
  );
}

export default Header;
