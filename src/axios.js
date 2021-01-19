import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://xxtinderapp.herokuapp.com'
})

export default instance