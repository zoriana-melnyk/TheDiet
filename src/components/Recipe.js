import React from "react";
import { Table } from "react-bootstrap";

import './Recipe.scss';

function Recipe(props) {
    return (
        <div className="Recipe">
            <div className="Recipe__tableContainer">
                <Table bordered className="Recipe__tableContainer__table">
                    <thead className="Recipe__tableContainer__table__head">
                        <tr>
                            <th>Продукт</th>
                            <th>Калорійність</th>
                            <th>Вага</th>
                        </tr>
                    </thead>
                    <tbody className="Recipe__tableContainer__table__body">
                        {props.recipe.map((prod, idx) => (
                            <tr key={`product-${idx}`}>
                                <td>{prod.label}</td>
                                <td>{prod.kll}</td>
                                <td>{`${prod.weight} г`}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )

}
export { Recipe }