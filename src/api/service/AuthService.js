import { GET, POST } from "api/consts/methods";
import {
    URL_AUTH_LOGIN,
    URL_AUTH_LOGOUT,
    URL_AUTH_PASSWORD_CONFIRM,
    URL_AUTH_PASSWORD_RESET,
    URL_AUTH_REGISTER,
    URL_AUTH_VERIFICATION,
} from "api/consts/urls";
import { makeRequest } from "api/makeRequest";

class AuthService {
    async login(email, password) {
        return makeRequest({
            url: URL_AUTH_LOGIN,
            method: POST,
            data: {
                email,
                password,
            },
            withCredentials: true,
        });
    }
    async register(username, email, password) {
        return makeRequest({
            url: URL_AUTH_REGISTER,
            method: POST,
            data: {
                username,
                email,
                password,
            },
            withCredentials: true,
        });
    }
    async logout() {
        return makeRequest({
            url: URL_AUTH_LOGOUT,
            method: GET,
            data: {},
            withCredentials: true,
        });
    }
    async verification() {
        return makeRequest({
            url: URL_AUTH_VERIFICATION,
            method: GET,
            data: {},
            withCredentials: true,
        });
    }

    async recovery(email) {
        return makeRequest({
            url: URL_AUTH_PASSWORD_RESET,
            method: POST,
            data: {
                email,
            },
            withCredentials: true,
        });
    }

    async changePassword(pswToken, password) {
        return makeRequest({
            url: URL_AUTH_PASSWORD_CONFIRM,
            method: POST,
            data: {
                pswToken,
                password,
            },
            withCredentials: true,
        });
    }
}

export default new AuthService();
