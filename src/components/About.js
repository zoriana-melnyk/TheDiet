import React from 'react'
import './About.scss';

import VisionCard from '../img/visionCard.jpg';
import cooperationCard from '../img/cooperationCard.jpg';

import { Button } from 'react-bootstrap';

function About() {
    return (
        <div className="Footer-about">
            <footer className="Info-block">
                <div className="About-container p-4">
                    <div className="About-container-row">
                        <h3 className="Text-about-header p-4">
                            Ласкаво просимо!
                        </h3>
                        <h4 className="About-container-text">
                            Цей сайт спростить вам розрахунок
                            калорійністі страви, яку ви хочете спожити, допоможе сформувати правильне меню,
                            для дотримання рівноваги між енергією, яка надходить з їжею та енергетичними затратами організму
                        </h4>
                    </div>
                    <img src={VisionCard} className="About-container-img VisionCard mr-4" alt="visionCard_img" />
                </div>

                <div className="Cooperation-container p-4">
                    <h3 className="Text-cooperation-header">
                        Бажаєте замовити нашу продукцію?
                    </h3>
                    <div className="Cooperation-container-colum p-4">
                        <img src={cooperationCard} className="Cooperation-container-img cooperationCard mr-4" alt="cooperationCard_img" />
                        <h4 className="Cooperation-container-text p-4">
                            Оберіть існуюче або створіть своє меню
                            і ми доставимо його Вам за допомогою Glovo чи Rocket Delivery
                        </h4>
                    </div>
                    <Button className="GoToContact" href="/contact">Замовити</Button>
                </div>
            </footer>
        </div>
    );
}

export {
    About
}