/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

const URL = "http://localhost:3333/smurfs"

export const SMURF_POST = "SMURF_POST";
export const SMURF_PUT = "SMURF_PUT";
export const SMURF_DELETE = "SMURF_DELETE";

export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_ADD = "SMURF_ADD";
export const SMURF_ADDED = "SMURG-ADDED";
export const SMURF_FETCHED = "SMURF_FETCHED"; 
export const SMURF_ERROR = "SMURF_ERROR";

export const getSmurfs = () =>  {
  return dispatch => {
    dispatch({ type: SMURF_FETCH });

    axios
    .get(URL)
    .then(response => {
      dispatch({type: SMURF_FETCHED, payload: response.data});
    })
    .catch(error => {
      dispatch({type: SMURF_ERROR, payload: error});
    });
  }
};

export const addSmurf = (smurf) =>  {
  return dispatch => {
    dispatch({ type: SMURF_ADD });

    axios
    .post(URL, smurf)
    .then(response => {
      dispatch({type: SMURF_ADDED, payload: response.data});
    })
    .catch(error => {
      dispatch({type: SMURF_ERROR, payload: error});
    });
  }
};