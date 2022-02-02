import React from "react";

import './CreateMenu.scss';



import { Dropdown } from 'react-bootstrap';

function CreateMenu() {
    return (
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
                                        <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
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
                                        <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
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
                                        <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
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
                                        <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
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
                                        <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="Menu-MenuItemn-Diner">
                        <h3 className="Menu-MenuItemn-Diner-header">
                            Вечеря:
                        </h3>
                        <h4 className="Menu-MenuItemn-Diner-header-text itemn-1">
                            Страва 1
                        </h4>
                        <h4 className="Menu-MenuItemn-Diner-header-text itemn-2">
                            Страва 2
                        </h4>
                        <h4 className="Menu-MenuItemn-Diner-header-text itemn-3">
                            Страва 3
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };