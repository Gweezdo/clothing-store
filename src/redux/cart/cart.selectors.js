import { createSelector } from 'reselect';

// This function gets passed the entire redux state and returns only the cart portion of the state.
const selectCart = state => state.cart;

// createSelector() function was imported form the reselect library. It accepts 2 arguments:
// 1) Array of input selectors
// 2) Function that returns value we want out of the selector
// Seeing that we used reselect's createSelector() function to make the "selectCartItems" selector, "selectCartItems" is now a memoised selector
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
	);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  )
)

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
	)
);