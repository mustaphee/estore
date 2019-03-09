import axios from 'axios'

const API_URl = process.env.API_BASE_URL
$axios = axios.create({baseURL: API_URL })
$axios.defaults.headers.common['Content-Type'] = 'application/json'


class Authentication {

  registration (payload) {
    $axios.post('customers', payload)
    .then((res))
    .catch((err))
    }

  login (payload) {
    $axios.post('customers/login', payload)
    .then((res))
    .catch((err))
  }
}

module.exports =  new Authentication()