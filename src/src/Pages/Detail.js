import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import { useLocation } from "react-router";
import "../components/CardAbout.css";
import photo from "../Pages/PP.jpg";
import { Navigate } from "react-router-dom";
import CardNormal from "../components/CardNormal";
import ""

export default function Detail() {
  const {state} = useLocation();
  const {nama, kategori, protein, air, lemak, serat, kalsium, id} = state;
  return (
       <div style={{ display: "block", justifyContent: "center",textAlign: "center" }}>
        <div style={{ marginTop:"100px"}}>


        {/* <h1 style={{ color: "white" }}>About App</h1>
        <h1 mposisi Pangan adalah untuk mengetahui konsumsi makanan atau asupan zat gizi yang diperlukan dalam penentuan label gizi, penelitian gizi dan kesehatan, praktek klinis seperti konsultasi gizi/diet dan ketahanan pangan.
            </h2>
      </div> } */}


      <div class="container">
      <Fragment key={id}>
          <CardNormal
            // img={item.img}
            // genre={item.genre}
            
              // ("Nama Bahan = " + item.nama+"\nKategori =  "+ item.kategori+"\nProtein = "+item.protein+"g\nAir = "+item.air+"g\nLemak = "+item.lemak+"g\n Serat = "+item.serat+"g\n Kalsium = "+item.kalsium+"mg")}

            
      >
        <p>Nama Bahan = {nama}</p>
        <p>Kategori = {kategori}</p>
        <p>Protein = {protein}</p>
        <p>Air = {air}</p>
        <p>Lemak = {lemak}</p>
        <p>Serat = {serat}</p>
        <p>Kalsium = {kalsium}</p>
          
          </CardNormal>
        </Fragment>
        <h3></h3>
        <span></span>
        <p></p>

      </div>
      </div>
      </div>

  );
}