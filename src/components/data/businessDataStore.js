import { action, makeObservable, observable } from 'mobx';
import axios from "axios";

class BusinessDataStore {
  businessData ={};

  constructor() {
    makeObservable(this, {
      businessData: observable,
      editBusinessData: action,
    });
  }

  async editBusinessData(data) {
    this.businessData = data;
    await axios.put('http://localhost:8787/businessData', data);
  }

}

export default new BusinessDataStore();
