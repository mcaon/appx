import {call, put, select, takeLatest} from 'redux-saga/effects';
import {Creators, Types} from '../reducers/team';
import {setSnackbarInfos} from '../../components/Snackbar/snackbarUtils';
import {
    leaguesRequest,
    seasonsRequest,
    standingsRequest,
    teamDetailsRequest,
    teamPlayersSquadRequest,
} from '../../services/team';

export function* getSeasons() {
    try {
        // @ts-ignore
        const response: any = yield call(seasonsRequest);
        yield put(Creators.listSeasonsSuccess(response.data.response));
    } catch (error) {
        setSnackbarInfos('Erro ao atualizar listagem de Temporadas', true);
        yield put(Creators.loadingFailed());
    }
}

export function* getLeagues() {
    try {
        // @ts-ignore
        const seasonSelected = yield select(state => state.team.seasonSelected);
        // @ts-ignore
        const response: any = yield call(leaguesRequest, seasonSelected);
        yield put(Creators.listLeaguesSuccess(response.data.response));
    } catch (error) {
        setSnackbarInfos('Erro ao atualizar listagem de Ligas', true);
        yield put(Creators.loadingFailed());
    }
}

export function* getStandings() {
    try {
        // @ts-ignore
        const seasonSelected = yield select(state => state.team.seasonSelected);
        // @ts-ignore
        const leagueSelected = yield select(state => state.team.leagueSelected);
        // @ts-ignore
        const response: any = yield call(standingsRequest, seasonSelected, leagueSelected.league.id);
        if (response.data.response && response.data.response.length > 0) {
            yield put(Creators.listStandingsSuccess(response.data.response[0].league));
        } else {
            setSnackbarInfos('Não foi possível retornar a classificação solicitada', true);
            yield put(Creators.loadingFailed());
        }
    } catch (error) {
        setSnackbarInfos('Erro ao atualizar Classificação', true);
        yield put(Creators.loadingFailed());
    }
}

export function* getTeamDetails({teamId}: any) {
    try {
        // @ts-ignore
        const response: any = yield call(teamDetailsRequest, teamId);
        yield put(Creators.getTeamDetailsSuccess(response.data.response[0]));

        // MOCK
        // console.log('mock', teamId);
        // let tempTeam = new TeamDetailModel();
        // const team = new TeamModel(33, 'Manchester United', 'England', 1878, false, 'https://media.api-sports.io/football/teams/33.png');
        // const venue = new VenueModel(556, 'Old Trafford', 'Sir Matt Busby Way', 'Manchester', 76212, 'grass', 'https://media.api-sports.io/football/venues/556.png');
        // tempTeam.team = team;
        // tempTeam.venue = venue;
        // yield put(Creators.getTeamDetailsSuccess(tempTeam));
    } catch (error) {
        setSnackbarInfos('Erro ao pesquisar Time', true);
        yield put(Creators.loadingFailed());
    }
}

export function* getTeamPlayersSquad() {
    try {
        // @ts-ignore
        const {team} = yield select(state => state.team.teamSelected);
        // @ts-ignore
        const response: any = yield call(teamPlayersSquadRequest, team.id);
        yield put(Creators.listTeamPlayersSquadSuccess(response.data.response[0].players));
    } catch (error) {
        setSnackbarInfos('Erro ao pesquisar Jogadores do Time', true);
        yield put(Creators.loadingFailed());
    }
}

export const teamSagas = [
    takeLatest(Types.LIST_SEASONS_REQUEST, getSeasons),
    takeLatest(Types.LIST_LEAGUES_REQUEST, getLeagues),
    takeLatest(Types.LIST_STANDINGS_REQUEST, getStandings),
    takeLatest(Types.LIST_TEAM_PLAYERS_SQUAD_REQUEST, getTeamPlayersSquad),
    takeLatest(Types.GET_TEAM_DETAILS_REQUEST, getTeamDetails),
];
