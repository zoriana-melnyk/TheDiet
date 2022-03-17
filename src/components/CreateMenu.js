import React from "react";

import './CreateMenu.scss';

import { Button } from 'react-bootstrap';

import { Brekfast } from './creatingMenu/Brekfast';
import { Lunch } from './creatingMenu/Lunch';
import { Diner } from './creatingMenu/Diner';

function CreateMenu() {
    return (
        <div className="CreateManu">
            <div className="CreateManu__MainBlock">
                <div className="CreateManu__MainBlock__InfoBlock">
                    <h1 className="CreateManu__MainBlock__InfoBlock__header p-2">
                        Сам собі шеф-кухар
                    </h1>
                    <h2 className="CreateManu__MainBlock__InfoBlock__text">
                        Створити своє меню ніколи ще не було так легко!)
                    </h2>
                </div>
                <div className="CreateManu__MainBlock__Menu">
                    <div className="CreateManu__MainBlock__Menu__MenuTitle">
                        <h3 className="CreateManu__MainBlock__Menu__MenuTitle__text">
                            Ваше меню:
                        </h3>
                    </div>
                    {/* Menu selectors */}
                    <div className="CreateManu__MainBlock__Menu__MenuItem">
                        <div className="CreateManu__MainBlock__Menu__MenuItem__row">
                            <Brekfast />
                            <Lunch />
                        </div>
                        <Diner />
                    </div>
                    <Button className="CreateManu__MainBlock__Menu__SubButton" type="submit" variant="Success">
                        Зберегти
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };