import axios from 'axios';

export const fetchBooks = async (url: string) => {
    return axios.get(url);
};