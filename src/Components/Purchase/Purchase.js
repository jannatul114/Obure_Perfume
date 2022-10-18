import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Purchase.css';
import fb from '../../images/fb.png';
import pinterest from '../../images/pin.png';
import twitter from '../../images/twitter.png';
import amazon from '../../images/amazon.svg';
import payoneer from '../../images/payoneer.svg';
import paypal from '../../images/paypal.svg';
import amex from '../../images/amex.svg';
import apple from '../../images/apple.svg';
import google from '../../images/google.svg';
import bitcoin from '../../images/bitcoin.svg';
const Purchase = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])

    return (
        <div className='top_distence'>
            <div className='container d-flex justify-content-center'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img height={"350px"} src={item?.img} alt="" />
                    </div>
                    <h4 className='mt-4 text-center'>{item.name}</h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h4 className='price fw-bold'>${item?.price}</h4>
                        <strike> <h6 className='ms-3 text-secondary'>{item?.strick ? "$" + item.price : ''}</h6></strike>
                    </div>
                    <div className='w-50 mx-auto text-center'>
                        <small className='mt-4 text-secondary text-center'>{item.description}</small>

                        <div className='mx-auto my-4'>
                            <button className='btn btn-dark rounded-0 py-2 px-3'>Add To Cart</button>
                        </div>
                        <div>
                            <p><span className='fw-bold me-2'>Categories: </span> {item.categories}</p>
                            <div className='d-flex justify-content-center'>
                                <h6>Share: </h6>
                                <div className='d-flex justify-center ms-2'>
                                    <img height={'17px'} src={fb} alt="" />
                                    <img height={'17px'} className='mx-2' src={twitter} alt="" />
                                    <img height={'17px'} src={pinterest} alt="" />
                                </div>
                            </div>
                            <p className='text-center my-2'>Guaranteed checkout:</p>
                            <div className='row my-2 d-flex justify-content-between w-75 mx-auto '>
                                <img className='col-lg-2 col-md-2 col-sm-4 col-4' height={'35px'} src={amazon} alt="" />
                                <img className='col-lg-2 col-md-2 col-sm-4 col-4' height={'35px'} src={payoneer} alt="" />
                                <img className='col-lg-2 col-md-2 col-sm-4 col-4' height={'35px'} src={paypal} alt="" />
                                <img className='col-lg-2 col-md-2 col-sm-4 col-4' height={'35px'} src={amex} alt="" />
                                <img className='col-lg-2 col-md-2 col-sm-4 col-4' height={'35px'} src={apple} alt="" />
                                <img className='col-lg-2 col-md-2 col-sm-4 col-4' height={'35px'} src={google} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;