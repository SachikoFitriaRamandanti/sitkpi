import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import "../components/CardAbout.css";
import photo from "../Pages/PP.jpg";

export default function Profile() {
  return (
       <div style={{ display: "block", justifyContent: "center",textAlign: "center" }}>
        <div style={{ marginTop:"100px"}}>


        {/* <h1 style={{ color: "white" }}>About App</h1>
        <h1 style={{display: "inline-block", justifyContent: "center"}}>TKPI</h1> 
        <br></br>
            <h2>
            Tabel Komposisi Pangan Indonesia merupakan kumpulan data komposisi zat gizi pangan yang ada di Indonesia, yang berasal dari laporan atau makalah hasil penelitian mengenai komposisi zat gizi pangan.
            </h2>
        <br></br>
            <h2>
            Tujuan pembuatan website Tabel Komposisi Pangan adalah untuk mengetahui konsumsi makanan atau asupan zat gizi yang diperlukan dalam penentuan label gizi, penelitian gizi dan kesehatan, praktek klinis seperti konsultasi gizi/diet dan ketahanan pangan.
            </h2>
      </div> } */}

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
