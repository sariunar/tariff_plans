import './Tariff.css';
import React from 'react';

class Tariff extends React.Component {
    render() {
        const { name, price, speed, description, isSelected } = this.props;
        return (
            <div className={'tariff-card ' + (isSelected ? "selected" : "")}>
                <div className='tariff-card__name'>{name}</div>
                <div className='tariff-card__price'><span>{price}</span> руб/мес</div>
                <div className='tariff-card__speed'>{speed}</div>
                <div className='tariff-card__description'>{description}</div>
            </div>
        );
    }
}

export default Tariff;