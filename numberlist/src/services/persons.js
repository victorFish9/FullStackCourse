import axios from 'axios'
const url = 'http://localhost:3001/api/persons'

const listAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = personObject => {
    const request = axios.post(url, personObject)
    return request.then(response => response.data)
}

const mydelete = id => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
}

const update = (id, personObject) => {
    const request = axios.put(`${url}/${id}`, personObject)
    return request.then(response => response.data)
}

export default { listAll, create, mydelete, update }