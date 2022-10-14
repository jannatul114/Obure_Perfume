import React from 'react';
import line from '../../images/line.PNG';
const Benefits = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                <div class="row d-flex justify-content-between align-items-center gy-3 my-4">

                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <h5>Free Shipping</h5>
                        <img src={line} alt="" />
                        <p className='mt-3 text-secondary'>Which don't look even slightly believable use passage.</p>


                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <h5>Customer Support</h5>

                        <img src={line} alt="" />
                        <p className='mt-3 text-secondary'>24x7 Customer Support Which don't look even slightly.</p>


                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <h5>Secure Payment</h5>

                        <img src={line} alt="" height={"10px"} />
                        <p className='mt-3 text-secondary'>Most Secure Payment for customer Minimum Value.</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Benefits;