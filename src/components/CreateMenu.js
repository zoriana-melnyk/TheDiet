import React, { useState } from "react";

import './CreateMenu.scss';

import { Button, Form } from 'react-bootstrap';

import { OneSet } from './creatingMenu/OneSet';

import { useLittera } from "@assembless/react-littera";
import { createMenuTranslations } from "../CreateMenuTranslation";

function CreateMenu() {
    const translated = useLittera(createMenuTranslations);

    const sets = [`${translated.firstSet}`, `${translated.secondSet}`, `${translated.thirdSet}`];
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
                        {translated.header}
                    </h1>
                    <h2 className="CreateManu__MainBlock__InfoBlock__text">
                        {translated.paragraph}
                    </h2>
                </div>
                <div className="CreateManu__MainBlock__Menu">
                    <div className="CreateManu__MainBlock__Menu__MenuTitle">
                        <h3 className="CreateManu__MainBlock__Menu__MenuTitle__text">
                            {translated.discription}
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
                                {translated.nameOfMenu}
                                <Form.Control className="m-0" type="text" placeholder="додайте назву" name="menuName" />
                            </Form.Label>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                {translated.kcalOfMenu}
                                <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullKll"
                                    value={createdMenu.reduce((acc, el) => acc + Number(el.fullKcal), 0)} />
                            </Form.Label>
                        </Form>
                    </div>
                    <Button className="CreateManu__MainBlock__Menu__SubButton" type="submit" variant="Success">
                        {translated.saveMenu}
                    </Button>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };