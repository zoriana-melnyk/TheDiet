import React from 'react'
import './DietMenu.scss';

import { Table } from 'react-bootstrap';

function DietMenu() {

    return (
        <div className="DietMenu">
            <div className="DietMenu__block">
                <div className="DietMenu__block__infoBlock">
                    <h1 className="DietMenu__block__infoBlock__header p-2">
                        Дієтичне меню на кожен день
                    </h1>
                </div>
                <div className="DietMenu__block__menu">
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header">
                            День перший
                        </h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1475 ккал
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Омлет з цвітною капустою та зеленню — 250 г<br />
                                    Хліб зерновий — 50 г<br />
                                    Гранат — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Яблука, запечені з сиром і родзинками — 150 г/ 50 г/10 г
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Каша гречана — 150 г<br />
                                    Буряк зі сметаною — 130/20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Морська капуста — 100 г<br />
                                    Печена картопля — 150 г<br />
                                    Риба відварна — 150 г
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>Закваска кисломолочна — 200 мл<br />
                                    Відвар шипшини — 500 мл<br />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header mt-2">
                            День другий
                        </h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1400 ккал
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Пластівці зернові — 45 г<br />
                                    Йогурт 1% — 200 г<br />
                                    Сухофрукти (родзинки) — 10 г<br />
                                    Горіхи  — 15 г<br />
                                    Апельсин — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Яблука печені з корицею — 200 г<br />
                                    Борщ пісний зі сметаною — 300/10 г<br />
                                    Помідор зі сметаною – 100/10 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Борщ пісний зі сметаною — 300/10 г<br />
                                    Помідор зі сметаною – 100/10 г<br />
                                    Яйця — 80 г<br />
                                    Хліб зерновий — 20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Лосось, запечений із зеленню — 150 г<br />
                                    Салат овочевий — 240 г<br />
                                    Хліб зерновий — 30 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>Закваска кисломолочна — 200 мл<br />
                                    Компот з яблук, без цукру — 500  мл.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header">
                            День третій</h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1489 ккал.
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Пластівці зернові — 200 г<br />
                                    Фрукти (можна заморожені) — 50 г<br />
                                    Закваска кисломолочна — 200 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Сир зі сметаною — 80/20 г<br />
                                    Сухофрукти (родзинки) — 10 г<br />
                                    Гранат — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Квасоля, тушкована з овочами — 240 г<br />
                                    Салат зі свіжих овочів — 160 г<br />
                                    Сир фета — 20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Квасоля, тушкована з овочами — 240 г<br />
                                    Салат зі свіжих овочів — 160 г<br />
                                    Сир фета — 20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>Кефір — 200 мл<br />
                                    Яблуко — 200 г<br />
                                    Відвар шипшини — 500 мл.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header">
                            День четвертий</h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1389 ккал.
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Ікра із запечених кабачків і баклажанів — 150 г<br />
                                    Омлет з двох яєць із зеленню<br />
                                    Хліб зерновий — 30 г<br />
                                    Ківі — 2 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Яблука печені — 200 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Салат зі свіжих овочів — 200 г<br />
                                    Каша гречана — 155 г<br />
                                    Тушкована індичка — 120 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Капуста тушкована з грибами — 250 г<br />
                                    Печена картопля з часниковим соусом — 150 г<br />
                                    Сир фета — 30 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>Закваска кисломолочна — 200 мл<br />
                                    Яблуко — 200 г<br />
                                    Відвар шипшини — 500 мл.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header">
                            День пʼятий</h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1349 ккал.
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Пластівці зернові — 45 г<br />
                                    Кефір — 200 г<br />
                                    Апельсин — 100 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Сир зі сметаною — 80 г/20 г<br />
                                    Ягоди (полуниця, вишня, можна заморожені) — 50 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Суп овочевий— 300 г<br />
                                    Індичка тушкована — 100 г<br />
                                    Буряк зі сметаною — 130 г/20 г<br />
                                    Хліб зерновий — 20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Суп овочевий— 300 г<br />
                                    Індичка тушкована — 100 г<br />
                                    Буряк зі сметаною — 130 г/20 г<br />
                                    Хліб зерновий — 20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>Закваска кисломолочна — 200 мл<br />
                                    Яблуко — 200 г<br />
                                    Компот із сухофруктів — 500 мл.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header">
                            День шостий</h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1312 ккал.
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Пластівці зернові — 45 г<br />
                                    Йогурт 1% — 200 г<br />
                                    Грейпфрут — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Яблука, запечені з сиром та родзинками — 150 г/50 г/10 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Суп овочевий з цвітною капустою — 300 г<br />
                                    Салат зі свіжих овочів — 200 г<br />
                                    Телятина тушкована — 100 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Каша гречана — 150 г<br />
                                    Капуста тушкована з грибами — 200 г<br />
                                    Варене яйце — 40 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>Закваска кисломолочна — 200 мл<br />
                                    Компот із сухофруктів — 500  мл.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="DietMenu__block__menu__info">
                        <h2 className="DietMenu__block__menu__info__header">
                            День сьомий</h2>
                        <p className="DietMenu__block__menu__info__discription">
                            Загальна енергетична цінність раціону 1408 ккал.
                        </p>
                    </div>
                    <Table bordered className="DietMenu__block__menu__table">
                        <tbody className="DietMenu__block__menu__table__body">
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Пластівці зернові — 45 г<br />
                                    Кефір — 200 мл<br />
                                    Горіхи — 15 г<br />
                                    Родзинки — 10 г<br />
                                    Ківі — 2 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Сир зі сметаною — 80 г/20 г<br />
                                    Ягоди (полуниця, вишня, можна заморожені) — 50 г<br />
                                    Чорнослив — 25 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Обід</th>
                                <td>Сир зі сметаною — 80 г/20 г<br />
                                    Ягоди (полуниця, вишня, можна заморожені) — 50 г<br />
                                    Чорнослив — 25 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Овочева нарізка — 220 г<br />
                                    Лосось, запечений з зеленню — 150 г<br />
                                    Хліб зерновий — 20 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="DietMenu__block__menu__table__body__head">Протягом дня</th>
                                <td>
                                    Закваска кисломолочна — 200 мл<br />
                                    Компот з яблук — 500  мл.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
}

export { DietMenu }