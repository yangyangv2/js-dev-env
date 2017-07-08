import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}


export function deleteUser(id){
  return del(`users/${id}`);
}

// Can't call function delete since reserved world..
function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  } );
  return fetch(request).then(onSuccess, onError);
}

function get(url){
  console.log(baseUrl + url) // eslint-disable-line no-console
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
