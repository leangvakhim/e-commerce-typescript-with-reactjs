// import React from 'react'
import { useState, useEffect } from 'react';
import cross from '../../asset/images/cross.svg';
import axios from 'axios';
import { API_ENDPOINTS } from '../APIConfig';
import { useCart } from '../CartContext';
import Swal from 'sweetalert2';

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
    quantity: number;
	[key: string]: any;
}

const ShopProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { addToCart } = useCart();

    useEffect(() => {
        axios.get(API_ENDPOINTS.getProduct)
            .then(res => {
                const filtered = res.data;
                setProducts(filtered);
            })
            .catch(err => console.error(err));
    }, []);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    return (
        <div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	<div className="row">

                {products.map((product, index) => (
                    <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                        <a className="product-item" >
                            <img src={product.image} style={{
									height: '200px'
								}} className="img-fluid product-thumbnail"/>
                            <h3
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                                className="product-title">{product.title}</h3>
                            <strong className="product-price">{product.price}</strong>

                            <span
                                onClick={() => {
                                    handleAddToCart(product);
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Added to Cart',
                                        text: `Product has been added to your cart.`,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }}
                                className="icon-cross">
                                <img src={cross} className="img-fluid"/>
                            </span>
                        </a>
                    </div>
                ))}

		      	</div>
		    </div>
		</div>
    )
}

export default ShopProduct