import React, { Component } from 'react'
class ProductPage extends Component {
    componentDidMount(){
        const { match } = this.props;
        console.log(match.params.id)
    }
    render(){
        return(<h1>Product Page</h1>)
    }
}
export default ProductPage