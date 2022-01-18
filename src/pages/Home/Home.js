import React from 'react'
import './Home.scss';

import { Background } from '../../components/Background';

import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div className="Home">
            <Background />
            <div className="Main-info">
                <div className="Main-info-about About d-flex justify-content-between">
                    <div className="Text-block">
                        <h1 className="Text-header">
                            "У здоровому тілі - здоровий дух"
                        </h1>
                        <h2 className="Text-info">
                            Ні для кого не секрет, що запорукою хорошого самопочуття є здорове тіло,<br />
                            а для цього необхідно дотримуватися збалансованого раціону харчування
                        </h2>
                        <h3 className='Text-slogan'>
                            Свори вже сьогодні свій раціон!
                        </h3>
                    </div>
                </div>
                <Button className="GoToMenu" href="/menu">Вже біжу</Button>
            </div>
        </div >
    );
}

export { Home };