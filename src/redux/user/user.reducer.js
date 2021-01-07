import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {  //ES6 ability to set a default value on a function parameter. If state is ever undefined, default value (INITIAL_STATE) will trigger. Remember 'null' is a valid value.
//Note: Every single reducer gets every single action that ever get fired, even if the actions are not related to this reducer
	switch(action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}

		default:
			return state;
	}
}	

export default userReducer;