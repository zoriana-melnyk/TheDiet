import React, { useEffect, useState } from "react";

import './CreateMenu.scss';

import { Button, Form } from 'react-bootstrap';

import { OneSet } from './creatingMenu/OneSet';

import { useLittera } from "@assembless/react-littera";
import { createMenuTranslations } from "../localization/CreateMenuTranslation";
import { DishApi } from "../api/dish.api";
import { Loader } from "./Loader";
import { MenuApi } from "../api/menu.api";
import { toast } from 'react-toastify';

function CreateMenu() {
    const user = JSON.parse(localStorage.getItem('user'));

    const translated = useLittera(createMenuTranslations);
    const [dishes, setDishes] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await DishApi.getAll();
            setDishes(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const sets = ['breakfast', 'lunch', 'dinner']
    const [createdMenu, setCreatedMenu] = useState([
        { title: sets[0], fullKll: 0 },
        { title: sets[1], fullKll: 0 },
        { title: sets[2], fullKll: 0 }
    ]);

    const onSetChange = (data) => {
        const { setIdx, fullKll, title } = data;
        const setClone = [...createdMenu];
        setClone[setIdx] = { fullKll, title };
        setCreatedMenu(setClone);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const menuGenerator = (acesseKey) => {
            return [0, 1, 2].map(idx => {
                const value = formProps[`${acesseKey}[${idx}]`];
                return {
                    dish: value,
                    name: dishes.find(d => d._id === value)?.name
                }
            }).filter(dishEl => dishEl.dish)
        }
        const menu = {
            name: formProps.menuName,
            fullKll: formProps.fullKll,
            breakfast: menuGenerator('breakfast'),
            lunch: menuGenerator('lunch'),
            dinner: menuGenerator('dinner'),
            author: user._id,
        };

        try {
            await MenuApi.create(menu);
            toast.success('Меню успішно створене');
        } catch(e) {
            const { response: { data: { message } } } = e;
            toast.error(message);
        }
    }

    if (!dishes.length) {
        return <Loader />
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
                    <div className="CreateManu__MainBlock__Menu__FullKcal">
                        <Form onSubmit={onSubmit}>
                            {/* Menu selectors */}
                            <div className="CreateManu__MainBlock__Menu__MenuItem">
                                {
                                    sets.map((setName, setIdx) => {
                                        return <OneSet key={setIdx} type={setName} setIdx={setIdx} onChange={onSetChange} options={dishes} />
                                    })
                                }
                            </div>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                {translated.nameOfMenu}
                                <Form.Control className="m-0" type="text" placeholder="додайте назву" name="menuName" required/>
                            </Form.Label>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                {translated.kcalOfMenu}
                                <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullKll"
                                    value={createdMenu.reduce((acc, el) => acc + Number(el.fullKll), 0)} />
                            </Form.Label>
                            <Button className="CreateManu__MainBlock__Menu__SubButton" type="submit" variant="Success">
                                {translated.saveMenu}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { CreateMenu };