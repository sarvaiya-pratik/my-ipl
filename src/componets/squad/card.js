import React from "react";
import "./Card.css"


const Card = ({ myData}) => {
    

    return (<>
        {myData.map((curElem) => {

            return (

                <div className="main-body" key={curElem.id}>
                    <div className="logo">
                        <img src={curElem.myimg} alt="logo"></img>
                    </div>
                    <div className="heading">
                        <h2>{curElem.heading}</h2>
                    </div>
                    <div className="sname">
                        <p>{curElem.sname}</p>
                    </div>
                    <div className="btn-container">
                        <button className="btn">Watch Team</button>
                    </div>
                </div>
            )
        })}


    </>)
}

export default Card;
