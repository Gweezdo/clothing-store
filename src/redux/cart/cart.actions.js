import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({	//payload is an optional property
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
})