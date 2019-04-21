import React, { Component } from 'react'
import axios from 'axios';
import { API } from '../../../config'
import './ProductPage.css'


class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            product: null
        };
    }
    componentDidMount() {
        let axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            crossDomain: true
        };
        axios.get(`${API}/products/1`, axiosConfig)
            .then(res => {
                this.setState({ loading: false, product: res.data })
            })
    }
    render() {
        const { product, loading } = this.state
        if (loading) return (<div className="container"> <h1>Loading...</h1> </div>)
        return (
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img alt="Title Product" src={product && product.imageUrl} /></div>

                                </div>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product && product.name}</h3>

                                <p className="product-description">{product && product.description}</p>
                                <h4 className="price">current price: <span>{product && product.price} ₫</span></h4>
                                <p className="product-description"><b>Category:</b> {product && product.productType}</p>
                                <p className="product-description"><b>Brand:</b> {product && product.brand}</p>
                                <p className="product-description"><b>Producer:</b> {product && product.producer}</p>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>

                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProductPage