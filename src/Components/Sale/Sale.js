import React from 'react';
import sale from '../../images/sale.webp';
import './Sale.css';
const Sale = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex justify-content-center hover_skew'>
                <img src={sale} className='container-fluid ' alt="" />
            </div>
        </div>
    );
};

export default Sale;