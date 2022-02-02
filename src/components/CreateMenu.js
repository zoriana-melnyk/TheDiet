import React from "react";

import './CreateMenu.scss';



import { Dropdown, Button } from 'react-bootstrap';

function CreateMenu() {
    return (
        <div className="CreateManu">
            <div className="Main-block">
                <div className="Info-block">
                    <h1 className="Info-text-header p-2">
                        Сам собі шеф-кухар
                    </h1>
                    <h2 className="Info-text">
                        Створити своє меню ніколи ще не було так легко!)
                    </h2>
                </div>
                <div className="Menu">
                    <div className="Menu-MenuTitle">
                        <h3 className="Menu-MenuTitle-text">
                            Ваше меню:
                        </h3>
                    </div>
                    {/* Menu selectors */}
                    <div className="Menu-MenuItemn">
                        <div className="Menu-MenuItemn-row">
                            {/* Brekfast */}
                            <div className="Menu-MenuItemn-row-Brekfast">
                                <h3 className="Menu-MenuItemn-row-Brekfast-header">
                                    Сніданок:
                                </h3>
                                {/* Brekfast Itemn 1 */}
                                <div className="Menu-MenuItemn-row-Brekfast-header-block">
                                    <h4 className="Menu-MenuItemn-row-Brekfast-header-block-text itemn-1">
                                        Страва:
                                    </h4>
                                    <Dropdown>
                                        <Dropdown.Toggle className="Menu-MenuItemn-row-Brekfast-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                            Оберіть страву
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="Menu-MenuItemn-row-Brekfast-header-block-text-toggleItemn-dishItemn">
                                            <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {/* Breckfast Itemn 2 */}
                                <div className="Menu-MenuItemn-row-Brekfast-header-block">
                                    <h4 className="Menu-MenuItemn-row-Brekfast-header-block-text itemn-2">
                                        Страва:
                                    </h4>
                                    <Dropdown>
                                        <Dropdown.Toggle className="Menu-MenuItemn-row-Brekfast-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                            Оберіть страву
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="Menu-MenuItemn-row-Brekfast-header-block-text-toggleItemn-dishItemn">
                                            <Dropdown.Item href="#/action-1">Фруктовий сет</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Сирний крем-суп</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Омлет</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {/* Brekfast Itemn 3 */}
                                <div className="Menu-MenuItemn-row-Brekfast-header-block">
                                    <h4 className="Menu-MenuItemn-row-Brekfast-header-block-text itemn-3">
                                        Страва:
                                    </h4>
                                    <Dropdown>
                                        <Dropdown.Toggle className="Menu-MenuItemn-row-Brekfast-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                            Оберіть страву
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="Menu-MenuItemn-row-Brekfast-header-block-text-toggleItemn-dishItemn">
                                            <Dropdown.Item href="#/action-1">Млинці</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Сухофрукти</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Вівсянка</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            {/* Lunch */}
                            <div className="Menu-MenuItemn-row-Lunch">
                                <h3 className="Menu-MenuItemn-row-Lunch-header">
                                    Обід:
                                </h3>
                                {/* Lunch Itemn 1 */}
                                <div className="Menu-MenuItemn-row-Lunch-header-block">
                                    <h4 className="Menu-MenuItemn-row-Lunch-header-block-text itemn-1">
                                        Страва:
                                    </h4>
                                    <Dropdown>
                                        <Dropdown.Toggle className="Menu-MenuItemn-row-Lunch-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                            Оберіть страву
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="Menu-MenuItemn-row-Lunch-header-block-text-toggleItemn-dishItemn">
                                            <Dropdown.Item href="#/action-1">Запечена форель</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Овочі гриль</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Сирна нарізка</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {/* Lunch Itemn 2 */}
                                <div className="Menu-MenuItemn-row-Lunch-header-block">
                                    <h4 className="Menu-MenuItemn-row-Lunch-header-block-text itemn-1">
                                        Страва:
                                    </h4>
                                    <Dropdown>
                                        <Dropdown.Toggle className="Menu-MenuItemn-row-Lunch-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                            Оберіть страву
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="Menu-MenuItemn-row-Lunch-header-block-text-toggleItemn-dishItemn">
                                            <Dropdown.Item href="#/action-1">Стейк свинний</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Картопля в мундирі</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Соус з журавлини</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {/* Lunch Itemn 3 */}
                                <div className="Menu-MenuItemn-row-Lunch-header-block">
                                    <h4 className="Menu-MenuItemn-row-Lunch-header-block-text itemn-1">
                                        Страва:
                                    </h4>
                                    <Dropdown>
                                        <Dropdown.Toggle className="Menu-MenuItemn-row-Lunch-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                            Оберіть страву
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="Menu-MenuItemn-row-Lunch-header-block-text-toggleItemn-dishItemn">
                                            <Dropdown.Item href="#/action-1">Суп овочевий</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Хлібна нарізка</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Мʼясна нарізка</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        {/* Diner */}
                        <div className="Menu-MenuItemn-Diner">
                            <h3 className="Menu-MenuItemn-Diner-header">
                                Вечеря:
                            </h3>
                            {/* Diner Itemn 1 */}
                            <div className="Menu-MenuItemn-Diner-header-block">
                                <h4 className="Menu-MenuItemn-Diner-header-block-text itemn-1">
                                    Страва:
                                </h4>
                                <Dropdown>
                                    <Dropdown.Toggle className="Menu-MenuItemn-Diner-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                        Оберіть страву
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="Menu-MenuItemn-Diner-block-text-toggleItemn-dishItemn">
                                        <Dropdown.Item href="#/action-1">Сирна нарізка</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Запечені овочі</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Качка по пекінськи</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            {/* Diner Itemn 2 */}
                            <div className="Menu-MenuItemn-Diner-header-block">
                                <h4 className="Menu-MenuItemn-Diner-header-block-text itemn-1">
                                    Страва:
                                </h4>
                                <Dropdown>
                                    <Dropdown.Toggle className="Menu-MenuItemn-Diner-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                        Оберіть страву
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="Menu-MenuItemn-Diner-block-text-toggleItemn-dishItemn">
                                        <Dropdown.Item href="#/action-1">Паста болоньєзе</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Сік фруктовий</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Овочі свіжі</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            {/* Diner Itemn 3 */}
                            <div className="Menu-MenuItemn-Diner-header-block">
                                <h4 className="Menu-MenuItemn-Diner-header-block-text itemn-1">
                                    Страва:
                                </h4>
                                <Dropdown>
                                    <Dropdown.Toggle className="Menu-MenuItemn-Diner-header-block-text-toggleItemn" variant="secondary" id="DishItemn">
                                        Оберіть страву
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="Menu-MenuItemn-Diner-header-block-text-toggleItemn-dishItemn">
                                        <Dropdown.Item href="#/action-1">Равіолі з індичкою</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Соус песто</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Чай фруктовий</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <Button className="Menu-SubButton" type="submit" variant="Success">
                        Зберегти
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };