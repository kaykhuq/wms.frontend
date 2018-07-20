import axios from "axios";

const API_URL='https://jsonplaceholder.typicode.com'; 

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}