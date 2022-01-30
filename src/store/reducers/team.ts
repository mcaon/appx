import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  listSeasonsRequest: null,
  listSeasonsSuccess: ['seasons'],
  listLeaguesRequest: null,
  listLeaguesSuccess: ['leagues'],
  listStandingsRequest: null,
  listStandingsSuccess: ['standings'],
  listTeamPlayersSquadRequest: null,
  listTeamPlayersSquadSuccess: ['teamPlayersSquad'],
  getTeamDetailsRequest: ['teamId'],
  getTeamDetailsSuccess: ['team'],
  setSeasonSelected: ['season'],
  setLeagueSelected: ['league'],
  loadingFailed: null,
});

const INITIAL_STATE = {
  seasons: [],
  seasonSelected: null,
  leagueSelected: null,
  teamSelected: null,
  leagues: [],
  standings: [],
  teamPlayersSquad: [],
  teamTrophies: [],
  fetching: false,
};

const listSeasonsRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listSeasonsSuccess = (state = INITIAL_STATE, {seasons}: any) => ({
  ...state,
  seasons,
  fetching: false,
});

const listLeaguesRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listLeaguesSuccess = (state = INITIAL_STATE, {leagues}: any) => ({
  ...state,
  leagues,
  fetching: false,
});

const listTeamPlayersSquadRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listTeamPlayersSquadSuccess = (state = INITIAL_STATE, {teamPlayersSquad}: any) => ({
  ...state,
  teamPlayersSquad,
  fetching: false,
});

const listStandingsRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const listStandingsSuccess = (state = INITIAL_STATE, {standings}: any) => ({
  ...state,
  standings,
  fetching: false,
});

const getTeamDetailsRequest = (state = INITIAL_STATE) => ({
  ...state,
  fetching: true,
});

const getTeamDetailsSuccess = (state = INITIAL_STATE, {team}: any) => ({
  ...state,
  teamSelected: team,
  fetching: false,
});

const setSeasonSelected = (state = INITIAL_STATE, {season}: any) => ({
  ...state,
  seasonSelected: season,
});

const setLeagueSelected = (state = INITIAL_STATE, {league}: any) => ({
  ...state,
  leagueSelected: league,
});

const loadingFailed = (state = INITIAL_STATE) => ({
  ...state,
  fetching: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.LIST_SEASONS_REQUEST]: listSeasonsRequest,
  [Types.LIST_SEASONS_SUCCESS]: listSeasonsSuccess,
  [Types.LIST_LEAGUES_REQUEST]: listLeaguesRequest,
  [Types.LIST_LEAGUES_SUCCESS]: listLeaguesSuccess,
  [Types.LIST_STANDINGS_REQUEST]: listStandingsRequest,
  [Types.LIST_STANDINGS_SUCCESS]: listStandingsSuccess,
  [Types.LIST_TEAM_PLAYERS_SQUAD_REQUEST]: listTeamPlayersSquadRequest,
  [Types.LIST_TEAM_PLAYERS_SQUAD_SUCCESS]: listTeamPlayersSquadSuccess,
  [Types.GET_TEAM_DETAILS_REQUEST]: getTeamDetailsRequest,
  [Types.GET_TEAM_DETAILS_SUCCESS]: getTeamDetailsSuccess,
  [Types.SET_SEASON_SELECTED]: setSeasonSelected,
  [Types.SET_LEAGUE_SELECTED]: setLeagueSelected,
  [Types.LOADING_FAILED]: loadingFailed,
});
