import { useState } from "react";

function TourCard({ id, image, name, price, info, remove }) {
  let [trimInfo, setTrimInfo] = useState(true);
  return (
    <div className='tourCard'>
      <div className="card-img" style={{"backgroundImage":`url(${image})`}}></div>
      {/* <img src={image} alt={name} className="card-img"/> */}
      <div className= "p-4 flex flex-col justify-center">
        <div className="flex space-between align-center">
          <p className='card-name'>{name}</p>
          <p className='card-price'>${price}</p>
          </div>
         <p className='card-desc'>
          {trimInfo ? `${info.substr(0, 350)}...`  : info}
          <span className='read-more' onClick={()=>setTrimInfo(!trimInfo)}>{trimInfo ? " Read More" : " Read Less"}</span>
          </p>
          <button className='not-interested' onClick={()=>remove(id)}>Not Interested</button>
      </div>
     
    </div>
  );
}

export default TourCard;
