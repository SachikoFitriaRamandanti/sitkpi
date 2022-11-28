import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";

export default function CardNormal({ nama, kategori, onClick }) {
  return (
    <div className="cards" onClick={onClick}>
      {/* <img src={img} alt="" className="photo" /> */}
      <div className="description">
        <div>
          <p id="titles">{nama}</p>
          <p id="genres">{kategori}</p>
        </div>
      </div>
    </div>
  );
}

