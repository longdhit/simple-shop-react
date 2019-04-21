import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts, deleteProduct, createProduct, updateProduct } from '../../redux/actions/productActions'
import { fetchCategories } from '../../redux/actions/categoryActions'
import ProductForm from './ProductForm/ProductForm'
import ProductList from './ProductList/ProductList'
import './HomePage.css'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list-group-item',
      filterProducts: [],
      isFilter: false,
      filterKey: '',
      typeKey: '',
      minPrice: 0,
      maxPrice: 100000000,
      currentPage: 1,
      products: [],
      lastPage: 1,
      productPerPage: 6,
      isOpen: false,
      selectedProduct: null
    };
  }
  prevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }
  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }


  update = (filterKey, typeKey, minPrice, maxPrice) => {
    let updatedList = this.props.products;
    updatedList = updatedList.filter(function (product) {
      return (
        (product.productType && product.productType.search(typeKey) !== -1) &&
        (product.name.toLowerCase().search(filterKey.toLowerCase()) !== -1) && 
        (parseFloat(product.price) >= minPrice) &&
        (parseFloat(product.price) <= maxPrice)
    )});
    this.setState({ filterProducts: updatedList, isFilter: true });
  }
  filterProductType = (productType) => {
    const { filterKey, minPrice, maxPrice } = this.state;
    this.setState({ typeKey: productType });
    this.update(filterKey, productType, minPrice, maxPrice)
  }
  filterList = (event) => {
    const { typeKey, minPrice, maxPrice } = this.state;
    this.setState({ filterKey: event.target.value });
    this.update(event.target.value, typeKey, minPrice, maxPrice)
  }
  setMinPrice = (event) => {
    const { typeKey, filterKey, maxPrice } = this.state;
    this.setState({ minPrice: event.target.value });
    this.update(filterKey, typeKey, event.target.value , maxPrice)
  }
  setMaxPrice = (event) => {
    const { typeKey, minPrice, filterKey } = this.state;
    this.setState({ maxPrice: event.target.value });
    this.update(filterKey, typeKey, minPrice , event.target.value)
  }
  reset = () => {
    this.setState({
      filterProducts: [],
      isFilter: false,
      filterKey: '',
      typeKey: '',
      minPrice: 0,
      maxPrice: 100000000,
      currentPage: 1,
      lastPage: 1,
      productPerPage: 6
    })
  }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  handleOpenProduct = (productToOpen) => {
    this.setState({
      isOpen: true,
      selectedProduct: productToOpen
    });
  } 
  handleUpdateProduct = (product) => {
    this.setState({
      isOpen: false
    });
    this.props.updateProduct(product);
  }  
  handleCreateProduct = (product) => {
    this.setState({
      isOpen: false
    });
    this.props.createProduct(product);
  }  
  handleDeleteProduct = (productId) => () => {
    this.props.deleteProduct(productId);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }
  componentWillReceiveProps(nextProps){
    this.setState({products:nextProps.products})
  }
  render() {
    const { categories, products } = this.props;
    const { currentPage, productPerPage, filterKey, isFilter, filterProducts } = this.state;
    let renderProducts = products;
    if (isFilter) {
      renderProducts = filterProducts;
    }
    const numPages = Math.ceil(renderProducts.length / productPerPage);
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = renderProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          <button onClick={() => this.reset()} type="button" className="btn btn-danger btn-lg">Reset Filter</button>
            <h3>Search</h3>

            <div className="form-group">
              <input value={this.state.filterKey} onChange={this.filterList} type="text" className="form-control" id="searchForm" placeholder="Search" />
            </div>

            <h3>Filter by product type</h3>
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    Min
      </span>
                  <input id="minForm" value={this.state.minPrice} onChange={this.setMinPrice} type="number" min="0" step="100000" className="form-control" placeholder="0" aria-label="..." />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    Max
      </span>
                  <input id="maxForm" value={this.state.maxPrice} onChange={this.setMaxPrice} type="number" min="0" step="100000" className="form-control" placeholder="100000000" aria-label="..." />
                </div>
              </div>
            </div>
            <br />
            <h3>Filter by product type</h3>
            <ul className="list-group">
              {categories && categories.map(category =>
      // eslint-disable-next-line
                <li key={category._id} className="list-group-item"><a href="javascript:void(0)" onClick={() => this.filterProductType(category.name)}>{category.name}</a></li>
              )}
            </ul>

          </div>
          <div className="col-md-5">
            <div className="well well-sm">
              <strong>Display </strong>
              <div className="btn-group">
                <button onClick={() => this.setState({
                  view: 'list-group-item'
                })} id="list" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th-list">
                  </span>List</button> <button onClick={() => this.setState({
                    view: 'grid-group-item'
                  })} id="grid" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th" />Grid</button>
              </div>
            </div>
            <div>

            <nav aria-label="...">
                <ul className="pager">
                  <li className={'previous ' + (currentPage === 1 && 'disabled')}><button className="btn btn-default" disabled={currentPage === 1} onClick={this.prevPage}><span aria-hidden="true">←</span> Older</button></li>
                  <li className={'next ' + (currentPage === numPages && 'disabled')}><button className="btn btn-default" disabled={currentPage === numPages} onClick={this.nextPage}>Newer <span aria-hidden="true">→</span></button></li>
                </ul>
              </nav>

            </div>
            <div>


            </div>

        <ProductList 
          products={currentProducts}
          view={this.state.view}
          handleOpenProduct={this.handleOpenProduct}
          deleteProduct={this.handleDeleteProduct}
          />
              <div className="clearfix" />
             
              <nav aria-label="...">
                <ul className="pager">
                  <li className={'previous ' + (currentPage === 1 && 'disabled')}><button className="btn btn-default" disabled={currentPage === 1} onClick={this.prevPage}><span aria-hidden="true">←</span> Older</button></li>
                  <li className={'next ' + (currentPage === numPages && 'disabled')}><button className="btn btn-default" disabled={currentPage === numPages} onClick={this.nextPage}>Newer <span aria-hidden="true">→</span></button></li>
                  <p>Page {currentPage} / {numPages}</p>
                  <p>Products per page: {productPerPage} </p>
                  {filterKey !== '' && <p>Searching '{filterKey}'</p>}
                </ul>
              </nav>

      


          </div>

          <div className="col-md-4">
          <button onClick={() => this.setState({isOpen:true})} type="button" className="btn btn-success btn-lg">Create Product</button>
          {this.state.isOpen && <ProductForm 
          handleUpdateProduct={this.handleUpdateProduct}
          handleCreateProduct={this.handleCreateProduct}
            initialValues={this.state.selectedProduct} 
            handleCancel={this.handleCancel} 
            />}
          </div>

        </div>

      </div>


    )
  }
}
const actions = {
  fetchProducts,
  fetchCategories,
  deleteProduct,
  createProduct,
  updateProduct
}
const mapState = (state) => ({
  products: state.products,
  categories: state.categories
})
export default connect(mapState, actions)(HomePage);