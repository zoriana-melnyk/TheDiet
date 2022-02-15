import React, { useState } from "react";
import Select from 'react-select';

import './CreateDish.scss';

import { AlertInfo } from './AlertInfo';
import { Form, Button } from 'react-bootstrap';

function CreateDish() {

    // NOTE: value - ідентифікатор, kll - енергетична цінність за 100 г, label - назва
    const proudctOptions = [{
        label: 'Aвокадо',
        value: 0,
        kll: 159,
    }, {
        label: 'Сир твердий',
        value: 1,
        kll: 241
    }, {
        label: 'Яйце',
        value: 2,
        kll: 412
    }];


    const [showAlert, setShowAlert] = useState(false);
    const [formValues, setFormValues] = useState({
        product: '',
        label: '',
        kll: '',
        weight: '',
        value: 0
    });
    const [createdProducts, setCreatedProducts] = useState([]);
    const onFormSubmit = (e) => {
        e.preventDefault();
        const foundProduct = proudctOptions.find(product => product.value === Number(formValues.product)); // { label, vlaue }
        setCreatedProducts([...createdProducts, { ...formValues, ...foundProduct }]);
    }
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const onSelectproduct = (opt) => { // label, value
        setFormValues({
            ...formValues,
            ...opt,
        })
    }

    // info alert 
    const onAlertToggle = () => {
        setShowAlert(!showAlert);
    }
    // end info alert

    // calculation kll of create dish
    const [createDishValues, setCreateDishValues] = useState({
        weightCreatedDish: ''
    });

    const [createdDish, setCreatedDish] = useState([]);
    const onCreatetedDishFormSubmit = (e) => {
        e.preventDefault();
        setCreatedDish([...createdDish, createDishValues]);
    }

    const onCreateInputChange = (e) => {
        const { name, value } = e.target;
        setCreateDishValues({
            ...createDishValues,
            [name]: value,
        })
    }

    return (
        <div className="CreateDish">
            <div className="CreateDish__mainBlock">
                <div className="CreateDish__mainBlock__infoBlock">
                    <h1 className="CreateDish__mainBlock__infoBlock__header p-2">
                        Створення власної страви
                    </h1>
                    <h2 className="CreateDish__mainBlock__infoBlock__text">
                        Оберіть продукт та створіть свою страву
                    </h2>
                </div>

                {/* product choise */}
                <Form className="CreateDish__mainBlock__form" onSubmit={onFormSubmit}>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Продукт:
                        <Select className="CreateDish__mainBlock__form__label__options" placeholder="оберіть продукт"
                            defaultValue={formValues.product}
                            onChange={onSelectproduct}
                            options={proudctOptions}
                            isSearchable
                        />
                    </Form.Label>


                    {/* product kll */}
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Калорійність продукту:
                        <Form.Control type="number" readOnly placeholder="калорійність" name="kll" value={formValues.kll} />
                    </Form.Label>

                    {/* weight of poduct */}
                    <div className="d-flex justify-content-start m-2">
                        <Form.Label className="CreateDish__mainBlock__form__label">
                            Вага продукту відповідно до рецепту:
                            <Form.Control required type="number" placeholder="вага продукту (г)" name="weight" value={formValues.weight} onChange={onInputChange} />
                        </Form.Label>
                    </div>
                    {/* add to recipe button */}
                    <Button className="CreateDish__mainBlock__form__button" type="submit">Додати до рецепту</Button>
                    {/* recipe */}
                    <div className="CreateDish__mainBlock__form__results">
                        <Form.Label className="CreateDish__mainBlock__form__results__label">Ваш рецепт:</Form.Label>
                        <ul id="productList">
                            {createdProducts.map((prod, idx) => {
                                return <li key={`product-${idx}`}>{`${prod.label} — ${prod.weight} г`}</li>
                            })}
                        </ul>
                        {!createdProducts.length ? <Form.Label className="CreateDish__mainBlock__form__results__label text-muted h6">Немає інгрідієнтів</Form.Label> : null}
                    </div>
                </Form>

                <Form className="CreateDish__mainBlock__form" onSubmit={onCreatetedDishFormSubmit}>
                    {/* weight created dish */}
                    <div className="d-flex justify-content-start align-items-center m-2">
                        <Form.Label className="CreateDish__mainBlock__form__label">Введіть вагу готової страви:
                            <Form.Control required type="number" placeholder="вага готової страви" name="weightCreatedDish"
                                value={createDishValues.weightCreatedDish} onChange={onCreateInputChange}>
                            </Form.Control>
                        </Form.Label>
                        {/* alert info */}
                        <Button className="CreateDish__mainBlock__form__buttonInfo" onClick={onAlertToggle}>?</Button>
                    </div>
                    <AlertInfo show={showAlert} onClick={onAlertToggle} />
                    {/* calc button */}
                    <Button className="CreateDish__mainBlock__form__button" type="submit">Обчислити калорійність готової страви</Button>

                    {/* kll created dish */}
                    <div className="d-flex justify-content-start m-2">
                        <Form.Label className="CreateDish__mainBlock__form__label">Калорійність готової страви:
                            <Form.Control type="number" readOnly placeholder="калорійність" name="kll">
                            </Form.Control>
                        </Form.Label>
                    </div>

                    {/* name of dish */}
                    <div className="d-flex justify-content-center m-2">
                        <Form.Label className="CreateDish__mainBlock__form__label">Назва страви:
                            <Form.Control type="text" placeholder="додайте назву" name="dishName">
                            </Form.Control>
                        </Form.Label>
                    </div>

                    {/* save name of dish button */}
                    <div className="d-flex justify-content-end m-2">
                        <Button className="CreateDish__mainBlock__form__button">Зберегти страву</Button>
                    </div>
                </Form>
            </div>
        </div >
    );
}
export { CreateDish };