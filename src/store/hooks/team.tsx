import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '../reducers/team';

export const useTeamSeasonsRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listSeasonsRequest());
    }, [dispatch]);
};

export const useTeamSeasons = () => {
    return useSelector((state: any) => state.team.seasons);
};
