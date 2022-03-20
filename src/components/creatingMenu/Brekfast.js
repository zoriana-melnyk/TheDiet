import React, { useState } from 'react'
import './CreatingMenu.scss';
import { Form } from 'react-bootstrap';
import Select from 'react-select';



function Brekfast() {

    const dishOptions = [{
        label: 'Фруктовий сет',
        value: 1,
        kcal: 159,
    }, {
        label: 'Сирний крем-суп',
        value: 2,
        kcal: 479,
    }, {
        label: 'Омлет',
        value: 3,
        fullKll: 412
    }, {
        label: 'Млинці',
        value: 4,
        fullKll: 503
    }, {
        label: 'Сухофрукти',
        value: 5,
        fullKll: 205
    }, {
        label: 'Вівсянка',
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
                    Сніданок:
                </h3>
                <div className="CreatingMenu__Menu__block">
                    <Form className="CreatingMenu__Menu__block__form">
                        {/* Brekfast Item 1 */}
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

                        {/* Breckfast Item 2 */}
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

                        {/* Brekfast Item 3 */}
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
export { Brekfast };