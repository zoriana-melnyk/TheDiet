import React, { useState } from 'react'
import './CreatingMenu.scss';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

import { useLittera } from "@assembless/react-littera";
import { createMenuTranslations } from "../../localization/CreateMenuTranslation";

const normalizeOptions = (data) => {
    return data.map(d => ({ label: d.name, value: d._id, fullKll: d.fullKll }));
}
function OneSet({ setIdx, type, title, onChange, options }) {
    const dishOptions = normalizeOptions(options);
    const initialFormValues = Array(3).fill({
        label: '',
        fullKll: undefined,
        value: 0
    });

    const [formValues, setFormValues] = useState(initialFormValues);

    const onSelectProduct = (opt, idx) => { // label, value
        const cloneValue = [...formValues];
        cloneValue[idx] = opt;
        const fullKll = cloneValue.reduce(
            (acc, el) => { return acc + Number(el.fullKll ?? 0) },
            0
        );
        onChange({ setIdx, fullKll, title });
        setFormValues(cloneValue);
    }

    const translated = useLittera(createMenuTranslations);
    const titles = [`${translated.firstSet}`, `${translated.secondSet}`, `${translated.thirdSet}`];

    return (
        <div className="CreatingMenu">
            <div className="CreatingMenu__Menu">
                <h3 className="CreatingMenu__Menu__header">
                    {titles[setIdx]}:
                </h3>
                <div className="CreatingMenu__Menu__block">
                    <div className="CreatingMenu__Menu__block__form">
                        {
                            formValues.map((val, idx) => {
                                return <div key={'option' + idx} className="d-flex flex-wrap align-items-center">
                                    <h4 className="CreatingMenu__Menu__block__form__text item-1">
                                        {translated.dishOption}
                                    </h4>
                                    <Form.Label className="CreatingMenu__Menu__block__form__formItem" variant="secondary" id="DishItem">
                                        <Select
                                            name={`${type}[${idx}]`}
                                            className="CreatingMenu__Menu__block__form__formItem__dishItem"
                                            placeholder="оберіть стравут"
                                            defaultValue={dishOptions[0].value}
                                            onChange={(prod) => onSelectProduct(prod, idx)}
                                            options={dishOptions}
                                            isSearchable
                                            isRequired
                                        />
                                    </Form.Label>
                                    {/* dish kll */}
                                    <Form.Label className="CreatingMenu__Menu__block__form__formItem">
                                        <Form.Control className="m-0" type="number" readOnly placeholder="калорійність" name="fullKll" value={val.fullKll} />
                                    </Form.Label>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export { OneSet }