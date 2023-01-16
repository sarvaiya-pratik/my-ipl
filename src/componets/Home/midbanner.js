import React from "react";
import "./midbanner.css"


const midBanner = ({ Mydata }) => {

  return (<>
{Mydata.map((curImg)=>{

  return(
  <div className="team-banner">
    <img src={curImg.Mysrc} />
  </div>
  )

})}

  </>
  )
}

export default midBanner;