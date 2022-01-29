import {call, put, select, takeLatest} from 'redux-saga/effects';
import {Creators, Types} from '../reducers/team';
import {setSnackbarInfos} from '../../components/Snackbar/snackbarUtils';
import {leaguesRequest, seasonsRequest} from '../../services/team';

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

export const teamSagas = [
    takeLatest(Types.LIST_SEASONS_REQUEST, getSeasons),
    takeLatest(Types.LIST_LEAGUES_REQUEST, getLeagues),
];
