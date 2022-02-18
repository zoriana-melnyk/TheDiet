import React from "react";
import { Table } from "react-bootstrap";

import './Recipe.scss';

function Recipe(props) {

    // const [showResult, setShowResult] = useState([]);

    // const calculation = (e) => {
    //     e.preventDefault();
    //     // const isFormValid = formValidation(); // boolean
    //     // if (!isFormValid) {
    //     //     return;
    //     // }
    //     const createdRecipe = props.find((prod, idx) => prod.kll === Number(formValues.kll));
    //     setShowResult([...showResult, { ...formValues, ...createdRecipe }]);
    // }


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
                        <tr >
                            <td>Загальна цінність</td>
                            <td>{
                                `${props.recipe.reduce(
                                    (acc, el) => { return acc + el.kll },
                                    0
                                )} клл`
                            }</td>
                            <td>{`${props.recipe.reduce(
                                (acc, el) => { return acc + el.weight },
                                0
                            )} г`}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )

}
export { Recipe }