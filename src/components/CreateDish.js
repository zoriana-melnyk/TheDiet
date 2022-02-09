import React from "react";

import './CreateDish.scss';



// import { Dropdown, Button } from 'react-bootstrap';

function CreateDish() {
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
                <div className="CreateDish__mainBlock__Dish">
                    <div className="CreateDish__mainBlock__Dish__item">

                    </div>

                </div>
            </div>
        </div>
    );
}
export { CreateDish };