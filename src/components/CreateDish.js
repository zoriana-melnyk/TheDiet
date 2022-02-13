import React, { useState } from "react";
import './CreateDish.scss';
import { AlertInfo } from './AlertInfo';

import { Form, Button } from 'react-bootstrap';

function CreateDish() {
    const [showAlert, setShowAlert] = useState(false);
    const [formValues, setFormValues] = useState({
        product: undefined,
        amount: 1,
        weight: 0
    });
    const [createdProducts, setCreatedProducts] = useState([]);
    const onFormSubmit = (e) => {
        e.preventDefault();
        setCreatedProducts([...createdProducts, formValues]);
    }
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    // info alert 
    const onAlertToggle = () => {
        setShowAlert(!showAlert);
    }
    // end info alert
    const proudctOptions = [{
        label: 'Aвокадо',
        value: 159
    }, {
        label: 'Сир твердий',
        value: 241
    }, {
        label: 'Яйце',
        value: 175
    }];

    const calculatedKll = (Number(formValues.amount) + Number(formValues.product)) || 0;

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
                <Form className="CreateDish__mainBlock__form" onSubmit={onFormSubmit}>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Продукт:
                        <Form.Select aria-label="Chose product" name="product" value={formValues.product} onChange={onInputChange}>
                            <option> Оберіть продукт</option>
                            {proudctOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </Form.Select>
                    </Form.Label>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Кількість продукту:
                        <Form.Control type="number" min="1" placeholder="к-сть продукту" name="amount" value={formValues.amount} onChange={onInputChange} />
                    </Form.Label>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Калорійність продукту:
                        <Form.Control type="number" readOnly placeholder="калорійність" name="kll" value={calculatedKll} />
                    </Form.Label>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Вага продукту відповідно до рецепту:
                        <Form.Control type="number" placeholder="вага продукту" name="weight" value={formValues.weight} onChange={onInputChange} />
                    </Form.Label>
                    <Button className="CreateDish__mainBlock__form__button" type="submit">Додати до рецепту</Button>

                    <div className="CreateDish__mainBlock__results">
                        <Form.Label className="CreateDish__mainBlock__results__label">Ваш рецепт:</Form.Label>
                        <ul>{createdProducts.map(product => <li>{product.amount} {product.weight} {product.product}</li>)}</ul>
                    </div>

                    <Form.Label className="CreateDish__mainBlock__form__label">Введіть вагу готової страви:
                        <Form.Control type="number" placeholder="вага готової страви" name="weight">
                        </Form.Control>
                    </Form.Label>
                    <Button className="CreateDish__mainBlock__form__buttonInfo" onClick={onAlertToggle}>?</Button>
                    <AlertInfo show={showAlert} onClick={onAlertToggle} />
                </Form>
            </div>
        </div >
    );
}
export { CreateDish };