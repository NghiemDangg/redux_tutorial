import axios, { AxiosInstance } from 'axios'

class Http {
  intance: AxiosInstance
  constructor() {
    this.intance = axios.create({
      baseURL: 'http://localhost:4000',
      timeout: 10000
    })
  }
}

const http = new Http().intance
export default http
