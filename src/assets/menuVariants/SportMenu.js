import React from 'react'
import './SportMenu.scss';

import { Table } from 'react-bootstrap';

function SportMenu() {

    return (
        <div className="SportMenu">
            <div className="SportMenu__block">
                <div className="SportMenu__block__infoBlock">
                    <h1 className="SportMenu__block__infoBlock__header p-2">
                        Раціони харчування для спортсменів
                    </h1>
                </div>
                <div className="SportMenu__block__menu">
                    <div className="SportMenu__block__menu__info">
                        <h2 className="SportMenu__block__menu__info__header">
                            Раціон харчування для культуристів та спортсменів силових видів спорту</h2>
                        <p className="SportMenu__block__menu__info__discription">
                            Запропонований раціон передбачає 6-разове харчування<br />
                            із загальною калорійністю 3500 ккал/добу.
                        </p>
                    </div>
                    <Table bordered className="SportMenu__block__menu__table">
                        <tbody className="SportMenu__block__menu__table__body">
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Білок — 4 шт<br />
                                    Жовток — 1 шт<br />
                                    Вівсянка — 150 г<br />
                                    Підсмажений хліб — 2 шматочки<br />
                                    Апельсин — 1 шт<br />
                                    Полівітаміни та мінеральні речовини — 1 таблетка.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Другий сніданок</th>
                                <td>Протеїн зі знежиреним молоком — 1 порція<br />
                                    Банан — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Обід</th>
                                <td>Індичка або куряча грудка — 150 г<br />
                                    Рис — 100 г<br />
                                    Варена картопля — 100 г<br />
                                    Різні овочі — 100 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Підвечірок</th>
                                <td>Протеїн зі знежиреним молоком — 1 порція<br />
                                    Банан — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Пісна яловичина — 200 г<br />
                                    Варена картопля — 300 г<br />
                                    Різні овочі — 100 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Перед сном (за 1,5 год)</th>
                                <td>Вівсянка — 150 г<br />
                                    Білок — 4 шт<br />
                                    Жовток — 1 шт.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="SportMenu__block__menu__info">
                        <h2 className="SportMenu__block__menu__info__header mt-2">
                            Раціон харчування для видів спорту зі значними анаеробними навантаженнями</h2>
                        <p className="SportMenu__block__menu__info__discription">
                            Загальна калорійність становить 2378 ккал.</p>
                    </div>
                    <Table bordered className="SportMenu__block__menu__table">
                        <tbody className="SportMenu__block__menu__table__body">
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Ранковий перекус</th>
                                <td>Грейпфрут — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Варена куряча грудка — 1 шт<br />
                                    Варена картопля (без масла і сметани) — 1 шт<br />
                                    Зелені боби — 1 тарілка<br />
                                    Варена морква — 2 шт<br />
                                    Фруктовий салат (без цукру) — 1 тарілка.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Обід</th>
                                <td>Вівсянка із дробленого зерна — 1 тарілка<br />
                                    Горіхи — 1 ст.л.<br />
                                    Родзинки — 1 ст.л.<br />
                                    Цільне молоко — 1,5 склянки<br />
                                    Яблуко — 1 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Підвечірок</th>
                                <td>Сир чеддер — 30 г<br />
                                    Несолоний арахіс або інші горіхи — 60 г.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Сендвіч із цільної пшениці з 2 яйцями без масла<br />
                                    Змішаний салат із лимонним соком — 1 тарілка<br />
                                    Апельсин — 1 шт<br />
                                    Йогурт — 1 склянка.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Вечірній перекус</th>
                                <td>Булочка з маком — 1 шт<br />
                                    Цільне молоко — 1,5 склянки.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="SportMenu__block__menu__info">
                        <h2 className="SportMenu__block__menu__info__header">
                            Раціон харчування для спортсменів ігрових видів спорту</h2>
                        <p className="SportMenu__block__menu__info__discription">
                            Загальна калорійність раціону становить 2407 ккал.
                        </p>
                    </div>
                    <Table bordered className="SportMenu__block__menu__table">
                        <tbody className="SportMenu__block__menu__table__body">
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Ранковий перекус</th>
                                <td>Банан — 1 шт
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Варені яйця — 2 шт<br />
                                    Родзинки — 2 ст.л.<br />
                                    Білий хліб — 2 шматочки<br />
                                    Змішаний фруктовий салат — 1 склянка<br />
                                    Молоко — 1,5 склянки.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Обід</th>
                                <td>Холодна пісна яловичина — 90 г<br />
                                    Сир чеддер — 30 г<br />
                                    Помідор — 1 шт<br />
                                    Морква — 2 шт<br />
                                    Корені селери — 2 шт<br />
                                    Хліб із цільної пшениці — 1 шматочок<br />
                                    Яблуко — 1 шт<br />
                                    Вода — 2 склянки.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Підвечірок</th>
                                <td>Булочка з родзинками — 1 шт<br />
                                    Молоко — 1,5 склянки.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Овочевий суп — 1 тарілка<br />
                                    Лосось — 180 г<br />
                                    Помідор — 2 шт.
                                </td>
                            </tr>
                            <tr>
                                <th className="SportMenu__block__menu__table__body__head">Вечірній перекус</th>
                                <td>Банан — 1 шт.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
}

export { SportMenu }