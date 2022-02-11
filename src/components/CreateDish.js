import React, { useState } from "react";
import './CreateDish.scss';



import { Form, Button } from 'react-bootstrap';

function CreateDish() {
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
    return (
        <div className="CreateDish">
            <div className="CreateDish__mainBlock">
                <div className="CreateDish__mainBlock__infoBlock">
                    <h1 className="CreateDish__mainBlock__infoBlock__header p-2">
                        Створення власної страви
                    </h1>
                    <h2 className="CreateDish__mainBlock__infoBlock__text p-2">
                        Оберіть продукт та створіть свою страву
                    </h2>
                </div>
                <Form className="CreateDish__mainBlock__form" onSubmit={onFormSubmit}>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Продукт:
                        <Form.Select aria-label="Default select example" name="product" value={formValues.product} onChange={onInputChange}>
                            <option> Оберіть продукт</option>
                            {proudctOptions.map(opt => <option value={opt.value}>{opt.label}</option>)}
                        </Form.Select>
                    </Form.Label>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Кількість продукту:
                        <Form.Control type="number" min="1" max="10" placeholder="к-сть продукту" name="amount" value={formValues.amount} onChange={onInputChange} />
                    </Form.Label>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Калорійність продукту:
                        <Form.Control type="number" readOnly placeholder="калорійність" name="kll" value={Number(formValues.amount) + Number(formValues.product)} />
                    </Form.Label>
                    <Form.Label className="CreateDish__mainBlock__form__label">
                        Вага продукту відповідно до рецепту:
                        <Form.Control type="number" placeholder="вага продукту" name="weight" value={formValues.weight} onChange={onInputChange} />
                    </Form.Label>
                    <Button type="submit">Додати до рецепту</Button>
                </Form>

                <ul className="CreateDish__mainBlock__results">
                    {createdProducts.map(product => <li>{product.amount} {product.weight} {product.product}</li>)}
                </ul>
            </div>
        </div >
    );
}
export { CreateDish };