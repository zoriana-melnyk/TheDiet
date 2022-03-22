import React, { useState } from "react";

import './CreateMenu.scss';

import { Button, Form } from 'react-bootstrap';

import { OneSet } from './creatingMenu/OneSet';

function CreateMenu() {
    const sets = ['Сніданок', 'Обід', 'Вечеря'];
    const [createdMenu, setCreatedMenu] = useState([
        { title: sets[0], fullKcal: 0 },
        { title: sets[1], fullKcal: 0 },
        { title: sets[2], fullKcal: 0 }
    ]);

    const onSetChange = (data) => {
        const { setIdx, fullKcal, title } = data;
        const setClone = [...createdMenu];
        setClone[setIdx] = { fullKcal, title };
        setCreatedMenu(setClone);
    }

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
                        {
                            sets.map((setName, setIdx) => {
                                return <OneSet key={setIdx} setIdx={setIdx} title={setName} onChange={onSetChange} />
                            })
                        }
                    </div>
                    <div className="CreateManu__MainBlock__Menu__FullKcal">
                        <Form>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                {/* <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullkll" value={fullKcal} /> */}
                            </Form.Label>
                        </Form>
                    </div>
                    <h1>{createdMenu.reduce(
                        (acc, el) => acc + Number(el.fullKcal),
                        0
                    )}</h1>
                    <Button className="CreateManu__MainBlock__Menu__SubButton" type="submit" variant="Success">
                        Зберегти
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };