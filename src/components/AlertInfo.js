import React from "react";
import { Button, Alert } from 'react-bootstrap';

function AlertInfo({ show = false, onClick }) {
    return (
        <div>
            <Alert show={show} variant="info">
                <Alert.Heading>Як зважити готову страву?</Alert.Heading>
                <p>
                    Складні страви необхідно розрахувати під час приготування.
                    Спочатку підраховується загальна калорійність сирих продуктів.
                    Далі зважується каструля, в якій буде варитися блюдо.
                    Після цього зважуємо готову страву разом з каструлею.
                    Від отриманої ваги віднімаємо вагу каструлі.
                    Таким чином, ми дізнаємося вагу готової страви.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => onClick(false)} variant="outline-success">
                        Зрозуміло
                    </Button>
                </div>
            </Alert>
        </div>
    );
}

export { AlertInfo };