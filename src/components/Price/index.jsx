import React from 'react';

const Price = ({ price, origin_price, small=true}) => {
    const strPrice = new Intl.NumberFormat('de-DE').format(price);
    let discount = 0;
    if (origin_price != price) {
        discount = Math.round(((origin_price - price) / origin_price) * 100);
    }
    let price_class = "fw-bold fs-5";
    if (!small){
        price_class = "fw-bold fs-3";
    }
    return (
        <div className='d-flex gap-2 align-items-start'>
            <span className={price_class}>{strPrice}<sup>₫</sup></span>
            {discount != 0 && (
                <span className='small fw-bolder rounded px-1'
                style={{backgroundColor: 'rgb(240, 240, 233)',}}> -{discount}%</span>
            )}
        </div>
    );
};

export default Price;
