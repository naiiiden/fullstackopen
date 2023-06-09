import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const res = await axios.post(baseUrl, newObject, config)
  return res.data
}

const deleteBlog = id => {
  const request = axios.delete(`${ baseUrl }/${id}`)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deleteBlog, setToken }