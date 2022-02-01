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
                    <NavDropdown.Item className='DropItem'><Link to="/menu" id='LinkItem'>Готове меню</Link></NavDropdown.Item>
                    <NavDropdown.Item className='DropItem'><Link to="/create-menu" id='LinkItem'>Створити меню</Link></NavDropdown.Item>
                    <NavDropdown.Item className='DropItem'><Link to="/create-dish" id='LinkItem'>Створити страву</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav Dir-item"><Link to="/directory" id='DropMenu'>Довідник</Link></Nav.Link>
                <Nav.Link className="nav Contact-item" ><Link to="/contact" id='DropMenu'>Контакти</Link></Nav.Link>
                <NavDropdown
                    title={
                        <img src={auth_img} className="Auth-img" alt="auth_img" dropdown-toggle='display-none' />}>
                    <NavDropdown.Item className='DropItem'><Link to="/auth/login" id='LinkItem'>Увійти</Link></NavDropdown.Item>
                    <NavDropdown.Item className='DropItem'><Link to="/auth/register" id='LinkItem'>Зареєстуватися</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
    );
}

export { MainMenu };