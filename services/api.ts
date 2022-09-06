import axios from 'axios'

import ip from "ip";

let prtcl = 'http';

import os from 'os';

if(os.hostname().indexOf("local") > -1)
  prtcl = 'http';
else
  prtcl = 'https';

const api = axios.create({
  baseURL: `${prtcl}://${ip.address()}:3000/api`, 
  headers: {
    'Access-Control-Allow-Origin': '*',
    Connection: 'keep-alive',
  }
})

export default api
