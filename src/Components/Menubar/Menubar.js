import React from 'react';
import './Menubar.css';
import logo from '../../Images/E-Shop.svg'

const Menubar = (props) => {
   
    return (
        <div>
            <div className="container-fluid bg-info py-2">
                <div className="container">
                <div className="row ">
                    <div className="col-md-2 p-1">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-md-10 menu-container d-flex justify-content-end ">
                        <li className='items p-1'>Home</li>
                        <li className='items p-1'>Contact</li>
                        <li className='items p-1'>Cart<sup>{props.count }</sup></li>
                        <li className='items p-1'>Login</li>
                    </div>
                </div>
               </div>
           </div>
        </div>
    );
};

export default Menubar;
