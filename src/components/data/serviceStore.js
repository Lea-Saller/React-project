import { action, makeObservable, observable } from 'mobx';

class ServiceStore {

    ListService = []; // ניתן להוסיף כאן את המערך הריק כדי למנוע השגיאה

    constructor() {
        makeObservable(this, {
            ListService: observable,
            addService: action,
            setService:action
        });
    }

    setService = (data) => {
        this.ListService = data
    }

    addService = (data) => {
        this.ListService = [...this.ListService, data]
    }
}
export default new ServiceStore()