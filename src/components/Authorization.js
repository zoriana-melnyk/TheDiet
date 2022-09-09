import React, { useState, useRef, forwardRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LogIn } from "./LogIn";
import { Register } from './Register';
import './Authorization.scss';

import { useLittera } from "@assembless/react-littera";
import { loginTranslations } from "../localization/LoginTranslation";
import { registerTranslations } from "../localization/RegisterTranslation";


const RightSide = forwardRef((props, ref) => {
    return <div className="right-side" onClick={props.onClick} ref={ref}>
        <h5 className="text">{props.selected}</h5>
    </div>
});

function Authorization() {
    const { type } = useParams();
    const isLogin = type === 'login'; // type === 'login' = true, type === 'register' = false
    const [authState, setAuthState] = useState({
        isLoginActive: isLogin,
    });
    const asideRef = useRef(null);

    const { isLoginActive } = authState;

    useEffect(() => {
        const { current } = asideRef;

        current.classList.add("right");
    }, []);

    const handleAsideClick = () => {
        setAuthState({
            isLoginActive: !isLoginActive
        })
    }

    useEffect(() => {
        const { current } = asideRef;
        if (isLoginActive) {
            current.classList.remove("right");
            current.classList.add("left");
        }
        else {
            current.classList.remove("left");
            current.classList.add("right");
        }

    }, [isLoginActive]);

    useEffect(() => {
        setAuthState({
            isLoginActive: isLogin
        })
    }, [isLogin]);

    const translate = useLittera(registerTranslations);
    const translated = useLittera(loginTranslations);

    return (
        <div className="Authorization">
            <div className="login">
                <div className="container">
                    {isLoginActive && (<LogIn />)}
                    {!isLoginActive && (<Register />)}
                </div>
                <RightSide
                    ref={asideRef}
                    selected={isLoginActive ? `${translate.header}` : `${translated.header}`}
                    onClick={handleAsideClick}
                />
            </div>
        </div>
    )
}

export { Authorization };
