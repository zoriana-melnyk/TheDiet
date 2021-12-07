import React from "react";
import login from "../img/login.jpg"

function Register({ onClick }) {
    return (
        <div className="base-constructor" >
            <div className="header">Зареєструватися</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login_img" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Нікнейм</label>
                        <input type="text" name="username" placeholder="нікнейм" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Eлекронна пошта</label>
                        <input type="email" name="email" placeholder="електронна пошта" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" placeholder="пароль" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="buttton" className="btn">Зареєструватися</button>
            </div>
        </div>
    );
}

export {
    Register
}