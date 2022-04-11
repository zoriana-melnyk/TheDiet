import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
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
import Select from 'react-select';

// const languageOptions = [{
//     label: 'Українська',
//     value: 'uk_UA'
// }, {
//     label: 'English',
//     value: 'en_US'
// },
// {
//     label: 'Polish',
//     value: 'pl_PL'
// },
// {
//     label: 'German',
//     value: 'de_DE'
// }
// ]
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
        // console.log(languageOption);
        methods.setLocale(languageOption.value);
    }

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
                                    <NavLink id="login" className="Login" to={'/auth/login'}>Увійти</NavLink>
                                    <NavLink id="signIn" className="SignIn" to={'/auth/register'}>Зареєстуватися</NavLink>
                                    <img className="close-button" onClick={() => setIsMenuOpen(false)} src={closeMenuButton} alt="closeMenu_img" />
                                </div>
                                <div className="routes">

                                    <a id="home" className="Nav-item" href="/">Головна</a>
                                    <a id="menu" className="Nav-item" href="/menu">Готове меню</a>
                                    <ul>
                                        <li className="List-menu">
                                            <a id="cdMenu" className="CdMenu-item" href="/created-menu">Створити меню</a>
                                        </li>
                                        <li className="List-menu">
                                            <a id="crDish" className="CrDish-item" href="/create-dish">Створити страву</a>
                                        </li>
                                    </ul>
                                    <a id="directory" className="Dir-item" href="/directory">Довідник</a>
                                    <a id="contact" className="Contact-item" href="/contact">Контакти</a>
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
