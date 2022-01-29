import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '../reducers/team';

export const useTeamSeasonsRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listSeasonsRequest());
    }, [dispatch]);
};

export const useTeamLeaguesRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listLeaguesRequest());
    }, [dispatch]);
};

export const useTeamSetSeasonSelected = () => {
    const dispatch = useDispatch();
    return useCallback((season: string) => {
        dispatch(Creators.setSeasonSelected(season));
    }, [dispatch]);
};


export const useTeamSeasons = () => {
    return useSelector((state: any) => state.team.seasons);
};

export const useTeamLeagues = () => {
    return useSelector((state: any) => state.team.leagues);
};
