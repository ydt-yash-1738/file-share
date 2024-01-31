import axios from 'axios';

const API_URL = 'https://file-share-by-ydt.onrender.com';

export const uploadFile = async(data) => {
    try{
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch(error){
        console.error('Error with calling the API', error.message);
    }

}

