import React from "react";
import { Table } from "react-bootstrap";

import Select from 'react-select';

import './Recipe.scss';

const cookingOptions = [
    {
        label: 'Варити у воді',
        value: 1.1
    },
    {
        label: 'Варити на пару',
        value: 1.07
    },
    {
        label: 'Смажити',
        value: .98
    },
    {
        label: 'Запікати',
        value: .984
    },
    {
        label: 'Сирий',
        value: 1
    }
];
const defaultOptionIndex = 2;

function Recipe(props) {
    const { recipe, onCookingOptionChange } = props;

    const weight = props.recipe.reduce(
        (acc, el) => { return acc + el.weight },
        0
    );
    const fullKll = props.recipe.reduce(
        (acc, el) => { return acc + el.fullKll },
        0
    );
    const kll = props.recipe.reduce(
        (acc, el) => { return acc + el.kll },
        0
    );
    const dependedKll = props.recipe.reduce(
        (acc, el) => { return acc + el.cookKll },
        0
    );

    return (
        <div className="Recipe">
            <div className="Recipe__tableContainer" >
                <Table bordered className="Recipe__tableContainer__table">
                    <thead className="Recipe__tableContainer__table__head">
                        <tr>
                            <th>Продукт</th>
                            <th>Вага</th>
                            <th>kll/100g</th>
                            <th>Калорійність</th>
                            <th>kll/100g приготування</th>
                            <th>спосіб приготування</th>
                        </tr>
                    </thead>
                    <tbody className="Recipe__tableContainer__table__body">
                        {recipe.map((prod, idx) => (
                            <tr key={`product-${idx}`}>
                                <td>{prod.label}</td>
                                <td>{`${prod.weight} г`}</td>
                                <td>{prod.fullKll}</td>
                                <td>{Math.round(prod.kll)}</td>
                                <td>{Math.round(prod.cookKll)}</td>
                                <td>
                                    <Select
                                        defaultValue={cookingOptions[defaultOptionIndex]}
                                        options={cookingOptions}
                                        onChange={selectedOption => {
                                            onCookingOptionChange(idx, selectedOption)
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr >
                            <td>Загальна цінність</td>
                            <td>{`${weight} г`}</td>
                            <td>{`${fullKll} клл`}</td>
                            <td>{`${Math.round(kll)} клл`}</td>
                            <td>{`${Math.round(dependedKll)} клл`}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )

}
export { Recipe, cookingOptions, defaultOptionIndex }