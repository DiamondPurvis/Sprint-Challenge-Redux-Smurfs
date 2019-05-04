/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURF_FETCH }  from '../actions';
import { SMURF_FETCHED } from '../actions';
import { SMURF_ADD } from '../actions';
import { SMURF_ADDED } from '../actions';
import { SMURF_ERROR } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
   smurfs: [],
   smurfFetch: false,
   smurfFetched: false,
   smurfAdd: false,
   smurfAdded: false,
   error: null
 }

 export const smurfReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SMURF_FETCH:
      return {...state, smurfFetch: true };
    case SMURF_FETCHED:
      return {...state, smurfFetch: false, smurfFetched: true, smurfs: payload };
    case SMURF_ADD:
      return {...state, smurfAdd: true };
    case SMURF_ADDED:
      return {...state, smurfAdd: false, smurfAdded: true, smurfs: payload };
    case SMURF_ERROR:
      return {...state, error: payload };
    default:
      return state
  }
} 
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
