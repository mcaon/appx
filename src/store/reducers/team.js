import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  listSeasonsRequest: null,
  listSeasonsSuccess: ['seasons'],
});

const INITIAL_STATE = {
  seasons: [],
  fetching: false,
};

const listSeasonsRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listSeasonsSuccess = (state = INITIAL_STATE, {seasons}) => ({
  ...state,
  seasons,
  fetching: false,
});


export default createReducer(INITIAL_STATE, {
  [Types.LIST_SEASONS_REQUEST]: listSeasonsRequest,
  [Types.LIST_SEASONS_SUCCESS]: listSeasonsSuccess,
});
