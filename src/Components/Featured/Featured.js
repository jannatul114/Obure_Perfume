import React from 'react';
import product1 from '../../images/product-1.webp';
import product2 from '../../images/product-2.webp';
import product3 from '../../images/product-3.webp';
import product4 from '../../images/product-4.webp';
import product5 from '../../images/product-5.webp';
import product6 from '../../images/product-6.webp';
import line from '../../images/line.PNG';
import featured_img from './../../images/fetured-section.webp';
import './Featured.css';
const Featured = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='container my-5'>
                <h1>Featured Sale!</h1>
                <img src={line} className='mb-5' alt="" />
                <div className='row d-flex'>
                    <div className='col-lg-8 col-md-12 col-sm-12 col-12'>

                        <div className='row gy-5 justify-content-between'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='d-flex'>
                                    <img src={product1} height="110px" alt="" />
                                    <div className='ms-3'>
                                        <h6>Nautica Voyage</h6>
                                        <strike><small className='text-secondary me-3'>$21.00</small></strike><small className='price'>$19.00</small>
                                        <p><small>⭐⭐⭐⭐⭐</small></p>
                                    </div>
                                </div>
                                <hr />
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='d-flex'>
                                    <img src={product2} height="110px" alt="" />
                                    <div className='ms-3'>
                                        <h6>Jean Paul Gaultier</h6>
                                        <small className='price'>$50.00</small>
                                        <p><small>⭐⭐⭐⭐⭐</small></p>
                                    </div>
                                </div>
                                <hr />
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='d-flex'>
                                    <img src={product3} height="110px" alt="" />
                                    <div className='ms-3'>
                                        <h6>Jean Paul Gaultier</h6>
                                        <strike><small className='text-secondary me-3'>$50.00</small></strike><small className='price'>$21.00</small>
                                        <p><small>⭐⭐⭐⭐⭐</small></p>
                                    </div>
                                </div>
                                <hr />
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='d-flex'>
                                    <img src={product4} height="110px" alt="" />
                                    <div className='ms-3'>
                                        <h6>Mont Blanc Explorer</h6>
                                        <strike><small className='text-secondary me-3'>$70.00</small></strike><small className='price'>$50.00</small>
                                        <p><small>⭐⭐⭐⭐⭐</small></p>
                                    </div>
                                </div>
                                <hr />
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='d-flex'>
                                    <img src={product5} height="110px" alt="" />
                                    <div className='ms-3'>
                                        <h6>Nautica Voyage</h6>
                                        <small className='price'>$60.00</small>
                                        <p><small>⭐⭐⭐⭐⭐</small></p>
                                    </div>
                                </div>

                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='d-flex'>
                                    <img src={product6} height="110px" alt="" />
                                    <div className='ms-3'>
                                        <h6>Coach For Men</h6>
                                        <strike><small className='text-secondary me-3'>$88.00</small></strike><small className='price'>$55.00</small>
                                        <p><small>⭐⭐⭐⭐⭐</small></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                        <img src={featured_img} className="container-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;