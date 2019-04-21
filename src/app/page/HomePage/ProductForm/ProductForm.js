import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import cuid from 'cuid';
import {
    combineValidators,
    isRequired,
  } from 'revalidate';

class ProductForm extends Component {
    onFormSubmit = values => {
        if (this.props.initialValues && this.props.initialValues._id) {
            this.props.handleUpdateProduct(values);
          } else {
            const newEvent = {
              ...values,
              _id: cuid()
            };
            this.props.handleCreateProduct(newEvent);
          }
    }
    componentDidMount(){

    }
    render() {
        const { handleCancel } = this.props;
        return (
            <div>
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <Field
                name="name"
                type="text"
                required
                className="form-control"
                component="input"
                placeholder="Give your product a name"
              />
                </div>
                <div className="form-group">
                    <label htmlFor="inputName">Description</label>
                    <Field
                name="description"
                className="form-control"
                component="textarea"
              />
                </div>
       
                <div className="form-group">
                    <label htmlFor="inputName">Price</label>
                    <Field
                name="price"
                step="1000"
                min="0"
                type="number"
                required
                className="form-control"
                component="input"
                placeholder="Give your product price "
              />
                </div>
       
                <div className="form-group">
                    <label htmlFor="inputName">Category</label>
                    <Field
                name="productType"
                type="text"
                required
                className="form-control"
                component="input"
                placeholder="Give your product a category "
              />
                </div>

                <div className="form-group">
                    <label htmlFor="inputName">Brand</label>
                    <Field
                name="brand"
                type="text"
                required
                className="form-control"
                component="input"
                placeholder="Give your product a brand "
              />
                </div>

                <div className="form-group">
                    <label htmlFor="inputName">Producer</label>
                    <Field
                name="producer"
                type="text"
                className="form-control"
                component="input"
                placeholder="Give your product a producer "
              />
                </div>
                <div className="form-group">
                    <label htmlFor="inputName">Image URL</label>
                    <Field
                name="imageUrl"
                type="text"
                className="form-control"
                component="input"
                placeholder="Give your product a url image product"
              />
                </div>
            <span><button type="submit" className="btn btn-default">Submit</button></span>
             
           <span>  <button type="button" onClick={handleCancel} className="btn btn-danger">Cancel</button></span>
            </form>
            
           
            </div>
        )
    }
}
const validate = combineValidators({
    name: isRequired({ message: 'The product name is required' }),
    price: isRequired('price'),
    brand: isRequired('brand'),
  });

ProductForm = reduxForm({
    form: 'productForm',
    validate
})(ProductForm)
  

export default ProductForm
  