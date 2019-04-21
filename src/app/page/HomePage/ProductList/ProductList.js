import React, { Component } from 'react';


class ProductList extends Component {
  render() {
    const { products, handleOpenProduct, deleteProduct } = this.props;

    return (
        <div id="products" className="row list-group">
    
    {products.length <= 0 && <h3>No product found</h3>}
        {products.length > 0 && products.map(product => 
        <div key={product._id} className={'item  col-xs-4 col-lg-4 ' + this.props.view}>
          <div className="thumbnail">
            <img style={{ maxWidth: 200 }} className="group list-group-image" src={product.imageUrl} alt={product.name} />
            <div className="caption">
              <h4 className="group inner list-group-item-heading">
                {product.name}</h4>
              <p className="group inner list-group-item-text">
                {product.description}</p>
               <p className="group inner list-group-item-text">
                Type:  {product.productType}</p>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <p className="lead">
                    {product.price} ₫</p>
                </div>

                <div className="col-xs-12 col-md-6">


  <span> <button type="button" className="btn btn-success">Add to cart</button>  </span>
  <span><button type="button" onClick={()=>handleOpenProduct(product)} className="btn btn-warning">Edit</button> </span>
  <span> <button type="button" onClick={deleteProduct(product._id)}  className="btn btn-danger">Delete</button>  </span>
 

                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        )}
  
  </div>
    );
  }
}

export default ProductList;
