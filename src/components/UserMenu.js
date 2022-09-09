import React from "react";

import './UserMenu.scss';
import sportIcon from '../img/svg_img/sport.svg'
import dietIcon from '../img/svg_img/diet.svg'
import kidsIcon from '../img/svg_img/kids.svg'
import myMenuIcon from '../img/svg_img/myMenu.svg'

import { Button } from 'react-bootstrap';

import { useLittera } from "@assembless/react-littera";
import { userMenuTranslations } from "../localization/UserMenuTranslation";

function UserMenu() {

    const translated = useLittera(userMenuTranslations);

    return (
        <div className="Main-container">
            <div className="Info-row">
                <h3 className="Text-header p-2">
                    {translated.header}
                </h3>
                <h4 className="Text-container">
                    {translated.paragraph}
                </h4>
            </div>
            <div className="Nav-container">
                <div className="Nav-container-column">
                    <div className="Nav-container-column-row">
                        <Button className="NavButton sport-menu" href="/sport-menu">
                            {translated.SportMenu}
                            <img src={sportIcon} className="Nav-container-img sportIcon row mx-auto p-2" alt="sportIcon_img" />
                        </Button>
                        <Button className="NavButton diet-menu" href="/diet-menu">
                            {translated.DietMenu}
                            <img src={dietIcon} className="Nav-container-img dietIcon row mx-auto p-2" alt="dietIcon_img" />
                        </Button>
                    </div>
                    <div className="Nav-container-column-row">
                        <Button className="NavButton kids-menu" href="/children-menu">
                            {translated.ChildrenMenu}
                            <img src={kidsIcon} className="Nav-container-img kidsIcon row mx-auto p-2" alt="kidsIcon_img" />
                        </Button>
                        <Button className="NavButton my-menu" href="/create-menu">
                            {translated.MyMenu}
                            <img src={myMenuIcon} className="Nav-container-img myMenuIcon row mx-auto p-2" alt="myMenuIcon_img" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { UserMenu };