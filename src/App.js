import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/Product'
import Menu from './components/Menu/Menu'


const AVAILABLE_PRODUCTS = [
    {name: 'Hamburger', price: 100, label: 'Hamburger', className: 'Hamburger'},
    {name: 'Coffee', price: 50, label: 'Coffee', className: 'Coffee'},
    {name: 'Cheeseburger', price: 120, label: 'Cheeseburger', className: 'Cheeseburger'},
    {name: 'Fries', price: 70, label: 'Fries', className: 'Fries'},
    {name: 'Tea', price: 30, label: 'Tea', className: 'Tea'},
    {name: 'Cola', price: 35, label: 'Cola', className: 'Cola'}
];

const DEFAULT_PRODUCTS = [
    {}
];


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.state.products = AVAILABLE_PRODUCTS.map(item => {
            let product = {...item};

            let defaultProduct = DEFAULT_PRODUCTS.find(item => product.name === item.name);
            product.amount = defaultProduct ? defaultProduct.amount : 0;
            product.total = product.price * product.amount;

            return product;
        });

    };

    addProducts = (name) => {
        let product = {...this.state.products[name]};

        let price = AVAILABLE_PRODUCTS.find(item => item.name === name).price;
        product.count += 1;
        product.total = product.count * price;

        let products = {...this.state.products};

        products[name] = product;

        let state = {...this.state};

        state.products = products;

        this.setState(state);
    };
    removeProduct = (name) => {
        let product = {...this.state.products[name]};
        let price = AVAILABLE_PRODUCTS.find(item => item.name === name).price;
        if (product.count > 0) {
            product.count -= 1;
        }
        product.total = product.count * price;

        let products = {...this.state.products};
        products[name] = product;

        let state = {...this.state};
        state.products = products;

        this.setState(state);
    };

        render()
        {
            return (
                <div className="App">
                    <Menu>
                        {this.state.products.map(item => <Product key={item.name} product={item} name={item.name}
                                                              price={item.price} addFood={this.addProducts}/>)}
                    </Menu>
                </div>
            );
        }
}
export default App;
