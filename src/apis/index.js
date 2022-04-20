import axios from "axios";

export default function getApi(url, method='GET', body=null) {
    return axios({
        method,
        url,
        data: body
    }).catch(error => {
        console.error(error);
    });
};