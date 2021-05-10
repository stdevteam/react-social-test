import {API_URL} from '../constants/main'

export const request = (endpoint, method = 'GET', body = null) => {
  let formData = null;
  if (body) {
    formData = new FormData();
    for (let key in body) {
      formData.append(key, body[key]);
    }
  }

  return fetch(`${API_URL + endpoint}`, {
    method: method,
    body: formData,
  }).then(response => response.json())
    .catch(err => console.error(err))
}
