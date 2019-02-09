import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/Product'
import Menu from './components/Menu/Menu'
import Order from './components/Order/Order'
import Total from './components/Order/OrderControl/Total'
import OrderControl from './components/Order/OrderControl/OrderControl'
import { Container, Row, Col } from 'reactstrap';



const AVAILABLE_PRODUCTS = [
    {name: 'Hamburger', price: 100, label: 'Hamburger', className: 'Hamburger'},
    {name: 'Coffee', price: 50, label: 'Coffee', className: 'Coffee'},
    {name: 'Cheeseburger', price: 120, label: 'Cheeseburger', className: 'Cheeseburger'},
    {name: 'Fries', price: 70, label: 'Fries', className: 'Fries'},
    {name: 'Tea', price: 30, label: 'Tea', className: 'Tea'},
    {name: 'Cola', price: 35, label: 'Cola', className: 'Cola'}
];

const ORDER_PRODUCTS = [
    ];


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state.products = AVAILABLE_PRODUCTS.map(item => {
            let product = {...item};

            let defaultProduct = ORDER_PRODUCTS.find(item => product.name === item.name);
            product.count = defaultProduct ? defaultProduct.count : 0;
            product.total = product.price * product.count;

            return product;
        });

    };

    changeProduct = (name, count) => {
        let index = this.state.products.findIndex(item => item.name === name);
        let product = {...this.state.products[index]};
        product.count += count;
        if(product.count < 0) product.count = 0;
        product.total = product.count * product.price;
        let products = [...this.state.products];
        products[index] = product;
        let state = {...this.state, products};
        this.setState(state);
    }

    getCount = () => {
        let count = 0;
        for(let i = 0; i < this.state.products.length; i++) {
          count += this.state.products[i].count;
        }
        return count;
    }
    getTotal = () => {
        let total = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            total += this.state.products[i].total;
        }
        return total;
    }
    render() {
    return (
      <div className="App">
        <Container className="mt-5">
          <Row>
            <Col md="6">
              <h2>All:</h2>
              <Order getCount={this.getCount}>
                {this.state.products.map(item => <OrderControl product={item} key={item.name} changeProduct={this.changeProduct} getCount={this.getCount()} />)}
                <Total getTotal={this.getTotal} />
              </Order>
            </Col>
            <Col md="6">
              <h2>Menu</h2>
              <Menu>
                {this.state.products.map(item => <Product key={item.name} product={item} name = {item.name} price={item.price} changeProduct={this.changeProduct}  />)}
              </Menu>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
export default App;
