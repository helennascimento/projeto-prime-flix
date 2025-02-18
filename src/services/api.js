import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/

//URL: /movie/now_playing?api_key=46f28bfc9419c7c20a02c8c54e32a20b

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
