import React, { useState } from 'react'
import './CreatingMenu.scss';
import { Form } from 'react-bootstrap';
import Select from 'react-select';


function Lunch() {
    const dishOptions = [{
        label: 'Запечена форель',
        value: 1,
        kcal: 359,
    }, {
        label: 'Овочі гриль',
        value: 2,
        kcal: 279,
    }, {
        label: 'Сирна нарізка',
        value: 3,
        fullKll: 112
    }, {
        label: 'Стейк свинний',
        value: 4,
        fullKll: 503
    }, {
        label: 'Картопля в мундирі',
        value: 5,
        fullKll: 205
    }, {
        label: 'Соус з журавлини',
        value: 6,
        fullKll: 250
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
            <div className="CreatingMenu__Menu">
                <h3 className="CreatingMenu__Menu__header">
                    Обід:
                </h3>
                <div className="CreatingMenu__Menu__block">
                    <Form className="CreatingMenu__Menu__block__form">
                        {/* Lunch Item 1 */}
                        <div className="d-flex flex-wrap align-items-center">
                            <h4 className="CreatingMenu__Menu__block__form__text item-1">
                                Страва:
                            </h4>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem" variant="secondary" id="DishItem">
                                <Select className="CreatingMenu__Menu__block__form__formItem__dishItem" placeholder="оберіть стравут"
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
                            <h4 className="CreatingMenu__Menu__block__form__text item-1">
                                Страва:
                            </h4>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem" variant="secondary" id="DishItem">
                                <Select className="CreatingMenu__Menu__block__form__formItem__dishItem" placeholder="оберіть стравут"
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
                            <h4 className="CreatingMenu__Menu__block__form__text item-1">
                                Страва:
                            </h4>
                            <Form.Label className="CreatingMenu__Menu__block__form__formItem" variant="secondary" id="DishItem">
                                <Select className="CreatingMenu__Menu__block__form__formItem__dishItem" placeholder="оберіть стравут"
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

export { Lunch }