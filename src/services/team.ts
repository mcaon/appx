import api from './api';

const seasonsRequest = () => {
    return api
        .get('leagues/seasons')
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
};

const leaguesRequest = (season: string) => {
    return api
        .get('leagues', {
            params: {
                season: season,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
};

const standingsRequest = (season: string, league: string) => {
    return api
        .get('standings', {
            params: {
                season: season,
                league: league,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
};

const teamDetailsRequest = (teamId: number) => {
    return api
        .get('teams', {
            params: {
                id: teamId,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
};

export {seasonsRequest, leaguesRequest, standingsRequest, teamDetailsRequest};
