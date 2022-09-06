import axios from 'axios'

import ip from "ip";

console.log ( ip.address() );

const api = axios.create({
  baseURL: `http://localhost:3000/api`, 
  headers: {
    'Access-Control-Allow-Origin': '*',
    Connection: 'keep-alive',
  }
})

export default api
