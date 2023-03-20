import { Action } from "@remix-run/router";
import { R_SUCCESS,R_FAIL } from "../constants/restaurantsConstants";

//reducer function
export const restaurantListReducer=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return {restaurantList:action.payload}
        case R_FAIL:
            return {restaurantList:action.error}
        default:
            return state
    }
}