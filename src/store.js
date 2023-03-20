import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/resturentReducers";
//create reducer
const reducers=combineReducers({

    restaurantReducer:restaurantListReducer

})
// create middileware
const middileware=[thunk]

// create store
const store=createStore(reducers,applyMiddleware(...middileware))


export default store
