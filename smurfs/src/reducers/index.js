/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS
      , FETCHING_SMURFS_SUCCESS
      , FETCHING_SMURFS_FAILURE
      , ADD_SMURFS
      , ADD_SMURFS_SUCCESS
      , ADD_SMURFS_FAILURE      } from './../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS :
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
      }
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }

    case ADD_SMURFS:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      }
    case ADD_SMURFS_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      }
      default:
      return state;
    }}

    export default smurfReducer;