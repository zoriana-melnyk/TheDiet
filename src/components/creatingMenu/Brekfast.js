import React from 'react'
import './CreatingMenu.scss';
import { Dropdown } from 'react-bootstrap';


function Brekfast() {
    return (
        <div className="CreatingMenu">
            <div className="CreatingMenu__Menu">
                <h3 className="CreatingMenu__Menu__header">
                    Сніданок:
                </h3>
                {/* Brekfast Item 1 */}
                <div className="CreatingMenu__Menu__block">
                    <h4 className="CreatingMenu__Menu__block__text item-1">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Menu__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Menu__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Тости з авокадо</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Сирнички</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Яйце пашот</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* Breckfast Item 2 */}
                <div className="CreatingMenu__Menu__block">
                    <h4 className="CreatingMenu__Menu__block__text item-2">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Menu__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Menu__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Фруктовий сет</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Сирний крем-суп</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Омлет</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* Brekfast Item 3 */}
                <div className="CreatingMenu__Menu__block">
                    <h4 className="CreatingMenu__Menu__block__text item-3">
                        Страва:
                    </h4>
                    <Dropdown>
                        <Dropdown.Toggle className="CreatingMenu__Menu__block__toggleItem" variant="secondary" id="DishItem">
                            Оберіть страву
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="CreatingMenu__Menu__block__toggleItem__dishItem">
                            <Dropdown.Item href="#/action-1">Млинці</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Сухофрукти</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Вівсянка</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div >
    );
}
export { Brekfast };