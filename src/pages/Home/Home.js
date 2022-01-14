import React from 'react'
import './Home.scss';

import { Background } from '../../components/Background';

import { Button } from 'react-bootstrap';
// import { ArrowBarDown } from 'react-bootstrap-icons';

function Home() {
    return (
        <div className="Home">
            <Background />
            <div className="Main-info">
                <div className="Main-info-about About d-flex justify-content-between">
                    <div className="Text-block">
                        <h1 className="Text-slogan">
                            Здорове харчування - це круто та легко
                        </h1>
                    </div>
                </div>
                {/* <div className="Cooperation d-flex justify-content-center">
                    <div className="Text-block">
                        <h6 className="Text-coop text-light">
                            Оберіть існуюче або створіть своє меню
                            і ми доставимо його Вам за допомогою Glovo чи Rocket Delivery
                        </h6>
                    </div>
                    <img src={cooperationCard} className="Main-info-img CooperationCard mr-4" alt="cooperationCard_img" />
                </div> */}
                <Button className="GoToMenu" href="#menu">Перевірити</Button>
            </div>

            {/* <footer className="Footer my-4">
                <Button className="GoToFooter" onClick={e => {
                    window.scrollTo(750, 750)
                }}>
                    <ArrowBarDown />
                </Button>
            </footer> */}
        </div >
    );
}

export { Home };