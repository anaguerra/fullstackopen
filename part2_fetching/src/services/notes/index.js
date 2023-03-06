import axios from "axios";
//const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
const baseUrl = 'http://localhost:3001/api/notes'

export const create = ({title, body, userId}) => {
    return axios
     .post(baseUrl, { body, userId})
     .then(response => {
        const { data } = response;
        return data;
     });
};

export const getAll = () => {
    return axios.get(baseUrl)
        .then((response) => {
            const {data} = response;
            return data;
        });
};
