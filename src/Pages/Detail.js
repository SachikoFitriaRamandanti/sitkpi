import { Fragment, useState, useEffect } from "react";
import CardBig from "../components/CardBig";
import CardNormal from "../components/CardNormal";
import "./Movie.css";
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Detail() {
    const [data, setData] = useState({}); 
    const [id, setId] = useState(0);  
    if(useParams().id){
        setId(useParams().id)
    }
      const headers = {
        'Content-Type': 'text/plain'
    };

  const fetchDataId = (id) => {
    const baseURL = `https://sitkpi.000webhostapp.com/getdetail.php?id=${id}`;
    axios({method: "get",url : baseURL, withCredentials: false}).then((response) => setData(response.data.data[0]));
  };
  useEffect(() => {
    fetchDataId(id);
  }, [id]);

  return (
    <>
        {
            <h1>
                Nama : 
            </h1>
        }
    </>
  );
}

