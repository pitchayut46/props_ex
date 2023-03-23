import React from 'react'
import "../style/card.css"

function Card({user}){
    const {name, job, hobby} = user;
    return(
        <div className="card_container">
            <p className="card_name">Name: {name}</p>
            <p className="card_job">Job: {job}</p>
            <p className="card_hobby">Hobby: {hobby}</p>

        </div>
    );
}

export default Card;