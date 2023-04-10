import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl);
}

const create = personObj => {
    return axios.post(baseUrl, personObj);
}

export default { getAll, create };