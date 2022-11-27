import { Fragment, useState, useEffect } from "react";
import CardBig from "../components/CardBig";
import CardNormal from "../components/CardNormal";
import "./Movie.css";
import axios from "axios"
import {Link} from 'react-router-dom';

export default function Movie() {
  const [data, setData] = useState([]);  
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
      const headers = {
        'Content-Type': 'text/plain'
    };

  const fetchData = () => {
    const baseURL = "https://sitkpi.000webhostapp.com/getdetail.php?kategori=telur";
    axios({method: "get",url : baseURL, withCredentials: false}).then((response) => setData(response.data.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardNormal
            nama={item.nama}
            kategori={item.kategori}
            // img={item.img}
            // genre={item.genre}
            onClick={() => alert("Nama Bahan = " + item.nama+"\nKategori =  "+ item.kategori+"\nProtein = "+item.protein+"g\nAir = "+item.air+"g\nLemak = "+item.lemak+"g\n Serat = "+item.serat+"g\n Kalsium = "+item.kalsium+"mg")}
         
            
      >
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
          </CardNormal>
        </Fragment>
      ))}
    </>
  );
}

