import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import cuid from 'cuid';
import {
    combineValidators,
    isRequired,
} from 'revalidate';

class CategoryForm extends Component {
    onFormSubmit = values => {
        if (this.props.initialValues && this.props.initialValues._id) {
            this.props.handleUpdate(values);
          } else {
            const newEvent = {
              ...values,
              _id: cuid()
            };
            this.props.handleCreate(newEvent);
          }
    }
    render() {
        const { handleCancel } = this.props;
        return (
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

                <span><button type="submit" className="btn btn-default">Submit</button></span>

                <span>  <button type="button" onClick={handleCancel} className="btn btn-danger">Cancel</button></span>
            </form>

        )
    }
}
const validate = combineValidators({
    name: isRequired({ message: 'The category name is required' }),
});

CategoryForm = reduxForm({
    form: 'categoryForm',
    validate
})(CategoryForm)


export default CategoryForm