import {API_URL} from '../constants/main'

export const request = (endpoint, method = 'GET', body = null) => {
  let formData = null;
  if(body) {
    formData = new FormData();
    for ( let key in body ) {
      formData.append(key, body[key]);
    }
  }
  console.log(formData)

  return fetch(`${API_URL + endpoint}`, {
    method: method,
    body: formData || null,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => response.json())
    .catch(err => console.error(err))
}
