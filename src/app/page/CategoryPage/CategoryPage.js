import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '../../redux/actions/categoryActions'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'
class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          selectedCategory: null
        };
      }
      handleCancel = () => {
        this.setState({
          isOpen: false
        });
      }; 
      handleUpdate = (category) => {
        this.setState({
          isOpen: false
        });
        this.props.updateCategory(category);
      }
      handleSelect = (category) => {
        this.setState({
          isOpen: true,
          selectedCategory: category
        });
      }; 
      handleCreate = (category) => {
        this.setState({
          isOpen: false
        });
        this.props.createCategory(category)
      }
      componentDidMount(){
        this.props.fetchCategories();
      }
    render() {
      
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                {this.state.isOpen && <CategoryForm handleUpdate={this.handleUpdate} initialValues={this.state.selectedCategory} handleCreate={this.handleCreate} handleCancel={this.handleCancel} />}
                </div>

                <div className="col-md-8">
                <button onClick={() => this.setState({isOpen:true})} type="button" className="btn btn-primary">Create</button>
                    <CategoryList loading={this.props.loading} deleteCategory={this.props.deleteCategory} handleSelect={this.handleSelect} categories={this.props.categories} />
                </div>
                </div>
            </div>
        );
    }
}
const actions = {
  fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory
  }
  const mapState = (state) => ({
    loading: state.async.loading,
    categories: state.categories
  })
  export default connect(mapState, actions)(CategoryPage);