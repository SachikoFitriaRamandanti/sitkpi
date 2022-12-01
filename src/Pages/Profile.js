import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import "../components/CardAbout.css";
import photo from "../Pages/PP.jpg";

export default function Profile() {
  return (
       <div style={{ display: "block", justifyContent: "center",textAlign: "center" }}>
        <div style={{ marginTop:"100px"}}>

        <div class="logo">Sachiko Fitria Ramandanti</div>
        <div class="myName">Teknik Komputer '20</div>
        <div class="myName">21120120140103</div>
      <div class="container">
        <div class="img_con">
          <img src={photo} alt="logo" width="200px"/>
          <div class="back"></div>
        </div>
        <h3></h3>
        <span></span>
        <p></p>

      </div>
      </div>
      </div>

  );
}
