import axios from 'axios'

class BaseService {
  constructor(baseURL) {
    this.http = axios.create({
      baseURL
    })
  }

  async get(url, params) {
    return this.http.get(url, {
      params
    })
  }

  async post(url, data, config) {
    return this.http.post(url, data, config)
  }

  async postLoginData(url, data) {
    return this.http.post(url, data)
  }

  async put(url, data, config) {
    return this.http.put(url, data, config)
  }

  async delete(url, config) {
    return this.http.delete(url, config)
  }

  async patch(url, config) {
    return this.http.patch(url, config)
  }

  async download(url) {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }
}

export { BaseService }
