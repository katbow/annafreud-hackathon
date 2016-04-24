import axios from 'axios'

export const CLIENT_DATA = 'CLIENT_DATA'

export const clientData = () => {
  const data = axios.get('/api/clients')
  return {
    type: CLIENT_DATA,
    payload: data
  }
}
