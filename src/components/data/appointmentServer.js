import axios from "axios";
import appointmentStore from "./appointmentStore";


export const getAppointments = async () => {
    const appointments = await axios.get("http://localhost:8787/appointments");
    appointmentStore.setAppointment(appointments.data);
}
export const addAppointment = async (data) => {
    try {
        const response = await axios.post('http://localhost:8787/appointment', data);
        if (response.status === 200) {
            appointmentStore.addAppointment(data)
        } else {
            alert('Sorry, cannot add appointment. ' + response.data);
        }
    } catch (error) {
        console.error('Error adding appointment:', error);
        alert('Sorry, an error occurred while adding the appointment.');
        throw error;
    }
}