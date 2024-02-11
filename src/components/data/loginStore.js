
import { action, makeObservable, observable } from 'mobx';


class LoginStore {

  isLogin = false;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      setIsLogin: action,
    });
  }


  setIsLogin(data) {
    this.isLogin = data;
  }
}

export default new LoginStore();
