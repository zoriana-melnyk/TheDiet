import React, { useEffect, useState } from 'react'
import './Reviews.scss';

const COMMENTS = [
    'Чудовий сервіс! Дуже зручний функціонал.',
    `Клас! Це саме той сайт, що я так довго шукала.
    Дуже зручно розраховувати калорійність готових страв та складати денний раціон.`,
    `Сайт зручний, але мінус у тому, що потрібно зареєструватися для того,
    щоб зберегти створене меню або страву`,
    `Все добре. Можна легко створити страву та меню. З доставкою  є нюанси.
    Та, сайт зручний у користування`
]
function Reviews() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const { results } = await (await fetch('https://randomuser.me/api/?results=4')).json();
        setUsers(results);
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div className="Footer-reviews">
            <footer className="Reviews-block">
                <h3 className="Text-reviews-header p-5">
                    Відгуки наших клієнтів
                </h3>
                {users.map((user, idx) => {
                    return <div key={user?.name?.first} className="Reviews-container p-4">
                        <img src={user?.picture?.medium} alt="img" />
                        <div className="Reviews-container-content">
                            <h4>{user?.name?.first}</h4>
                            <blockquote>{COMMENTS[idx]}</blockquote>
                        </div>
                    </div>
                })}
            </footer>
        </div>
    );
}

export {
    Reviews
}