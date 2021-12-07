import React from "react";
import login from "../img/login.jpg"

function LogIn({ onClick }) {
    return (
        <div className="base-constructor">
            <div className="header">Увійти</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login-img" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Нікнейм</label>
                        <input type="text" name="username" placeholder="нікнейм" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" placeholder="пароль" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="buttton" className="btn">Увійти</button>
            </div>
        </div>
    );
}
export { LogIn };