import { Fragment, useState, useEffect } from "react";
import CardBig from "../components/CardBig";
import CardNormal from "../components/CardNormal";
import "./Movie.css";
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Detail() {
  const idPangan = useParams();
  // const [data, setData] = useState({}); 
    // console.log(idPangan.id);

    
  const [pangans, setPangan] = useState([]);
  
  const getPangan = async () => {
    try {
      let response = await axios({ 
        method: 'GET', 
        url: `https://sitkpi.000webhostapp.com/getdetail.php?id=${idPangan.id}`,
        });
        setPangan(response.data.data)
        // setPangan(response.data.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getPangan();
  })
//     if(useParams().id){
//         idPangan = idPangan.id;
//     }
// // console.log(data);
//       const headers = {
//         'Content-Type': 'text/plain'
//     };

//   const fetchDataId = () => {
//     const baseURL = `https://sitkpi.000webhostapp.com/getdetail.php?id=${idPangan}`;
//     axios({method: "get",url : baseURL, withCredentials: false}).then((response) => setData(response.data.data[0]));
//   };
//   useEffect(() => {
//     fetchDataId();
//   }, []);
  return (
    <>
    {pangans.map((item, index) => {
      // console.log(item)
        return (
          
            <div style={{textAlign: "center"}}>
              <p>air : {item.air}</p>
              <p>kalsium : {item.kalsium}</p>
              <p>lemak : {item.lemak}</p>
              <p>protein : {item.protein}</p>
              <p>serat : {item.serat}</p>
            </div>
            );
          })}
    </>
  );
}

