import React from 'react'

import { Container, Nav, NavDropdown } from 'react-bootstrap';

import './MainMenu.scss';

import auth_img from '../img/auth.png';
import { Link } from 'react-router-dom';

import { useLittera } from "@assembless/react-littera";
import { headerTranslations } from "../localization/HeaderTranslation";

function MainMenu({ user, onLogout }) {
    const translated = useLittera(headerTranslations);

    return (
        <Container id='NavContainer'>
            <Nav className="Navigation">
                <NavDropdown className="Navigation--dropdown" title={translated.menu} id='DropMenu'>
                    <Link to="/menu" className="DropItem" id='LinkItem'>{translated.UserMenu}</Link>
                    {
                        user?.email
                            ? <>
                                <Link to="/create-menu" className="DropItem" id='LinkItem'>{translated.crMenu}</Link>
                                <Link to="/create-dish" className="DropItem" id='LinkItem'>{translated.crDish}</Link>
                            </>
                            : null
                    }
                </NavDropdown>
                <Link to="/directory" id='DropMenu'>{translated.directory}</Link>
                <Link to="/contact" id='DropMenu'>{translated.contact}</Link>

                {user?.email
                    ? <NavDropdown
                        title={<div className="user-info">
                            <img src={auth_img} alt="userPhoto" width="35px" height="35px" />
                            <h5>{user.username}</h5>
                        </div>}
                    >
                        <div className="DropItem" onClick={onLogout}>Вийти</div>
                    </NavDropdown>
                    : <NavDropdown title={<img src={auth_img} className="Auth-img" alt="auth_img" dropdown-toggle='display-none' />}>
                        <Link className="DropItem" to="/auth/login" id='LinkItem'>{translated.login}</Link>
                        <Link className="DropItem" to="/auth/register" id='LinkItem'>{translated.register}</Link>
                    </NavDropdown>
                }
            </Nav>
        </Container >
    );
}

export { MainMenu };