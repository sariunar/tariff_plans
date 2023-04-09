import './Tariff.css';
import React, { useState } from 'react';
const Tariff = ({ name, price, speed, description }) => {
    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        setSelected(!selected);
        //как сделать, чтобы тариф возвращался в изначальную форму не только при клику по ней же, но и при клике за ее пределами 
    }
    return (
        <div className={'tariff-card ' + (selected ? "selected" : "")} onClick={handleClick}>
            <div className='tariff-card__name'>{name}</div>
            <div className='tariff-card__price'><span>{price}</span> руб/мес</div>
            <div className='tariff-card__speed'>{speed}</div>
            <div className='tariff-card__description'>{description}</div>
        </div>
    );
}

export default Tariff;