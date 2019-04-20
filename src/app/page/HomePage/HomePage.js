import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions'
import { fetchProductTypes } from '../../redux/actions/productTypeActions'
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
      lastPage: 1,
      productPerPage: 6
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
        (product.name.toLowerCase().search(filterKey.toLowerCase()) !== -1)) && 
        (product.price > minPrice && product.price < maxPrice)
    });
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
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchProductTypes();
  }
  render() {
    const { products, productTypes } = this.props;
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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <button onClick={() => this.reset()} type="button" class="btn btn-danger">Reset</button>
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
              {productTypes && productTypes.map(productType =>
                <li className="list-group-item"><a href="javascript:void(0)" onClick={() => this.filterProductType(productType.name)}>{productType.name}</a></li>
              )}
            </ul>

          </div>
          <div className="col-md-8">
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


            </div>
            <div>


            </div>
            <div id="products" className="row list-group">
              {currentProducts.length <= 0 && <h3>No product found</h3>}
              {currentProducts.length > 0 && currentProducts.map(product => <div key={product._id} className={'item  col-xs-4 col-lg-4 ' + this.state.view}>
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
                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
              )}
              <div className="clearfix" />
              <nav aria-label="...">
                <ul className="pager">
                  <li className={'previous ' + (currentPage === 1 && 'disabled')}><button className="btn btn-default" disabled={currentPage == 1} onClick={this.prevPage}><span aria-hidden="true">←</span> Older</button></li>
                  <li className={'next ' + (currentPage === numPages && 'disabled')}><button className="btn btn-default" disabled={currentPage == numPages} onClick={this.nextPage}>Newer <span aria-hidden="true">→</span></button></li>
                  <p>Page {currentPage} / {numPages}</p>
                  <p>Products per page: {productPerPage} </p>
                  {filterKey !== '' && <p>Searching '{filterKey}'</p>}
                </ul>
              </nav>
            </div>
          </div>

        </div>

      </div>


    )
  }
}
const actions = {
  fetchProducts,
  fetchProductTypes
}
const mapState = (state) => ({
  products: state.product,
  productTypes: state.productType
})
export default connect(mapState, actions)(HomePage);