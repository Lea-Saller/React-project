import axios from "axios";
import businessDataStore from "./businessDataStore";

export const getBusinessData = async () => {
    const response = await axios.get("http://localhost:8787/businessData");
    businessDataStore.editBusinessData(response.data);
}
export const editBusinessData = async (data) => {
    try {
        const response = await axios.post('http://localhost:8787/businessData', data);
        if (response.status === 200) {
            businessDataStore.editBusinessData(response.data)
        } else {
            alert('Sorry, cannot add appointment. ' + response.data);
        }
    } catch (error) {
        console.error('Error adding appointment:', error);
        alert('Sorry, an error occurred while adding the appointment.');
    }
    
} 

