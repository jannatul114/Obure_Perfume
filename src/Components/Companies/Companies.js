import React from 'react';
import company1 from '../../images/company-1.webp';
import company2 from '../../images/company-2.webp';
import company3 from '../../images/company-3.webp';
import company4 from '../../images/company-4.webp';
import company5 from '../../images/company-5.webp';
const Companies = () => {
    return (
        <div className='container my-5'>
            <div className='mx-auto row d-flex justify-content-between align-items-center gy-3 my-5'>
                <div className='col-sm-12 col-lg-2 col-md-3 d-flex justify-content-center'>
                    <img src={company1} height="100px" alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-3 d-flex justify-content-center'>
                    <img src={company2} height="100px" alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-3 d-flex justify-content-center'>
                    <img src={company3} height="100px" alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-3 d-flex justify-content-center'>
                    <img src={company4} height="100px" alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-3 d-flex justify-content-center'>
                    <img src={company5} height="100px" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Companies;