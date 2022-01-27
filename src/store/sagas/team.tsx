import {call, put, takeLatest} from 'redux-saga/effects';
import {Creators, Types} from '../reducers/team';
import {setSnackbarInfos} from '../../components/Snackbar/snackbarUtils';
import {seasonsRequest} from '../../services/auth';

export function* getSeasons() {
    try {
        // @ts-ignore
        const response: any = yield call(seasonsRequest);
        yield put(Creators.listSeasonsSuccess(response.data.response));
    } catch (error) {
        setSnackbarInfos('Erro ao atualizar listagem', true);
    }
}

export const teamSagas = [
    takeLatest(Types.LIST_SEASONS_REQUEST, getSeasons),
];
