import React from 'react';
import banner from '../../images/banner-1.webp';
import banner2 from '../../images/banner-2.webp';
import './Banner.css';
const Banner = () => {
    return (
        <div className='pt-5'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active banner_bg banner_height pt-3">
                        <div class="row d-flex justify-content-center align-items-center gy-4">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div className='mx-auto w-75 me-5'>
                                    <div> <h1 className='banner_text fw-bold '>Fregrance</h1>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum expedita alias ipsum ut eos </p>
                                        <button className='banner_btn'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <img data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" src={banner} class="d-block w-75" alt="..." />
                            </div>
                        </div>
                    </div>


                    <div class="carousel-item banner_bg banner_height pt-3">
                        <div class="row  d-flex justify-content-center align-items-center gy-4">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12 " data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div className='mx-auto w-75  me-5'>
                                    <div> <h1 className='banner_text fw-bold '>Best Perfume</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum expedita alias ipsum ut eos</p>
                                        <button className='banner_btn'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <img data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" src={banner2} class="d-block w-75" alt="..." />
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item banner_bg banner_height pt-3">
                        <div class="row  d-flex justify-content-center align-items-center gy-4">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">

                                <div className='mx-auto w-75  me-5'>
                                    <div> <h1 className='banner_text fw-bold '>Fregrance</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum expedita alias ipsum ut eos</p>
                                        <button className='banner_btn'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12" >
                                <img data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" src={banner} class="d-block w-75" alt="..." />
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item banner_bg banner_height pt-3">
                        <div class="row  d-flex justify-content-center align-items-center gy-4">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div className='mx-auto w-75  me-5'>
                                    <div> <h1 className='banner_text fw-bold '>Best Perfume</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum expedita alias ipsum ut eos</p>
                                        <button className='banner_btn'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <img src={banner2} class="d-block w-75" alt="..." />
                            </div>


                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark " aria-hidden="true"></span>
                    <span class="visually-hidden ">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;