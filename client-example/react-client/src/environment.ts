
function getBaseUrl(): string {
  const baseUrl = 'localhost:3000';

  return baseUrl;
}

function getLoginUrl(): string {
  const clientId = 'test123';
  const redirectUri = encodeURIComponent('http://localhost:3002/login');
  const baseUrl = getBaseUrl();
  return baseUrl + '/oauth/login?client_id=' + clientId + '&redirect_uri=' + redirectUri;
}

export const LOGIN_URL = getLoginUrl();
export const BASE_URL = getBaseUrl();
