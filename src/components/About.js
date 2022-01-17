import React from 'react'
import './About.scss';

import VisionCard from '../img/visionCard.jpg';
import cooperationCard from '../img/cooperationCard.jpg';


function About() {
    return (
        <div className="Footer">
            <footer className="Info-block">
                <div className="About-container p-4">
                    <h3 className="Text-about-header p-5">
                        Ласкаво просимо!
                    </h3>
                    <img src={VisionCard} className="About-container-img VisionCard mr-4" alt="visionCard_img" />
                    <h4 className="About-container-text">
                        Цей сайт спростить вам розрахунок
                        калорійністі страви, яку ви хочете спожити, допоможе сформувати правильне меню,
                        для дотримання рівноваги між енергією, яка надходить з їжею та енергетичними затратами організму
                    </h4>
                </div>
                <div className="Cooperation-container p-4">
                    <h4 className="Cooperation-container-text">
                        Оберіть існуюче або створіть своє меню
                        і ми доставимо його Вам за допомогою Glovo чи Rocket Delivery
                    </h4>
                    <img src={cooperationCard} className="Cooperation-container-img cooperationCard mr-4" alt="cooperationCard_img" />
                </div>
            </footer>
        </div>
    );
}

export {
    About
}