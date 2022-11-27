import React from 'react';
import './SingleProduct.css';
import ReactModal from './../ReactModal/ReactModal';

const SingleProduct = (props) => {
    const {setCountCart} = props;
    const {title,category,description,image,price,rating} = props.product;

    return (
        <div data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1500" className='col-md-4'>
            <div className="card p-2" >
                <img src={image} alt="" className='w-50 m-auto'/>
                <h1>Single Product{title.slice(0, 10)}</h1>
                <div className="d-flex justify-content-around">
                <button className="btn btn-success" onClick={setCountCart} >Add To Cart</button>
                <button className="btn btn-danger">Delete</button>
                    {/* <button className="btn btn-info">Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;