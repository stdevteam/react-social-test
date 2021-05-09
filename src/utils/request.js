import {API_URL} from '../constants/main'

export const request = (endpoint, method = 'GET', body = null) => {
    return fetch(`${API_URL + endpoint}`, {
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
        .catch(err => console.error(err))
}
