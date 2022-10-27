import axios from 'axios';


 export const getItem = async (id) => {
        const getData = await axios.get("../../JSON/DB.json")
        const response = getData.data
        return (response.filter((e)=> e.id === parseInt(id)))
    }

    
export const getData= async () => {
        const dataAxios = await axios.get("../../JSON/DB.json")
        const response = dataAxios
        return (response.data)
       }