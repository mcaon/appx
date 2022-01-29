import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  listSeasonsRequest: null,
  listSeasonsSuccess: ['seasons'],
  listLeaguesRequest: null,
  listLeaguesSuccess: ['leagues'],
  setSeasonSelected: ['season'],
});

const INITIAL_STATE = {
  seasons: [],
  seasonSelected: null,
  leagues: [],
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

const setSeasonSelected = (state = INITIAL_STATE, {season}) => ({
  ...state,
  seasonSelected: season,
});

const listLeaguesRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listLeaguesSuccess = (state = INITIAL_STATE, {leagues}) => ({
  ...state,
  leagues,
  fetching: false,
});


export default createReducer(INITIAL_STATE, {
  [Types.LIST_SEASONS_REQUEST]: listSeasonsRequest,
  [Types.LIST_SEASONS_SUCCESS]: listSeasonsSuccess,
  [Types.LIST_LEAGUES_REQUEST]: listLeaguesRequest,
  [Types.LIST_LEAGUES_SUCCESS]: listLeaguesSuccess,
  [Types.SET_SEASON_SELECTED]: setSeasonSelected,
});
