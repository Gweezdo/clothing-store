import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({	//payload is an optional property
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
})