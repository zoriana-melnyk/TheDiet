import React from "react";
import login from "../img/login.jpg"

import { useLittera } from "@assembless/react-littera";
import { loginTranslations } from "../localization/LoginTranslation";
import { UserApi } from "../api/user.api";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function LogIn({ onClick }) {
    const navigate = useNavigate();

    const translated = useLittera(loginTranslations);

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        try {
            const { data } = await UserApi.login(formProps);
            localStorage.setItem('user', JSON.stringify(data))
            toast.success('Авторизація успішна');
            navigate('/');
        } catch (e) {
            const { response: { data: { message } } } = e;
            toast.error(message);
        }
    }

    return (
        <form className="base-constructor" onSubmit={onFormSubmit}>
            <div className="header">{translated.header}</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login-img" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">{translated.username}</label>
                        <input type="text" name="email" placeholder="пошта" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{translated.password}</label>
                        <input type="password" name="password" placeholder="пароль" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">{translated.header}</button>
            </div>
        </form>
    );
}
export { LogIn };