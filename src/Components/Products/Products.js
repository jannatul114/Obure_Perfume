import React, { useEffect, useState } from 'react';
import './Product.css';
const Products = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div className='container mx-auto'>
                <div className='row d-flex justify-content-center gy-5'>
                    {
                        users.map(user => <div className='col-lg-3 col-md-6 col-sm-12 col-12  '>
                            <div className='d-flex justify-content-center'>
                                <div className='border hover_product containers'>
                                    <img src={user?.img} className="image" height="350px" alt="" />
                                    <div className='middle'>
                                        <p className='texts'>
                                            BUY
                                        </p>
                                    </div>
                                    <div className='mt-3 text-center'>
                                        <h5 className='fw-semibold'>{user?.name}</h5>
                                        <p className='price mt-2 fw-semibold'><small className='text-secondary me-2'><strike> {user?.strick ? '$' : ""}{user?.strick ? user.strick : ''}</strike></small> ${user?.price}</p>
                                        <p className='mt-2'>⭐⭐⭐⭐⭐</p>

                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;