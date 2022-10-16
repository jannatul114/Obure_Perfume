import React from 'react';
import discount1 from '../../images/discount-1.avif';
import discount3 from '../../images/discount-2.avif';
import discount2 from '../../images/discount-2.webp';
const Offer = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='row d-flex justify-between gy-4 align-items-center'>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={discount1} height="260px" className="container-fluid" alt="" />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={discount2} height="260px" className="container-fluid" alt="" />
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <img src={discount3} height="260px" className="container-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;