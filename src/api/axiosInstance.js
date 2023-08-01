import axios from "axios";
import { URL_ROOT } from "./consts/urls";

export const $api = axios.create({
    baseURL: URL_ROOT,
});

$api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken"); // TODO: Token access
        if (accessToken) {
            config.headers.Authorization = "Bearer " + accessToken;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// $api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (isTokenExpiredError(error)) {
//             return resetTokenAndReattemptRequest(error);
//         }
//         return Promise.reject(error);
//     }
// );

// let isAlreadyFetchingAccessToken = false;
// let subscribers = [];

// function isTokenExpiredError(error) {
//     const { config, response } = error;
//     return config?.url !== URL_AUTH && response?.status === 401;
// }

// async function resetTokenAndReattemptRequest(error) {
//     try {
//         const { response: errorResponse } = error;

//         const retryOriginalRequest = new Promise((resolve) => {
//             addSubscriber((access_token) => {
//                 errorResponse.config.headers.Authorization =
//                     "Bearer " + access_token;
//                 resolve(axios(errorResponse.config));
//             });
//         });
//         // Артём ЛОХ
//         if (!isAlreadyFetchingAccessToken) {
//             isAlreadyFetchingAccessToken = true;
//             let response = await instance.get(URL_REFRESHTOKEN, {
//                 withCredentials: true,
//             });
//             const { accessToken } = response.data;
//             token.setToken(accessToken);
//             isAlreadyFetchingAccessToken = false;
//             onAccessTokenFetched(accessToken);
//         }
//         return retryOriginalRequest;
//     } catch (err) {
//         console.log(err.response);
//         if (err.response.data.errorCode === REFRESH_NOT_VALID) {
//             token.removeToken();
//             window.location.reload();
//         }
//         return Promise.reject(err);
//     }
// }

// function onAccessTokenFetched(accessToken) {
//     subscribers.forEach((callback) => callback(accessToken));
//     subscribers = [];
// }

// function addSubscriber(callback) {
//     subscribers.push(callback);
// }
