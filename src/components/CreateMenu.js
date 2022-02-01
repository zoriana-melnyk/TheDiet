import React from "react";

import './CreateMenu.scss';



// import { Button } from 'react-bootstrap';

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
                        <div className="Menu-MenuItemn-row-Beackfast">
                            <h3 className="Menu-MenuItemn-row-Beackfast-header">
                                Сніданок:
                            </h3>
                            <h4 className="Menu-MenuItemn-row-Beackfast-header-text itemn-1">
                                Страва 1
                            </h4>
                            <h4 className="Menu-MenuItemn-row-Beackfast-header-text itemn-2">
                                Страва 2
                            </h4>
                            <h4 className="Menu-MenuItemn-row-Beackfast-header-text itemn-3">
                                Страва 3
                            </h4>
                        </div>
                        <div className="Menu-MenuItemn-row-Lunch">
                            <h3 className="Menu-MenuItemn-row-Lunch-header">
                                Обід:
                            </h3>
                            <h4 className="Menu-MenuItemn-row-Lunch-header-text itemn-1">
                                Страва 1
                            </h4>
                            <h4 className="Menu-MenuItemn-row-Lunch-header-text itemn-2">
                                Страва 2
                            </h4>
                            <h4 className="Menu-MenuItemn-row-Lunch-header-text itemn-3">
                                Страва 3
                            </h4>
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