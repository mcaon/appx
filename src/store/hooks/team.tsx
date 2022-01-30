import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '../reducers/team';
import {LeagueModel} from '../../shared/models/league.model';

export const useTeamSeasonsRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listSeasonsRequest());
    }, [dispatch]);
};

export const useTeamStandingsRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listStandingsRequest());
    }, [dispatch]);
};

export const useTeamLeaguesRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listLeaguesRequest());
    }, [dispatch]);
};

export const useTeamTeamDetailsRequest = () => {
    const dispatch = useDispatch();
    return useCallback((teamId: number) => {
        dispatch(Creators.getTeamDetailsRequest(teamId));
    }, [dispatch]);
};

export const useTeamPlayersSquadRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listTeamPlayersRequest());
    }, [dispatch]);
};

export const useTeamTrophiesRequest = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(Creators.listTeamTrophiesRequest());
    }, [dispatch]);
};

export const useTeamSetSeasonSelected = () => {
    const dispatch = useDispatch();
    return useCallback((season: string) => {
        dispatch(Creators.setSeasonSelected(season));
    }, [dispatch]);
};

export const useTeamSetLeagueSelected = () => {
    const dispatch = useDispatch();
    return useCallback((league: LeagueModel) => {
        dispatch(Creators.setLeagueSelected(league));
    }, [dispatch]);
};

export const useTeamSeasons = () => {
    return useSelector((state: any) => state.team.seasons);
};

export const useTeamLeagues = () => {
    return useSelector((state: any) => state.team.leagues);
};

export const useTeamLeagueSelected = () => {
    return useSelector((state: any) => state.team.leagueSelected);
};

export const useTeamStandings = () => {
    return useSelector((state: any) => state.team.standings);
};

export const useTeamTeamDetails = () => {
    return useSelector((state: any) => state.team.teamSelected);
};

export const useTeamTeamPlayersSquad = () => {
    return useSelector((state: any) => state.team.teamPlayersSquad);
};

export const useTeamTeamTrophies = () => {
    return useSelector((state: any) => state.team.trophies);
};

export const useTeamIsFetching = () => {
    return useSelector((state: any) => state.team.fetching);
};
