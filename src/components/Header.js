import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'

import logo from '../img/logo.png';
import menuButton from '../img/list.svg';
import closeMenuButton from '../img/close.svg';
import userPhoto from '../img/user.png'
import sticker from '../img/sticker.png'

import './Header.scss';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="App-header">
            <Navbar className="App-navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="App-logo" alt="logo_img" />
                    </Navbar.Brand>
                    <Menu
                        right
                        customCrossIcon={<></>}
                        isOpen={isMenuOpen}
                        onOpen={() => setIsMenuOpen(true)}
                        onClose={() => setIsMenuOpen(false)}
                        width={500}
                        customBurgerIcon={<img src={menuButton} alt="menu_img" />}
                    >
                        <div className="user-ifo">
                            <img src={userPhoto} alt="userPhoto" width="35px" height="35px" />
                            <NavLink id="login" className="Login" to={'/auth/login'}>Увійти</NavLink>
                            <NavLink id="signIn" className="SignIn" to={'/auth/register'}>Зареєстуватися</NavLink>
                            <img className="close-button" onClick={() => setIsMenuOpen(false)} src={closeMenuButton} alt="closeMenu_img" />
                        </div>
                        <div className="routes">
                            <a id="home" className="Nav-item" href="/">Головна</a>
                            <a id="menu" className="Menu-item" href="/Menu">Готове меню</a>
                            <ul>
                                <li className="List-menu">
                                    <a id="cdMenu" className="CdMenu-item" href="/createdMenu">Створити меню</a>
                                </li>
                                <li className="List-menu">
                                    <a id="crDish" className="CrDish-item" href="/createDish">Створити страву</a>
                                </li>
                            </ul>
                            <a id="directory" className="Dir-item" href="/directory">Довідник</a>
                            <a id="contact" className="Contact-item" href="/contact">Контакти</a>
                        </div>
                        <footer >
                            <img src={sticker} className="Sticker" alt="sticker_img" />
                        </footer>
                    </Menu>
                </Container>
            </Navbar>
        </header >
    );
}

export {
    Header
}
