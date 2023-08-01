import { $api } from "./axiosInstance";
import { GET } from "./consts/methods";

export const makeRequest = ({
    url = "/",
    method = GET,
    data = {},
    ...configs
}) => {
    return $api.request({ url, method, data, ...configs });
};
