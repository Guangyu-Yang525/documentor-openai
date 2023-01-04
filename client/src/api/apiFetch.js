import axios from 'axios';

export default axios.create({
  baseURL: 'https://documentor-backend.onrender.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json"
  }
});