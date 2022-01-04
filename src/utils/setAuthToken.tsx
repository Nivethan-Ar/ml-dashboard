import axios from 'axios';

const setAuthToken = (token:string) => {
  if (token) {
    // Apply auth token to every request
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // Delete auth header if token not found
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
