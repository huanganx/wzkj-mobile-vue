import { get, post } from './service'

let user = {
  list: () => get('/api/user/list'),
  login: (par) => post('/api/user/login', par)
}

export default {
  user
}