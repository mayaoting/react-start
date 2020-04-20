import React from 'react';
function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ? product.name :
    <span style={{color:'red'}}>
      {product.name}
    </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable(props) {
  const filterText = props.filterText;
  const isStockOnly = props.isStockOnly;
  const rows = [];
  let lastCategory = null;
  props.products.forEach((product) => {
    if(product.name.indexOf(filterText) === -1) {
      return;
    }
    if(isStockOnly && !product.stocked) {
      return;
    }
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name}/>
    );
    lastCategory = product.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleIsStockOnly = this.handleIsStockOnly.bind(this);
  }
  handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
  }
  handleIsStockOnly(e) {
    this.props.onIsStockOnly(e.target.checked);
  }
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleFilterTextChange} placeholder="Search..."
          value={this.props.filterText}  
        />
        <p>
          <input type="checkbox" 
            checked={this.props.isStockOnly}
            onChange={this.handleIsStockOnly}
          />
          {' '} only show products in stock;
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'',
      isStockOnly: false
    };
    this.handleIsStockOnly = this.handleIsStockOnly.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({filterText:filterText})
  }
  handleIsStockOnly(isStockOnly) {
    this.setState({isStockOnly:isStockOnly});
  }
  render () {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText} 
          isStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onIsStockOnly={this.handleIsStockOnly}
        />
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText} 
          isStockOnly={this.state.isStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable;