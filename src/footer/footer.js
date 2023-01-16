import React from 'react';
import "./footer.css"

const Footer = () => {
    return (<>
        <div className='footer-container'>
            <div className='footer'>
                <div className='team-container'>

                    <div className='heading'>
                        <h2>Team</h2>
                    </div>
                    <div className='team'>
                        <p>Gujarat Titan</p>
                        <p>Chennai Super king</p>
                        <p>Delhi Capitals</p>
                        <p>Kolkata Knight Riders</p>
                        <p>Lucknow Super Giants</p>
                        <p>Mumbai Indians</p>
                        <p>Punjab Kings</p>
                        <p>Rajasthan Royals</p>
                        <p>Royal Challengers Bangalore</p>
                        <p>Sunrisers Hyderabad</p>
                    </div>
                </div>

                <div className='guidelines-conatiner'>
                    <div className='heading'>
                        <h2>GUIDELINES</h2>
                    </div>
                    <div className='guidelines'>
                        <p>IPL Code Of Conduct For Match Officials</p>
                        <p>Brand And Protection Guidelines</p>
                        <p>Governing Council</p>
                        <p>Match Playing Conditions</p>
                        <p>PMOA Minimum Standard</p>
                        <p>Suspect Action Policy</p>
                    </div>
                </div>

                <div className='contact-container'>
                    <div className='heading'>
                        <h2>Contact</h2>
                    </div>
                    <div className='contact'>
                        <p>Contact Us</p>
                        <p>Sponsorship</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='last-container'>
                <div className='copyright'>
                    <p>copyright &copy;  IPL 2023 All Rights Reserved.</p>
                </div>
                <div className='social-media'>
                    <a href='https://www.facebook.com/pratik.saravaiya'> <i class="fa-brands fa-facebook"></i></a>
                     <a href='https://www.google.com'><i class="fa-brands fa-twitter"></i> </a>
                    
                    <a href='https://instagram.com/pratiksaravaiya?igshid=YmMyMTA2M2Y='> <i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </>)
}
export default Footer;