import React, { useEffect, useState } from 'react'
import './Reviews.scss';

import { useLittera } from "@assembless/react-littera";
import { reviewsTranslation } from "../ReviewsTranslation";

function Reviews() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const { results } = await (await fetch('https://randomuser.me/api/?results=4')).json();
        setUsers(results);
    }
    useEffect(() => {
        getUsers();
    }, [])

    const translated = useLittera(reviewsTranslation);

    const COMMENTS = [
        translated.first,
        translated.second,
        translated.third,
        translated.fourth
    ]

    return (
        <div className="Footer-reviews">
            <footer className="Reviews-block">
                <h3 className="Text-reviews-header p-5">
                    {translated.header}
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