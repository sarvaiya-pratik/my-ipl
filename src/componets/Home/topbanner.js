import React, { useState } from 'react';
import "./topbanner.css";
import Imgbanner from './imgbanner';
import MidBanner from './midbanner';



const Banners = () => {
    const[myimg,setMyImg] = useState(Imgbanner);

   const filterItem = (nameItem)=>{
        const updatedItem = Imgbanner.filter((elem)=>{
            return elem.name=== nameItem;
        });
        setMyImg(updatedItem);
   }

    return (
        <>


            <div className='top-banner'>
                <div  onClick={()=>filterItem("gt")}>
                    <img src="images/logo/gt.png" width="80px" height="70px" alt='Error' />
                </div>

                <div onClick={()=>filterItem("csk")} >
                    <img src="images/logo/csk.png" width="80px" height="70px" alt='Error' />
                </div>
                <div onClick={()=>filterItem("dc")}>
                    <img src="images/logo/dc.png" width="80px" height="70px" alt='Error' />
                </div>
                <div onClick={()=>filterItem("kkr")}>
                    <img src="images/logo/kkr.png" width="80px" height="70px" alt='Error' />
                </div>
                <div onClick={()=>filterItem("lsg")}>
                    <img src="images/logo/lsg.png" width="80px" height="70px" alt='Error'  />
                </div>
                <div onClick={()=>filterItem("mi")}>
                    <img src="images/logo/mumbai.png" width="80px" height="70px" alt='Error' />
                </div>
                <div onClick={()=>filterItem("pbks")}>
                    <img src="images/logo/pun.png" width="80px" height="70px" alt='Error' />
                </div>
                <div onClick={()=>filterItem("rcb")}>
                    <img src="images/logo/rcb.png" width="80px" height="70px"alt='Error'  />
                </div>
                <div onClick={()=>filterItem("rr")}>
                    <img src="images/logo/RR.png" width="80px" height="70px"alt='Error' />
                </div>
                <div onClick={()=>filterItem("srh")}>
                    <img src="images/logo/srh.png" width="80px" height="70px" alt='Error' />
                </div>


            </div>

            <MidBanner  Mydata={myimg} />





        </>
    )
}

export default Banners;