import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS         = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADD_SMURFS         = 'ADD_SMURFS';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';
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

export const fetchSmurf = () => dispatch =>{
  console.log('Fetching the Viliage.');
  dispatch({FETCHING_SMURFS})
  ;axios.get(`http://localhost:3333/smurfs`).then(res=>console.log(res),dispatch(
    {FETCHING_SMURFS_SUCCESS,
    payload: res.data,}
  )).catch(err => console.log(err) ,dispatch(ADD_SMURFS_FAILURE))
}

export const addSmurf = smurf = dispatch =>{
  dispatch(ADD_SMURFS)
  ;axios.then(res=>console.log(res),dispatch({
    ADD_SMURFS_SUCCESS,
    payload: res.data}))
    .catch(err =>dispatch({ADD_SMURFS_FAILURE, payload: err}))
}

