import React from 'react'
import './ChildrenMenu.scss';

import { Table } from 'react-bootstrap';

function ChildrenMenu() {

    return (
        <div className="ChildrenMenu">
            <div className="ChildrenMenu__block">
                <div className="ChildrenMenu__block__infoBlock">
                    <h1 className="ChildrenMenu__block__infoBlock__header p-2">
                        Раціони харчування для дітей
                    </h1>
                </div>
                <div className="ChildrenMenu__block__menu">
                    <div className="ChildrenMenu__block__menu__info">
                        <h2 className="ChildrenMenu__block__menu__info__header">
                            Орієнтовне меню для школяра 1–5 класу</h2>
                    </div>
                    <Table bordered className="ChildrenMenu__block__menu__table">
                        <tbody className="ChildrenMenu__block__menu__table__body">
                            <tr>
                                <th className="ChildrenMenu__block__menu__table__body__head">Сніданок</th>
                                <td>Омлет із двох яєць та ложки нежирної сметани<br />
                                    Тост із цільнозернового хліба з м’яким сиром і свіжими овочами.
                                </td>
                            </tr>
                            <tr>
                                <th className="ChildrenMenu__block__menu__table__body__head">Перекус</th>
                                <td>Бутерброд з арахісовим маслом<br />
                                    Яблуко<br />
                                    Пляшка негазованої води<br />
                                    Домашнє печиво<br />
                                    Банан<br />
                                    Твердий сир.
                                </td>
                            </tr>
                            <tr>
                                <th className="ChildrenMenu__block__menu__table__body__head">Обід<br />
                                    <p style={{ color: "gray", fontSize: "15px" }}>
                                        (якщо немає харчування в школі)
                                    </p>
                                </th>
                                <td>Суп із курячими фрикадельками<br />
                                    Гречана каша з паровою котлетою<br />
                                    Свіжий або ферментований (кислий) овоч.
                                </td>
                            </tr>
                            <tr>
                                <th className="ChildrenMenu__block__menu__table__body__head">Вечеря</th>
                                <td>Білок + клітковина<br />
                                    <p style={{ color: "gray", fontStyle: "italic" }}>
                                        (наприклад, риба з овочевим салатом <br />
                                        або запечена куряча грудка з овочами).
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th className="ChildrenMenu__block__menu__table__body__head">Перед сном</th>
                                <td>Склянка кефіру або молока.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
}

export { ChildrenMenu }