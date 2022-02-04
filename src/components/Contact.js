import React from "react";

import './Contact.scss';
import socialIcon from '../img/svg_img/social.svg'
import mailIcon from '../img/svg_img/mail.svg'
import phoneIcon from '../img/svg_img/phone.svg'


import { Button } from 'react-bootstrap';

function Contact() {
    return (
        <div id="Contacts" className="Contacts">
            <div className="Contacts__info">
                <h1 className="Contacts__info__header p-2">
                    Контакти
                </h1>
            </div>
            <div className="Contacts__navContainer">
                <div className="Contacts__navContainer__contactsBlock social-media">
                    <div className="Contacts__navContainer__contactsBlock__infoBlock">
                        <h2 className="Contacts__navContainer__contactsBlock__infoBlock--text">
                            Ми - в соцмережах
                        </h2>
                        <img src={socialIcon} className="Contacts__navContainer__contactsBlock__infoBlock--img row mx-auto p-2" alt="socialIcon_img" />
                    </div>
                    <Button className="Contacts__navContainer__contactsBlock__navButton">
                        Звʼязатися
                    </Button>
                </div>
                <div className="Contacts__navContainer__contactsBlock e-mail">
                    <div className="Contacts__navContainer__contactsBlock__infoBlock">
                        <h2 className="Contacts__navContainer__contactsBlock__infoBlock--text">
                            Наша електронна скринька
                        </h2>
                        <img src={mailIcon} className="Contacts__navContainer__contactsBlock__infoBlock--img row mx-auto p-2" alt="mailIcon_img" />
                    </div>
                    <Button className="Contacts__navContainer__contactsBlock__navButton">
                        Звʼязатися
                    </Button>
                </div>
                <div className="Contacts__navContainer__contactsBlock phone">
                    <div className="Contacts__navContainer__contactsBlock__infoBlock">
                        <h2 className="Contacts__navContainer__contactsBlock__infoBlock--text">
                            Бажаєте зателефонувати?
                        </h2>
                        <img src={phoneIcon} className="Contacts__navContainer__contactsBlock__infoBlock--img row mx-auto p-2" alt="phoneIcon_img" />
                    </div>
                    <Button type="button" className="Contacts__navContainer__contactsBlock__navButton">
                        Звʼязатися
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { Contact };