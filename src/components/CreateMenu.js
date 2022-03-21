import React from "react";

import './CreateMenu.scss';

import { Button } from 'react-bootstrap';

import { OneSet } from './creatingMenu/OneSet';

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
                        <OneSet title="Сніданок" />
                        <OneSet title="Обід" />
                        <OneSet title="Вечеря" />
                    </div>
                    {/* <div className="CreateManu__MainBlock__Menu__FullKcal">
                        <Form>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullkll" value={formValues.fullKll} />
                            </Form.Label>
                        </Form>
                    </div> */}
                    <Button className="CreateManu__MainBlock__Menu__SubButton" type="submit" variant="Success">
                        Зберегти
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };