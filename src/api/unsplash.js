import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
     // headers object 
     headers: {
        Authorization: 'Client-ID HUANYr-lzEKl6QgUenpCdgwyyxoyBbmODhl-OpCrZOM' 
        } 
});