import './Tariff.css';
import React, { useState, useEffect, useRef } from 'react';

const Tariff = ({ name, price, speed, description }) => {
    const [selected, setSelected] = useState(false);
    const tarifRef = useRef(null);

    const handleClick = () => {
        setSelected(!selected);
    }

    const handleClickOutside = (e) => {
        if (tarifRef.current && !tarifRef.current.contains(e.target)) {
            setSelected(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <div ref={tarifRef} className={'tariff-card ' + (selected ? "selected" : "")} onClick={handleClick}>
            <div className='tariff-card__name'>{name}</div>
            <div className='tariff-card__price'><span>{price}</span> руб/мес</div>
            <div className='tariff-card__speed'>{speed}</div>
            <div className='tariff-card__description'>{description}</div>
        </div>
    );
}

export default Tariff;