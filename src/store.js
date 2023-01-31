import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
//create reducer
const reducers=combineReducers({

})
// create middileware
const middileware=[thunk]

// create store
const store=createStore(reducers,applyMiddleware(...middileware))


export default store
