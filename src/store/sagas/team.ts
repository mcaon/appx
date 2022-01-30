import {call, put, select, takeLatest} from 'redux-saga/effects';
import {Creators, Types} from '../reducers/team';
import {setSnackbarInfos} from '../../components/Snackbar/snackbarUtils';
import {leaguesRequest, seasonsRequest, standingsRequest, teamDetailsRequest} from '../../services/team';

export function* getSeasons() {
    try {
        // @ts-ignore
        const response: any = yield call(seasonsRequest);
        yield put(Creators.listSeasonsSuccess(response.data.response));
    } catch (error) {
        setSnackbarInfos('Erro ao atualizar listagem de Temporadas', true);
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
        }
    } catch (error) {
        setSnackbarInfos('Erro ao atualizar Classificação', true);
    }
}

export function* getTeamDetails({teamId}: any) {
    try {
        // @ts-ignore
        const response: any = yield call(teamDetailsRequest, teamId);
        yield put(Creators.getTeamDetailsSuccess(response.data.response[0].team));
    } catch (error) {
        setSnackbarInfos('Erro ao pesquisar Time', true);
    }
}

export const teamSagas = [
    takeLatest(Types.LIST_SEASONS_REQUEST, getSeasons),
    takeLatest(Types.LIST_LEAGUES_REQUEST, getLeagues),
    takeLatest(Types.LIST_STANDINGS_REQUEST, getStandings),
    takeLatest(Types.GET_TEAM_DETAILS_REQUEST, getTeamDetails),
];
