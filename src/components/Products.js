import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'
import { CartContext } from '../contexts/CartContext'

// Components
import Product from './Product';

const Products = () => {

	const { products, addItem } = useContext(ProductContext)
	const {removeItem} = useContext(CartContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					removeItem={removeItem}
				/>
			))}
		</div>
	);
};

export default Products;
