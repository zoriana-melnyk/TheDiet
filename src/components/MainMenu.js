import React from 'react'

import { Container, Nav, NavDropdown } from 'react-bootstrap';

import './MainMenu.scss';

import auth_img from '../img/auth.png';
import { Link } from 'react-router-dom';


function MainMenu() {
    return (
        <Container id='NavContainer'>
            <Nav className="Navigation">
                <NavDropdown title="Меню" id='DropMenu'>
                    <Link to="/menu" className="DropItem" id='LinkItem'>Готове меню</Link>
                    <Link to="/create-menu" className="DropItem" id='LinkItem'>Створити меню</Link>
                    <Link to="/create-dish" className="DropItem" id='LinkItem'>Створити страву</Link>
                </NavDropdown>
                <Link className="DropItem" to="/directory" id='DropMenu'>Довідник</Link>
                <Link className="DropItem" to="/contact" id='DropMenu'>Контакти</Link>

                <NavDropdown title={<img src={auth_img} className="Auth-img" alt="auth_img" dropdown-toggle='display-none' />}>
                    <Link className="DropItem" to="/auth/login" id='LinkItem'>Увійти</Link>
                    <Link className="DropItem" to="/auth/register" id='LinkItem'>Зареєстуватися</Link>
                </NavDropdown>
            </Nav>
        </Container>
    );
}

export { MainMenu };