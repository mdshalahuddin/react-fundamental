import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import SingleProduct from './../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const {setCountCart} = props;
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }, [])
    // console.log(products);
    return (
        <div>
            <h1>All Products</h1>
            <div className="row">
            {
                products.map(product => <SingleProduct
                    key={product.id}
                    product={product}
                    setCountCart={setCountCart}
                ></SingleProduct>)
           }
            </div>
        </div>
    );
};

export default AllProducts;