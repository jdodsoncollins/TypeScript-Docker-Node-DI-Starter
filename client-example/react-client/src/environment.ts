
function getBaseUrl(): string {
  const baseUrl = 'localhost:3000';

  return baseUrl;
}

function getLoginUrl(): string {

  let baseUrl = window.location.origin.toString();

  baseUrl = getBaseUrl();
  return baseUrl + '/oauth/login?client_id=clientIdAddedToClientTable&redirect_uri=redirectAddedToClientTable/login';
}


export const LOGIN_URL = getLoginUrl();
export const BASE_URL = getBaseUrl();
