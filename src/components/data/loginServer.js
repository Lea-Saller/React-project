import axios from "axios";
import dataStore from "./loginStore";
import swal from 'sweetalert2';

export async function checkLogin(data) { 


    try {
        const isValid = await axios.post("http://localhost:8787/login", data)
        if (isValid.status === 200) {
            swal.fire("Good job!", "login success", "success")
            dataStore.setIsLogin(true);
            
    }
}
    catch (e) {
        console.log(e)
        if (e.response) {
            swal.fire("error!!!", 'user name or password is not correct','error');
        }
        else {
            alert('server failed')
        }
        throw e;
    }
}