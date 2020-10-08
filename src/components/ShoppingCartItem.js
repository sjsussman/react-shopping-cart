import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {

	const {removeItem} = useContext(CartContext)

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

// import React, { useContext } from 'react';
// import { RemoveItem } from '../contexts/RemoveItem'

// const Item = (props) => {

// 	const {removeItem} = useContext(RemoveItem)

// 	return (
// 		<div className="shopping-cart_item">
// 			<img src={props.products.image} alt={`${props.product.title} book`} />

// 			<div>
// 				<h1>{props.products.title}</h1>
// 				<p>$ {props.products.price}</p>
// 				<button>Remove from cart</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Item;


