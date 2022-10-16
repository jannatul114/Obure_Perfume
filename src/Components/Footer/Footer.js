import React from 'react';
import logo from '../../images/logo-removebg-preview.png';
import sent from '../../images/send.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='banner_bg'>
            <div className=' py-4 mt-5 container'>
                <div class="row d-flex justify-content-between align-items-center gy-3 my-4">


                    <div class="col-lg-5 col-md-5 col-sm-12 col-12">
                        <img src={logo} className="50px" alt="" />


                        <p className='my-5 text-secondary'>Subscribe to our newsleter, Enter your emil address</p>
                        <div className='d-flex align-items-center'>
                            <input className='subscribe_inp banner_bg' placeholder='example@email.com' type="text" name="subscribe" id="" />
                            <button className='subs_btn btn-dark'><img src={sent} alt="" /></button>
                        </div>

                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-12 col-12 ">
                        <div className='d-flex justify-content-center'>
                            <div>
                                <h6 className='fw-bold'>Shopping</h6>
                                <p className='mt-3'>Login</p>
                                <p>Register</p>
                                <p>Help</p>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12 col-12 ">
                        <div className='d-flex justify-content-center'>
                            <div>
                                <h6 className='fw-bold'>Account</h6>
                                <p className='mt-3'>Login</p>
                                <p>Register</p>
                                <p>Help</p>
                                <p>Support</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12 col-12 ">
                        <div className='d-flex justify-content-center'>
                            <div>
                                <h6 className='fw-bold'>Categories</h6>
                                <p className='mt-3'>Login</p>
                                <p>Register</p>
                                <p>Help</p>
                                <p>Support</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;