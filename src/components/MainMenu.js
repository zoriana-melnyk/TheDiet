import React from 'react'

import { Container, Nav, NavDropdown } from 'react-bootstrap';

import './MainMenu.scss';

function MainMenu() {
    return (
        <Container id='NavContainer'>
            <Nav className="Navigation">
                <Nav.Link className="nav Nav-item" href="/">Головна</Nav.Link>
                {/* <Nav.Link className="nav Menu-item" href="/menu">Меню</Nav.Link> */}
                <NavDropdown title="Меню" id="DropMenu">
                    <NavDropdown.Item href="/create-menu" className='CrMenu'>Створити меню</NavDropdown.Item>
                    <NavDropdown.Item href="create-dish" className='CrDish'>Створити страву</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav Dir-item" href="/directory">Довідник</Nav.Link>
                <Nav.Link className="nav Contact-item" href="/contact">Контакти</Nav.Link>
            </Nav>
        </Container>
    );
}

export { MainMenu };