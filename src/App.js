import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'
import { RemoveItem } from './contexts/RemoveItem'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// import Product from './components/Product';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	function removeItem(id) {
	setCart(cart.filter(item => id!==item.id))
	console.log(cart)
	}



	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
