import React from 'react'
import './Home.scss';
import { Button } from 'react-bootstrap';
import { ArrowBarDown } from 'react-bootstrap-icons';

//myfile
import visionCard from '../../img/visionCard.jpg';
import cooperationCard from '../../img/cooperationCard.jpg';

function Home() {
    return (
        <div className="Home">
            <div className="Main-info p-4">
                <div className="Main-info-about About d-flex justify-content-between">
                    <img src={visionCard} className="Main-info-img VisionCard mr-4" alt="visionCard_img" />
                    <div className="Text-block">
                        <h5 className="Text-about-header">
                            Ласкаво просимо!
                        </h5>
                        <h6 className="Text-about text-light">
                            Цей сайт спростить вам розрахунок
                            калорійністі страви, яку ви хочете спожити,
                            допоможе сформувати правильне меню,
                            для дотримання рівноваги між енергією,
                            яка надходить з їжею та енергетичними затратами організму
                        </h6>
                    </div>
                </div>
                <div className="Cooperation d-flex justify-content-center">
                    <div className="Text-block">
                        <h6 className="Text-coop text-light">
                            Оберіть існуюче або створіть своє меню
                            і ми доставимо його Вам за допомогою Glovo чи Rocket Delivery
                        </h6>
                    </div>
                    <img src={cooperationCard} className="Main-info-img CooperationCard mr-4" alt="cooperationCard_img" />
                </div>
                <Button className="GoToMenu" href="#menu">Де та їжа?</Button>

            </div>
            <footer className="Footer my-4">
                <Button className="GoToFooter" onClick={e => {
                    window.scrollTo(750, 750)
                }}>
                    <ArrowBarDown />
                </Button>
            </footer>
        </div >
    );
}

export { Home };