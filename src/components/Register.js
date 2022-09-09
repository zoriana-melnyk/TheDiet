import React, { useState } from "react";
import login from "../img/login.jpg"

import { useLittera } from "@assembless/react-littera";
import { registerTranslations } from "../localization/RegisterTranslation";

import { Form, Button } from 'react-bootstrap';


import validator from 'validator';

function Register({ onClick }) {

    const translated = useLittera(registerTranslations);

    const current = new Date().toISOString().split("T")[0];

    const [errorMessage, setErrorMessage] = useState('');

    const validateDate = (value) => {

        if (validator.isDate(value)) {
            setErrorMessage('')
        } else {
            setErrorMessage('Зазначте дату свого народження!')
        }
    }

    const formValidation = (value) => {
        const requiredFields = {};
        let isValid = true;
        if (!validator.isDate(value)) {
            requiredFields.label = `${translated.error}`;
        } else {
            requiredFields.label = '';
        }
        return isValid;
    }
    const [register, setRegister] = useState([]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const isFormValid = formValidation(); // boolean
        if (!isFormValid) {
            return;
        }
        // const defaultDate = Date(value) >= defaultValue;
        setRegister([...register]);
    }

    return (
        <div className="base-constructor" >
            <div className="header">{translated.header}</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login_img" />
                </div>
                <Form className="form" onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">{translated.username}</label>
                        <input type="text" name="username" placeholder="нікнейм" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{translated.email}</label>
                        <input type="email" name="email" placeholder="електронна пошта" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="d-bthday">{translated.bithday}</label>
                        <input type="date" name="birthdate" placeholder="оберіть дату народження"
                            defaultValue="2004-01-01" max={current}
                            onChange={(e) => validateDate(e.target.value)} required />
                        {errorMessage}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{translated.password}</label>
                        <input type="password" name="password" placeholder="пароль" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{translated.password}</label>
                        <input type="password" name="password" placeholder="підтвердження паролю" required />
                    </div>
                </Form>
            </div>
            <div className="footer">
                <Button type="buttton" className="btn">{translated.header}</Button>
            </div>
        </div>
    );
}

export {
    Register
}