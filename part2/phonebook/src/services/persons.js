import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getAll = () => {
    return axios.get(baseUrl);
}

const create = personObj => {
    return axios.post(baseUrl, personObj);
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, deletePerson };