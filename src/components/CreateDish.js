import React, { useEffect, useState } from "react";
import Select from 'react-select';

import './CreateDish.scss';

import { Form, Button } from 'react-bootstrap';
import { Recipe, cookingOptions, defaultOptionIndex } from "./Recipe";

import { useLittera } from "@assembless/react-littera";
import { createDishTranslations } from "../localization/CreateDishTranslation";
import { ProductApi } from "../api/products.api";
import { DishApi } from "../api/dish.api";

import { toast } from 'react-toastify';
import { Loader } from "./Loader";

const normizeliProducst = (prods) => {
    return prods.map(p => ({
        label: p.name,
        value: p._id,
        fullKll: p.kcal
    }))
}

function CreateDish() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [products, setProducts] = useState([]);
    const [dish, setDish] = useState({ name: '' });

    const fetchData = async () => {
        const { data } = await ProductApi.getAll();
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
        /* ts-ignore */
    }, []);

    // NOTE: value - ідентифікатор, kll - енергетична цінність за 100 г, label - назва
    const proudctOptions = normizeliProducst(products);

    const weightOptions = Array(40).fill(0).map((value, idx) => ({ value: (idx + 1) * 25, label: (idx + 1) * 25, weight: (idx + 1) * 25 }));
    const [formValues, setFormValues] = useState({
        label: '',
        weight: '',
        fullKll: '',
        kll: 0,
        cookKll: 0,
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
            requiredFields.label = `${translated.error}`;
        } else {
            requiredFields.label = '';
        }
        if (!formValues.weight) {
            requiredFields.weight = `${translated.error}`;
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
        const kll = Number(formValues.weight) * formValues.fullKll / 100;
        const cookKll = kll * cookingOptions[defaultOptionIndex].value;
        const newProduct = { ...formValues, kll, cookKll, label: formValues.label };
        setCreatedProducts([...createdProducts, newProduct]);
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

    const onDishCreate = async () => {
        try {
            const { data } = await DishApi.create({
                name: dish.name,
                fullKll: formValues.fullKll,
                products: createdProducts.map(cp => ({ ...cp, product: cp.value })),
                author: user._id
            });
            toast.info(`Страву "${data.name}" створено`);
        } catch(e) {
            const { response: { data: { message } } } = e;
            toast.error(message);
        }
    }

    const translated = useLittera(createDishTranslations);


    if (!products.length) {
        return <Loader />
    }

    return (
        <div className="CreateDish">
            <div className="CreateDish__mainBlock">
                <div className="CreateDish__mainBlock__infoBlock">
                    <h1 className="CreateDish__mainBlock__infoBlock__header p-2">
                        {translated.header}
                    </h1>
                    <h2 className="CreateDish__mainBlock__infoBlock__text">
                        {translated.paragraph}
                    </h2>
                </div>

                {/* product choise */}
                <Form className="CreateDish__mainBlock__form" onSubmit={onFormSubmit}>
                    <div className="d-flex flex-wrap">
                        <Form.Label className="CreateDish__mainBlock__form__label">
                            {translated.discription}&nbsp;
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
                            {translated.kcalOfProduct}
                            <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="kll" value={formValues.fullKll} />
                        </Form.Label>

                        {/* weight of poduct */}
                        <Form.Label className="CreateDish__mainBlock__form__label">
                            {translated.weightOfProduct}&nbsp;
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
                    <Button className="CreateDish__mainBlock__form__button" type="submit">{translated.addToRecipe}</Button>

                    {/* recipe */}
                    <div className="CreateDish__mainBlock__form__results">
                        <Form.Label className="CreateDish__mainBlock__form__results__label">{translated.recipe}</Form.Label>< br />
                        {
                            !createdProducts.length
                                ? <Form.Label className="CreateDish__mainBlock__form__results__label text-muted h6 mt-5">{translated.empty}</Form.Label>
                                : <Recipe
                                    recipe={createdProducts}
                                    onCookingOptionChange={(createProductIndex, selectedOption) => {
                                        const cloneProducts = [...createdProducts];
                                        const prod = cloneProducts[createProductIndex]
                                        prod.cookKll = prod.kll * selectedOption.value;
                                        setCreatedProducts(cloneProducts);
                                    }}
                                />
                        }
                    </div>

                    {/* name of dish */}
                    <div className="d-flex justify-content-left m-2">
                        <Form.Label className="CreateDish__mainBlock__form__label">{translated.nameOfDish}
                            <Form.Control onChange={e => setDish({ name: e.target.value })} type="text" placeholder="додайте назву" name="dishName" value={dish.name}>
                            </Form.Control>
                        </Form.Label>
                    </div>

                    {/* save name of dish button */}
                    <div className="d-flex justify-content-end m-2">
                        <Button onClick={onDishCreate} className="CreateDish__mainBlock__form__button" disabled={!createdProducts.length}>{translated.saveDish}</Button>
                    </div>
                </Form>
            </div>
        </div >
    );
}
export { CreateDish };