import React, { Component } from 'react';

class CategoryList extends Component {
    render() {
        const { categories, handleSelect, deleteCategory } = this.props;
        return (
            <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {categories && categories.map(category => <tr key={category._id}>
      <td>{category.name}</td>
      <td><button onClick={()=>handleSelect(category)}  type="button" className="btn btn-primary">Edit</button></td>
      <td><button onClick={()=>deleteCategory(category._id)} type="button" className="btn btn-danger">Remove</button></td>
    </tr> )}
  </tbody>
</table>

        )
    }
}


export default CategoryList