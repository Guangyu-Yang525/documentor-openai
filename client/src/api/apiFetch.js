import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:5001',
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json"
  }
});