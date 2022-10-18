import React from 'react';
import logo from '../../images/logo.PNG';
import search from '../../images/search.PNG';
import seetings from '../../images/settings.PNG';
import './Navbar.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white px-5 navbar-light py-2 shadow-sm fixed-top mb-3">
                <div className="container-fluid">
                    <img src={logo} height="50px" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={'/home'} className="nav-link  text-dark" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark ms-2" href="#">Shop</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ms-2 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item " href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-2 text-dark" href="#" tabindex="-1" aria-disabled="true">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-2 text-dark" href="#" tabindex="-1" aria-disabled="true">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark ms-2 " href="#" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button data-tip data-for="addCart" className='me-4 hover_icon'>
                                <FaShoppingCart />
                            </button>
                            <ReactTooltip id="addCart" place="bottom" effect="solid">
                                Cart
                            </ReactTooltip>


                            <button data-tip data-for="save" className='hover_icon'> <FaHeart /></button>
                            <ReactTooltip id="save" place="bottom" effect="solid">
                                Saved items
                            </ReactTooltip>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;