// import React, { useEffect } from 'react'
import './Home.scss';

import { Background } from '../../components/Background';

import { Button } from 'react-bootstrap';

import { useLittera } from "@assembless/react-littera";
import { translations } from "../../languages";

function Home() {
    // componentDidMount
    // useEffect(() => {
    //     fetch('http://localhost:3001/users').then(res => res.json()).then(users => {
    //         console.log(users)
    //     })
    // }, [])
    const translated = useLittera(translations);

    return (
        <div className="Home">
            <Background />
            <div className="Main-info">
                <div className="Main-info-about About d-flex justify-content-between">
                    <div className="Text-block">
                        <h1 className="Text-header">
                            {translated.header}
                        </h1>

                        <h2 className="Text-info">{translated.paragraph}
                            {/* Ні для кого не секрет, що запорукою хорошого самопочуття є здорове тіло,<br />
                            а для цього необхідно дотримуватися збалансованого раціону харчування */}
                        </h2>
                        <h3 className='Text-slogan'>
                            {translated.motto}
                        </h3>
                    </div>
                </div>
                <Button className="GoToMenu" href="/menu">Вже біжу</Button>
            </div>
        </div >
    );
}

export { Home };