import axios from 'axios'

import ip from "ip";

console.dir ( ip.address() );

const api = axios.create({
  baseURL: `http://${ip.address()}:3000/api`, 
  headers: {
    'Access-Control-Allow-Origin': '*',
    Connection: 'keep-alive',
  }
})

export default api
