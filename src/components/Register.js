import React, { useState } from "react";
import login from "../img/login.jpg"

import { useLittera } from "@assembless/react-littera";
import { registerTranslations } from "../localization/RegisterTranslation";

import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { UserApi } from "../api/user.api";
import { useNavigate } from "react-router-dom";

const Register = ({ onClick }) => {
    const navigate = useNavigate();
    const translated = useLittera(registerTranslations);
    const [errorMessage, setErrorMessage] = useState({});
    const [, setIsValid] = useState(true);

    const formValidation = (values) => {
        const requiredFields = errorMessage;
        let isValid = true;

        // password validate
        if (values.password !== values.repassword) {
            isValid = false;
            requiredFields.password = 'Пароль не співпадає з підтвердженням';
        } else {
            delete requiredFields.password;
        }
        // birthdate validate
        const date = new Date(values.birthdate).getTime();
        const from = new Date("02/08/1960").getTime();
        const to = new Date().getTime();
        if(date <= from || date >= to) {
            isValid = false;
            requiredFields.birthdate = 'Помилкова дата'
        } else {
            delete requiredFields.birthdate;
        }

        return {
            isValid,
            requiredFields
        };
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const isFormValid = formValidation(formProps);

        if (!isFormValid.isValid) {
            // set validation results
            setErrorMessage(isFormValid.requiredFields);
            setIsValid(false);
            return;
        } else {
            setErrorMessage({});
            setIsValid(true);
        }
        try {
            const { data } = await UserApi.register(formProps);
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/');
            toast.success('Юзер успішно створений');
        } catch(e) {
            const { response: { data: { message, code } } } = e;
            if (code === 11000) {
                toast.error('Така пошта вже використовується іншим користувачем');
            } else {
                toast.error(message);
            }
        }
    }

    const ErrorMessage = ({ children }) => {
        return <span style={{ color: 'red', fontSize: 'small' }}>{children}</span>
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
                        <input
                            type="date"
                            name="birthdate"
                            placeholder="оберіть дату народження"
                            defaultValue="2004-01-01"
                            required
                        />
                        <ErrorMessage>{errorMessage.birthdate}</ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{translated.password}</label>
                        <input type="password" name="password" placeholder="пароль" required />
                        <ErrorMessage>{errorMessage.password}</ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{translated.password}</label>
                        <input type="password" name="repassword" placeholder="підтвердження паролю" required />
                        <ErrorMessage>{errorMessage.password}</ErrorMessage>
                    </div>
                    <div className="footer">
                        <Button type="submit" className="btn">{translated.header}</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export {
    Register
}