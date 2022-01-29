import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  listSeasonsRequest: null,
  listSeasonsSuccess: ['seasons'],
  listLeaguesRequest: null,
  listLeaguesSuccess: ['leagues'],
  listStandingsRequest: null,
  listStandingsSuccess: ['standings'],
  setSeasonSelected: ['season'],
  setLeagueSelected: ['league'],
});

const INITIAL_STATE = {
  seasons: [],
  seasonSelected: null,
  leagueSelected: null,
  leagues: [],
  standings: [],
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

const listLeaguesRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listLeaguesSuccess = (state = INITIAL_STATE, {leagues}) => ({
  ...state,
  leagues,
  fetching: false,
});

const listStandingsRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listStandingsSuccess = (state = INITIAL_STATE, {standings}) => ({
  ...state,
  standings,
  fetching: false,
});

const setSeasonSelected = (state = INITIAL_STATE, {season}) => ({
  ...state,
  seasonSelected: season,
});

const setLeagueSelected = (state = INITIAL_STATE, {league}) => ({
  ...state,
  leagueSelected: league,
});


export default createReducer(INITIAL_STATE, {
  [Types.LIST_SEASONS_REQUEST]: listSeasonsRequest,
  [Types.LIST_SEASONS_SUCCESS]: listSeasonsSuccess,
  [Types.LIST_LEAGUES_REQUEST]: listLeaguesRequest,
  [Types.LIST_LEAGUES_SUCCESS]: listLeaguesSuccess,
  [Types.LIST_STANDINGS_REQUEST]: listStandingsRequest,
  [Types.LIST_STANDINGS_SUCCESS]: listStandingsSuccess,
  [Types.SET_SEASON_SELECTED]: setSeasonSelected,
  [Types.SET_LEAGUE_SELECTED]: setLeagueSelected,
});
