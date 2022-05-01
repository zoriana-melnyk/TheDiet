import React from "react";

import './Contact.scss';
import socialIcon from '../img/svg_img/social.svg'
import mailIcon from '../img/svg_img/mail.svg'
import phoneIcon from '../img/svg_img/phone.svg'

import { Button } from 'react-bootstrap';

import { useLittera } from "@assembless/react-littera";
import { contactTranslations } from "../ContactTranslation";

function Contact() {

    const translated = useLittera(contactTranslations);

    const socialHandleClick = () => {
        window.open("https://t.me/theDietLife");
    };

    const mailHandleClick = () => {
        window.open('mailto:thedietlive@gmail.com');
    };

    const callHandleClick = () => {
        window.open('tel:900300400');
    };

    return (
        <div id="Contacts" className="Contacts">
            <div className="Contacts__info">
                <h1 className="Contacts__info__header p-2">
                    {translated.header}
                </h1>
            </div>
            <div className="Contacts__navContainer">
                <div className="Contacts__navContainer__contactsBlock social-media">
                    <div className="Contacts__navContainer__contactsBlock__infoBlock">
                        <h2 className="Contacts__navContainer__contactsBlock__infoBlock--text">
                            {translated.social}
                        </h2>
                        <img src={socialIcon} className="Contacts__navContainer__contactsBlock__infoBlock--img row mx-auto p-2" alt="socialIcon_img" />
                    </div>
                    <Button className="Contacts__navContainer__contactsBlock__navButton"
                        onClick={socialHandleClick}>
                        {translated.action}
                    </Button>
                </div>
                <div className="Contacts__navContainer__contactsBlock e-mail">
                    <div className="Contacts__navContainer__contactsBlock__infoBlock">
                        <h2 className="Contacts__navContainer__contactsBlock__infoBlock--text">
                            {translated.mail}
                        </h2>
                        <img src={mailIcon} className="Contacts__navContainer__contactsBlock__infoBlock--img row mx-auto p-2" alt="mailIcon_img" />
                    </div>
                    <Button className="Contacts__navContainer__contactsBlock__navButton"
                        onClick={mailHandleClick}>
                        {translated.action}
                    </Button>
                </div>
                <div className="Contacts__navContainer__contactsBlock phone">
                    <div className="Contacts__navContainer__contactsBlock__infoBlock">
                        <h2 className="Contacts__navContainer__contactsBlock__infoBlock--text">
                            {translated.phone}
                        </h2>
                        <img src={phoneIcon} className="Contacts__navContainer__contactsBlock__infoBlock--img row mx-auto p-2" alt="phoneIcon_img" />
                    </div>
                    <Button type="button" className="Contacts__navContainer__contactsBlock__navButton"
                        onClick={callHandleClick}>
                        {translated.action}
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { Contact };