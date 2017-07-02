import { hashHistory } from 'react-router';
import { TOKEN_NAME } from '../constants/auth';

// The API url that will be requested to authenticate
const API_URL = 'http://localhost:3000/api/';

const defaultHeaders = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

// Used to handle any API errors that occur while making a request
const handleApiErrors = (response) => {
  // If they have an invalid token, this will fire
  if (response.status === 403) {
    localStorage.removeItem(TOKEN_NAME);
    hashHistory.push('/');
  }
  return response;
};

// Simple helper function for creating a request using stuff
const createRequest = (url, method, headers, data) =>
  fetch(`${API_URL}${url}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null
  })
  // Pipe the stuff
  .then(response => response.json())
  .then(handleApiErrors)
  .catch((error) => {
    throw error;
  });

// Signup API request
export function signup(username, password) {
  return createRequest('signup', 'POST', defaultHeaders, { username, password });
}

// Login API request
export function login(username, password) {
  return createRequest('login', 'POST', defaultHeaders, { username, password });
}
