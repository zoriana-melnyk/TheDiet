import React from "react";
import login from "../img/login.jpg"

function Register({ onClick }) {
    return (
        <div className="base-constructor" >
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login_img" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="buttton" className="btn">Register</button>
            </div>
        </div>
    );
}

export {
    Register
}