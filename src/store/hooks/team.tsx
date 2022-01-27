import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Creators} from '../reducers/team';

export const useTeamSeasonsRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listSeasonsRequest());
    }, [dispatch]);
};
