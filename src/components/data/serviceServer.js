import axios from "axios";
import serviceStore from "./serviceStore";
import swal from 'sweetalert2';


export const getServices = async () => {
    const services = await axios.get("http://localhost:8787/services");
    serviceStore.setService(services.data);
}

export const addService = async (service) => {
debugger
try{
    const res = await axios.post("http://localhost:8787/service", service);
    if (res.status === 200) {
        serviceStore.addService(service);
        return 'success';
    }}
    catch
    {
        swal.fire("failed to add", 'this savice exists allready','error')
    }
        
}