import React from "react";

import './UserMenu.scss';
import sportIcon from '../img/svg_img/sport.svg'
import dietIcon from '../img/svg_img/diet.svg'
import kidsIcon from '../img/svg_img/kids.svg'
import myMenuIcon from '../img/svg_img/myMenu.svg'


import { Button } from 'react-bootstrap';

function UserMenu() {
    return (
        <div className="Main-container">
            <div className="Info-row">
                <h3 className="Text-header p-2">
                    Готове меню
                </h3>
                <h4 className="Text-container">
                    Оберіть меню розроблене нашими дієтологами або створене вами
                </h4>
            </div>
            <div className="Nav-container">
                <div className="Nav-container-colum p-5">
                    <Button className="NavButton sport-menu">
                        Меню для спорцменів
                        <img src={sportIcon} className="Nav-container-img sportIcon row mx-auto p-2" alt="sportIcon_img" />
                    </Button>
                    <Button className="NavButton diet-menu">
                        Дієтичне меню
                        <img src={dietIcon} className="Nav-container-img dietIcon row mx-auto p-2" alt="dietIcon_img" />
                    </Button>
                </div>
                <div className="Nav-conteiner-row p-5">
                    <Button className="NavButton kids-menu">
                        Дитяче меню
                        <img src={kidsIcon} className="Nav-container-img kidsIcon row mx-auto p-2" alt="kidsIcon_img" />
                    </Button>
                    <Button className="NavButton my-menu">
                        Моє меню
                        <img src={myMenuIcon} className="Nav-container-img myMenuIcon row mx-auto p-2" alt="myMenuIcon_img" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { UserMenu };