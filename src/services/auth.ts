import api from './api';

const seasonsRequest = () => {
    return api
        .post('leagues/seasons')
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
};

export {seasonsRequest};
