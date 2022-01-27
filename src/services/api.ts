import axios from 'axios';
import environment from '../config/environment';

const api = axios.create({
    baseURL: environment.api,
    timeout: 20000,
});

const requestHandler = async (request: any) => {
    request.headers['Access-Control-Allow-Origin'] = '*';
    request.headers.Pragma = 'no cache ';
    request.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    request.headers['Content-Type'] = 'application/json';
    request.headers['x-rapidapi-host'] = 'v3.football.api-sports.io';
    request.headers['x-rapidapi-key'] = 'a91df005d6014b2f16e3e48f43941ef9';
    return request;
};
api.interceptors.request.use((request) => requestHandler(request));

const errorResponseHandler = (error: any) => {
    // if (error.response) {
    //   if (error.response.status === 401) {
    //     showErrorToast('Usuário não autorizado!');
    //   }
    // }
    throw JSON.parse(JSON.stringify(error));
};

api.interceptors.response.use((response) => response, errorResponseHandler);

export default api;
