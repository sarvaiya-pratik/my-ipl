import React, { useState } from 'react';
import Topbanner from "../Home/topbanner"
import Card from "./card"
import Data from './imgdata';

const Squad = () => {
    const [imageData,setImageData] = useState(Data);
    
    return (
        <>
            <Topbanner />

            <div className='cards-container' style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                <Card myData={imageData} />
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </>
    )
}

export default Squad;