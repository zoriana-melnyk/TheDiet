import React, { useState } from "react";
import Select from 'react-select';

import './CreateDish.scss';

import { AlertInfo } from './AlertInfo';
import { Form, Button } from 'react-bootstrap';

function CreateDish() {

    // NOTE: value - ідентифікатор, kll - енергетична цінність за 100 г, label - назва
    const proudctOptions = [{
        label: 'Aвокадо',
        value: 1,
        kll: 159,
    }, {
        label: 'Сир твердий',
        value: 2,
        kll: 241
    }, {
        label: 'Яйце',
        value: 3,
        kll: 412
    }];

    const weightOptions = Array(40).fill(0).map((value, idx) => ({ value: (idx + 1) * 25, label: (idx + 1) * 25, weight: (idx + 1) * 25 }));
    const [showAlert, setShowAlert] = useState(false);
    const [formValues, setFormValues] = useState({
        label: '',
        kll: '',
        weight: '',
        value: 0
    });
    const [errors, setErrors] = useState({
        product: '',
        weight: '',
    });
    const [createdProducts, setCreatedProducts] = useState([]);

    const formValidation = () => {
        const requiredFields = {};
        let isValid = true;
        if (!formValues.label) {
            requiredFields.label = 'Обовʼязкове поле';
        } else {
            requiredFields.label = '';
        }
        if (!formValues.weight) {
            requiredFields.weight = 'Обовʼязкове поле';
        } else {
            requiredFields.weight = '';
        }


        if (!formValues.label || !formValues.weight) {
            isValid = false;
            setErrors(requiredFields);
        } else {
            setErrors({});
        }

        return isValid;
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const isFormValid = formValidation(); // boolean
        if (!isFormValid) {
            return;
        }
        const foundProduct = proudctOptions.find(product => product.value === Number(formValues.product)); // { label, vlaue }
        setCreatedProducts([...createdProducts, { ...formValues, ...foundProduct }]);
    }
    const onWeightChange = ({ weight }) => {
        setFormValues({
            ...formValues,
            weight
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
                        Продукт:&nbsp;
                        {errors.label && <span className="text-danger ml-1 h6">{errors.label}</span>}
                        <Select className="CreateDish__mainBlock__form__label__options" placeholder="оберіть продукт"
                            defaultValue={formValues.product}
                            onChange={onSelectproduct}
                            options={proudctOptions}
                            isSearchable
                            isRequired
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
                            Вага продукту відповідно до рецепту:&nbsp;
                            {errors.weight && <span className="text-danger h6">{errors.weight}</span>}
                            <Select required className="CreateDish__mainBlock__form__label__options" placeholder="вага продукту (г)"
                                defaultValue={formValues.weight}
                                onChange={onWeightChange}
                                options={weightOptions}
                                isSearchable
                            />
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