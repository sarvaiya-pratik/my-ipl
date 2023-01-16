import React from 'react';
import "./aboutcard.css"

const Aboutcard = () => {

    return (<>
        <div className='main-container'>
            <div className='heading'>
                <h2>About US</h2>
            </div>
            <div className='mid-card'>
                <div className='address'>
                    <h3>Address</h3>
                    <p><i class="fa-sharp fa-solid fa-location-dot"></i> BCCI-IPL 4th Floor, Cricket Centre. Wankhede  Stadium 'D' Road, Churchgate Mumbai - 400020 India</p>
                </div>
                <div className='contact-us'>
                     <h3>Contact US</h3>
                     <p><i class="fa-sharp fa-solid fa-phone"></i>  +91 22 22800300</p>
                     <p><i class="fa-sharp fa-solid fa-phone"></i>  +91 22 61580300</p>
                     <p><i class="fa-sharp fa-solid fa-phone"></i>  +91 22 22800354</p>
                </div>
            </div>
        </div>
    </>)
}

export default Aboutcard;

