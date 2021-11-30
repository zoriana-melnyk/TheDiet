import React from 'react'
import './Footer.scss';
import { Button } from 'react-bootstrap';
import { ArrowBarUp } from 'react-bootstrap-icons';

import Man from '../img/man.png';
import Woman from '../img/woman.png';
import Boy from '../img/boy.png';
import MoslemWoman from '../img/moslem-woman.png';

function Footer() {
    return (
        <div className="Footer">
            <footer className="Footer-block">
                <h3 className="Text-reviews-header p-5">
                    Відгуки наших клієнтів
                </h3>
                <div className="Reviews-container p-4">
                    <img src={Man} className="Reviews-container-img Man mr-4" alt="man_img" />
                    <h4 className="Reviews-container-header">
                        Чудовий сервіс! Дуже зручний функціонал.
                    </h4>
                </div>
                <div className="Reviews-container p-4">
                    <h4 className="Reviews-container-header">
                        Клас! Це саме той сайт, що я так довго шукала.
                        Дуже зручно розраховувати калорійність готових страв та складати денний раціон.
                    </h4>
                    <img src={Woman} className="Reviews-container-img Woman mr-4" alt="woman_img" />
                </div>
                <div className="Reviews-container p-4">
                    <img src={Boy} className="Reviews-container-img Boy mr-4" alt="boy_img" />

                    <h4 className="Reviews-container-header">
                        Сайт зручний, але мінус у тому, що потрібно зареєструватися для того,
                        щоб зберегти створене меню або страву
                    </h4>
                </div>
                <div className="Reviews-container p-4">
                    <h4 className="Reviews-container-header">
                        Все добре. Можна легко створити страву та меню. З доставкою  є нюанси.
                        Та, сайт зручний у користування
                    </h4>
                    <img src={MoslemWoman} className="Reviews-container-img Moslem-woman mr-4" alt="moslem-woman_img" />
                </div>
            </footer>
            <div className="FooterButton my-3">
                <Button className="GoToUp" onClick={e => {
                    window.scrollTo({ top: 0 })
                }}>
                    <ArrowBarUp />
                </Button>
            </div>
        </div>
    );
}

export {
    Footer
}
