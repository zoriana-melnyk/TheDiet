import React from 'react'

import { Container, Nav, NavDropdown } from 'react-bootstrap';

import './MainMenu.scss';

import auth_img from '../img/auth.png';
import { Link } from 'react-router-dom';


import { useLittera } from "@assembless/react-littera";
import { headerTranslations } from "../languages";

function MainMenu() {

    const translated = useLittera(headerTranslations);

    return (
        <Container id='NavContainer'>
            <Nav className="Navigation">
                <NavDropdown title={translated.menu} id='DropMenu'>
                    <Link to="/menu" className="DropItem" id='LinkItem'>{translated.UserMenu}</Link>
                    <Link to="/create-menu" className="DropItem" id='LinkItem'>{translated.crMenu}</Link>
                    <Link to="/create-dish" className="DropItem" id='LinkItem'>{translated.crDish}</Link>
                </NavDropdown>
                <Link className="DropItem" to="/directory" id='DropMenu'>{translated.directory}</Link>
                <Link className="DropItem" to="/contact" id='DropMenu'>{translated.contact}</Link>

                <NavDropdown title={<img src={auth_img} className="Auth-img" alt="auth_img" dropdown-toggle='display-none' />}>
                    <Link className="DropItem" to="/auth/login" id='LinkItem'>{translated.login}</Link>
                    <Link className="DropItem" to="/auth/register" id='LinkItem'>{translated.register}</Link>
                </NavDropdown>
            </Nav>
        </Container>
    );
}

export { MainMenu };