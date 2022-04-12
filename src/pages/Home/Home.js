// import React, { useEffect } from 'react'
import './Home.scss';

import { Background } from '../../components/Background';

import { Button } from 'react-bootstrap';

import { useLittera } from "@assembless/react-littera";
import { homeTranslations } from "../../HomeTranslation";

function Home() {
    // componentDidMount
    // useEffect(() => {
    //     fetch('http://localhost:3001/users').then(res => res.json()).then(users => {
    //         console.log(users)
    //     })
    // }, [])
    const translated = useLittera(homeTranslations);

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
                        </h2>
                        <h3 className='Text-slogan'>
                            {translated.motto}
                        </h3>
                    </div>
                </div>
                <Button className="GoToMenu" href="/menu">{translated.button}</Button>
            </div>
        </div >
    );
}

export { Home };