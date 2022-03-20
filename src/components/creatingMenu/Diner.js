import React, { useState } from 'react'
import './CreatingMenu.scss';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

function Diner() {
    const dishOptions = [{
        label: 'Сирна нарізка',
        value: 1,
        kcal: 112,
    }, {
        label: 'Запечені овочі',
        value: 2,
        kcal: 250,
    }, {
        label: 'Равіолі з індичкою',
        value: 3,
        fullKll: 612
    }, {
        label: 'Качка по пекінськи',
        value: 4,
        fullKll: 403
    }, {
        label: 'Соус песто',
        value: 5,
        fullKll: 35
    }, {
        label: 'Чай фруктовий',
        value: 6,
        fullKll: 10
    }];
    const [formValues, setFormValues] = useState({
        label: '',
        weight: '',
        fullKll: '',
        value: 0
    });

    const onSelectproduct = (opt) => { // label, value
        setFormValues({
            ...formValues,
            ...opt,
        })
    }
    return (
        <div className="CreatingMenu">
            <div className="CreatingMenu__Diner">
                <h3 className="CreatingMenu__Diner__header">
                    Вечеря:
                </h3>
                {/* Diner Item 1 */}
                <div className="CreatingMenu__Diner__block">
                    <Form className="CreatingMenu__Diner__block__form">
                        {/* Lunch Item 1 */}
                        <div className="d-flex flex-wrap align-items-center">
                            <h4 className="CreatingMenu__Diner__block__form__text item-1">
                                Страва:
                            </h4>
                            <Form.Label className="CreatingMenu__Diner__block__form__formItem" variant="secondary" id="DishItem">
                                <Select className="CreatingMenu__Diner__block__form__formItem__dishItem" placeholder="оберіть стравут"
                                    defaultValue={formValues.dish}
                                    onChange={onSelectproduct}
                                    options={dishOptions}
                                    isSearchable
                                    isRequired
                                />
                            </Form.Label>
                            {/* dish kll */}
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullkll" value={formValues.fullKll} />
                            </Form.Label>
                        </div>
                        {/* Lunch Item 2 */}
                        <div className="d-flex flex-wrap">
                            <h4 className="CreatingMenu__Diner__block__form__text item-1">
                                Страва:
                            </h4>
                            <Form.Label className="CreatingMenu__Diner__block__form__formItem" variant="secondary" id="DishItem">
                                <Select className="CreatingMenu__Diner__block__form__formItem__dishItem" placeholder="оберіть стравут"
                                    defaultValue={formValues.dish}
                                    onChange={onSelectproduct}
                                    options={dishOptions}
                                    isSearchable
                                    isRequired
                                />
                            </Form.Label>
                            {/* dish kll */}
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullkll" value={formValues.fullKll} />
                            </Form.Label>
                        </div>
                        {/* Lunch Item 3 */}
                        <div className="d-flex flex-wrap">
                            <h4 className="CreatingMenu__Diner__block__form__text item-1">
                                Страва:
                            </h4>
                            <Form.Label className="CreatingMenu__Diner__block__form__formItem" variant="secondary" id="DishItem">
                                <Select className="CreatingMenu__Diner__block__form__formItem__dishItem" placeholder="оберіть стравут"
                                    defaultValue={formValues.dish}
                                    onChange={onSelectproduct}
                                    options={dishOptions}
                                    isSearchable
                                    isRequired
                                />
                            </Form.Label>
                            {/* dish kll */}
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullkll" value={formValues.fullKll} />
                            </Form.Label>
                        </div>
                    </Form>
                </div>
            </div>
        </div >
    );
}

export { Diner };