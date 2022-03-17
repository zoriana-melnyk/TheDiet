import React from 'react'
import './CreatingMenu.scss';
import { Dropdown } from 'react-bootstrap';

function Lunch() {
    return (
        <div className="CreatingMenu">
            <div className="CreatingMenu__Menu">
                <h3 className="CreatingMenu__Menu__header">
                    Обід:
                </h3>
                {/* Lunch Item 1 */}
                <div className="CreatingMenu__Menu__block">
                    <h4 className="CreatingMenu__Menu__block__text item-1">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Menu__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Menu__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Запечена форель</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Овочі гриль</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Сирна нарізка</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* Lunch Item 2 */}
                <div className="CreatingMenu__Menu__block">
                    <h4 className="CreatingMenu__Menu__block__text item-2">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Menu__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Menu__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Стейк свинний</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Картопля в мундирі</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Соус з журавлини</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* Lunch Item 3 */}
                <div className="CreatingMenu__Menu__block">
                    <h4 className="CreatingMenu__Menu__block__text item-3">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Menu__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Menu__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Суп овочевий</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Хлібна нарізка</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Мʼясна нарізка</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div >
    );
}

export { Lunch }