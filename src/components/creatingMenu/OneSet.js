import React, { useState } from 'react'
import './CreatingMenu.scss';
import { Form } from 'react-bootstrap';
import Select from 'react-select';


function OneSet({ setIdx, title, onChange }) {
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
        kcal: 112
    }, {
        label: 'Стейк свинний',
        value: 4,
        kcal: 503
    }, {
        label: 'Картопля в мундирі',
        value: 5,
        kcal: 205
    }, {
        label: 'Соус з журавлини',
        value: 6,
        kcal: 250
    }];

    const initialFormValues = Array(3).fill({
        label: '',
        kcal: '',
        value: 0
    });

    const [formValues, setFormValues] = useState(initialFormValues);

    const onSelectProduct = (opt, idx) => { // label, value
        const cloneValue = [...formValues];
        cloneValue[idx] = opt;
        const fullKcal = cloneValue.reduce(
            (acc, el) => { return acc + Number(el.kcal) },
            0
        );
        onChange({ setIdx, fullKcal, title });
        setFormValues(cloneValue);
    }

    return (
        <div className="CreatingMenu">
            <div className="CreatingMenu__Menu">
                <h3 className="CreatingMenu__Menu__header">
                    {title}:
                </h3>
                <div className="CreatingMenu__Menu__block">
                    <Form className="CreatingMenu__Menu__block__form">
                        {
                            formValues.map((val, idx) => {
                                return <div key={'option' + idx} className="d-flex flex-wrap align-items-center">
                                    <h4 className="CreatingMenu__Menu__block__form__text item-1">
                                        Страва:
                                    </h4>
                                    <Form.Label className="CreatingMenu__Menu__block__form__formItem" variant="secondary" id="DishItem">
                                        <Select className="CreatingMenu__Menu__block__form__formItem__dishItem" placeholder="оберіть стравут"
                                            defaultValue={dishOptions[0].value}
                                            onChange={(prod) => onSelectProduct(prod, idx)}
                                            options={dishOptions}
                                            isSearchable
                                            isRequired
                                        />
                                    </Form.Label>
                                    {/* dish kll */}
                                    <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                        <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="kcal" value={val.kcal} />
                                    </Form.Label>
                                </div>
                            })
                        }
                    </Form>
                </div>
            </div>
        </div >
    );
}

export { OneSet }