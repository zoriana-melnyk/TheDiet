import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'

import logo from '../img/logo.png';
import menuButton from '../img/list.svg';
import closeMenuButton from '../img/close.svg';
import userPhoto from '../img/user.png'
import sticker from '../img/sticker.png'

import './Header.scss';
import { MainMenu } from './MainMenu';

import useResizeObserver from '@react-hook/resize-observer'

import { useLitteraMethods } from "@assembless/react-littera";
import { useLittera } from "@assembless/react-littera";
import { headerTranslations } from "../HeaderTranslation";

import Select from 'react-select';

const languageOptions = [{
    label: '🇺🇦',
    value: 'uk_UA'
}, {
    label: '🇬🇧',
    value: 'en_US'
},
{
    label: '🇵🇱',
    value: 'pl_PL'
},
{
    label: '🇩🇪',
    value: 'de_DE'
}
]

const customStyles = {
    option: (provided, state) => ({
        backgroundColor: '#363636'
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#363636',
        border: 'none'
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#363636'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    }
}

const useSize = (target) => {
    const [size, setSize] = React.useState()

    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    // Where the magic happens
    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const target = React.useRef(null)
    const size = useSize(target)

    const methods = useLitteraMethods();

    const handleLocaleChange = (languageOption) => {
        methods.setLocale(languageOption.value);
    }

    const translated = useLittera(headerTranslations);

    return (
        <header className="App-header" ref={target}>
            <Navbar className="App-navbar">
                <Container>
                    <Link to="/" className='navbar-brand'>
                        <img src={logo} className="App-logo" alt="logo_img" />
                    </Link>
                    {
                        size?.width < 992
                            ? <Menu
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
                                    <Link id="login" className="Login" to={'/auth/login'}>{translated.login}</Link>
                                    <Link id="signIn" className="SignIn" to={'/auth/register'}>{translated.register}</Link>
                                    <img className="close-button" onClick={() => setIsMenuOpen(false)} src={closeMenuButton} alt="closeMenu_img" />
                                </div>
                                <div className="routes">

                                    <Link id="home" className="Nav-item" to="/">{translated.home}</Link>
                                    <Link id="menu" className="Nav-item" to="/menu">{translated.UserMenu}</Link>
                                    <ul>
                                        <li className="List-menu">
                                            <Link id="cdMenu" className="CdMenu-item" to="/created-menu">{translated.crMenu}</Link>
                                        </li>
                                        <li className="List-menu">
                                            <Link id="crDish" className="CrDish-item" to="/create-dish">{translated.crDish}</Link>
                                        </li>
                                    </ul>
                                    <Link id="directory" className="Dir-item" to="/directory">{translated.directory}</Link>
                                    <Link id="contact" className="Contact-item" to="/contact">{translated.contact}</Link>
                                </div>
                                <Select
                                    className="Footer__langOptions"
                                    // placeholder="Змінити мову"
                                    defaultValue={languageOptions[0]}
                                    onChange={handleLocaleChange}
                                    options={languageOptions}
                                    isSearchable={false}
                                    styles={customStyles}
                                />
                                <footer >
                                    <img src={sticker} className="Sticker" alt="sticker_img" />
                                </footer>

                            </Menu>
                            : <> <MainMenu />
                                <Select
                                    className="Footer__langOptions"
                                    defaultValue={languageOptions[0]}
                                    onChange={handleLocaleChange}
                                    options={languageOptions}
                                    isSearchable={false}
                                    styles={customStyles}
                                /></>
                    }
                </Container>
            </Navbar>
        </header >
    );
}

export {
    Header
}
