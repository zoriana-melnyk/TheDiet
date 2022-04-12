import React from 'react'
import './About.scss';

import VisionCard from '../img/visionCard.jpg';
import cooperationCard from '../img/cooperationCard.jpg';

import { Button } from 'react-bootstrap';

import { useLittera } from "@assembless/react-littera";
import { aboutTranslations } from "../AboutTranslation";

function About() {

    const translated = useLittera(aboutTranslations);

    return (
        <div className="Footer-about">
            <footer className="Info-block">
                <div className="About-container p-4">
                    <div className="About-container-row">
                        <h3 className="Text-about-header p-4">
                            {translated.header}
                        </h3>
                        <h4 className="About-container-text">
                            {translated.about}
                        </h4>
                    </div>
                    <img src={VisionCard} className="About-container-img VisionCard mr-4" alt="visionCard_img" />
                </div>

                <div className="Cooperation-container p-4">
                    <h3 className="Text-cooperation-header">
                        {translated.delivery}
                    </h3>
                    <div className="Cooperation-container-colum p-4">
                        <img src={cooperationCard} className="Cooperation-container-img cooperationCard mr-4" alt="cooperationCard_img" />
                        <h4 className="Cooperation-container-text p-4">
                            {translated.info}
                        </h4>
                    </div>
                    <Button className="GoToContact" href="/contact">{translated.button}</Button>
                </div>
            </footer>
        </div>
    );
}

export {
    About
}