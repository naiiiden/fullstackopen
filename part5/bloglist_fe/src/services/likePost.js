import axios from 'axios'
const baseUrl = '/api/blogs'

const update = (id, newObject) => {
    const request = axios.put(`${ baseUrl }/${id}`, newObject)
    return request.then(response => response.data)
}

export default update;