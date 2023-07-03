import axios from "axios";

if (import.meta.env.VITE_MODE == 'PRODUCTION') {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL_PRODUCTION;
    
} else if (import.meta.env.VITE_MODE == 'DEVELOPMENT') {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL_DEVELOPMENT;

} else {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL_LOCAL;
}