import React from "react";
import "./signup.css"

const Signup = () => {
    return (
        <>
              <div class="form-main-container">
        <div class="form-container">
            <h2 class="form-heading"> Registration Form</h2>
            <form>
                <div class="input-container">
                    <label for="fname">First Name:</label>
                    <input type="text" placeholder="Enter First name"/>
                </div>
                <div class="input-container">
                    <label for="lname">Last Name:</label>
                    <input type="text" placeholder="Enter Last name"/>
                </div>
                <div class="input-container">
                    <label for="E-mail">E-mail:</label>
                    <input type="email" placeholder="Enter E-mail"/>
                </div>
                <div class="input-container">
                    <label for="phone">Phone:</label>
                    <input type="text" placeholder="Enter phone no"/>
                </div>
                <div class="input-container">
                    <label for="npass">New Password:</label>
                    <input type="text" placeholder="Enter New Password"/>
                </div>
                <div class="input-container">
                    <label for="cpass">Confirm Password:</label>
                    <input type="text" placeholder="Enter confirm Password"/>
                </div>
                <div class="btn-container">
                    <button class="btn">Submit</button>
                </div>
            </form>
        </div>
    </div>

        </>
    )
}
export default Signup;
