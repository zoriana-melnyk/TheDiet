import React from 'react'
import './CreatingMenu.scss';
import { Dropdown } from 'react-bootstrap';


function Diner() {
    return (
        <div className="CreatingMenu">
            <div className="CreatingMenu__Diner">
                <h3 className="CreatingMenu__Diner__header">
                    Вечеря:
                </h3>
                {/* Diner Item 1 */}
                <div className="CreatingMenu__Diner__block">
                    <h4 className="CreatingMenu__Diner__block__text item-1">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Diner__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Diner__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Сирна нарізка</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Запечені овочі</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Качка по пекінськи</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* Diner Item 2 */}
                <div className="CreatingMenu__Diner__block">
                    <h4 className="CreatingMenu__Diner__block__text item-2">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Diner__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Diner__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Паста болоньєзе</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Сік фруктовий</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Овочі свіжі</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* Diner Item 3 */}
                <div className="CreatingMenu__Diner__block">
                    <h4 className="CreatingMenu__Diner__block__text item-3">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Diner__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Diner__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Равіолі з індичкою</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Соус песто</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Чай фруктовий</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div >
    );
}

export { Diner };