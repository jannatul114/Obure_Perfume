import React, { useEffect, useState } from 'react';
import './Product.css';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { Navigate, useNavigate } from 'react-router-dom';
const Products = () => {
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className='container mx-auto'>
                <div className='row d-flex justify-content-center gy-5'>
                    {
                        products.map(product => <div key={product._id} className='col-lg-3 col-md-6 col-sm-12 col-12  '>
                            <div className='d-flex justify-content-center'>
                                <div className='border hover_product containers'>
                                    <img src={product?.img} className="image" height="290px" alt="" />
                                    <div className='middle'>
                                        <div className='texts bg-white   shadow-lg border'>
                                            <button onClick={() => handlePurchase(product._id)} data-tip data-for="seeDetailse" className='hover_btn shadow-lg'><FaSearch /></button>
                                            <ReactTooltip id="seeDetailse" place="top" effect="solid">
                                                Detailse
                                            </ReactTooltip>


                                            <button data-tip data-for="addCart" className='hover_btn shadow-lg' ><FaShoppingCart /></button>
                                            <ReactTooltip id="addCart" place="top" effect="solid">
                                                Cart
                                            </ReactTooltip>

                                            <button data-tip data-for="save" className='hover_btn shadow-lg'><FaHeart /></button>

                                            <ReactTooltip id="save" place="top" effect="solid">
                                                Save
                                            </ReactTooltip>
                                        </div>
                                    </div>
                                    <div className='mt-3 text-center'>
                                        <h5 className='fw-semibold'>{product?.name}</h5>
                                        <p className='price mt-2 fw-semibold'><small className='text-secondary me-2'><strike> {product?.strick ? '$' : ""}{product?.strick ? product.strick : ''}</strike></small> ${product?.price}</p>
                                        {/* <p className='mt-2'>⭐⭐⭐⭐⭐</p> */}

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