import { action, makeObservable, observable } from 'mobx';

class AppointmentStore {

  listAppointment = []; // ניתן להוסיף כאן את המערך הריק כדי למנוע השגיאה

  constructor() {
    makeObservable(this, {
      listAppointment: observable,
      addAppointment: action,
      setAppointment: action
    });
  }

  addAppointment = (data) => {
    this.listAppointment = [...this.listAppointment, data]
  }

  setAppointment = (data) => {
    this.listAppointment = data;
  }
}
export default new AppointmentStore()