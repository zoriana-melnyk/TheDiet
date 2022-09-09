import React from "react";
import login from "../img/login.jpg"

import { useLittera } from "@assembless/react-littera";
import { loginTranslations } from "../localization/LoginTranslation";


function LogIn({ onClick }) {

    const translated = useLittera(loginTranslations);

    return (
        <div className="base-constructor">
            <div className="header">{translated.header}</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login-img" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">{translated.username}</label>
                        <input type="text" name="username" placeholder="нікнейм" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{translated.password}</label>
                        <input type="password" name="password" placeholder="пароль" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="buttton" className="btn">{translated.header}</button>
            </div>
        </div>
    );
}
export { LogIn };