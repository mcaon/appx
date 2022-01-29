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

export {seasonsRequest, leaguesRequest};
