import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
//import * as _ from 'lodash';

import moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  currentUser: any;
  configs: any;
  _translate: any;
  getExpireDate: any = {};
  oqueryParams: any;
  /// Dùng để lưu tạm token cho trường hợp đăng nhập mà chưa muốn lưu token vào storage
  /// Ví dụ trường hợp đăng nhập lần đầu cần đổi mật khẩu
  token_temp: any = {};
  _isMobile = false;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) {
    this.currentUser = this.getCurrentUser();
    this.configs = this.getConfigs();
    this._translate = this.getTranslate();
    this.getExpireDate = this.getExpiration();
    if (window.innerWidth < 768) {
      this._isMobile = true;
    } else this._isMobile = false;
    //alert(this.currentUser.default_account.code);

  }

  // createOnline$() {
  //   return merge<boolean>(
  //     fromEvent(window, 'offline').pipe(map(() => false)),
  //     fromEvent(window, 'online').pipe(map(() => true)),
  //     new Observable((sub: Observer<boolean>) => {
  //       sub.next(navigator.onLine);
  //       sub.complete();
  //     }));
  // }

  login(data: Object): Observable<any> {
    return this.apiService.post('/authen/login', data);
  }

  loginOnce(data: any): Observable<any> {
    return this.apiService.post('/login-once', data);
  }

  getQuangCao(): Observable<any> {
    return this.apiService.get('/get-images');
  }

  forgotPass(data: Object): Observable<any> {
    return this.apiService.post('/users/forgot-password', data);
  }

  resetPass(data: Object): Observable<any> {
    return this.apiService.post('/users/reset-password', data);
  }

  active(data: Object): Observable<any> {
    return this.apiService.post('/active', data);
  }

  refresh(): Observable<any> {
    return this.apiService.post('/login/refresh', {});
  }

  createDefaultUser(data: Object): Observable<any> {
    return this.apiService.post('/default-user', data);
  }
  convertImageToPdf(data: any) {
    return this.apiService.post('/convert-image-to-pdf', data).toPromise();;
  }


  logout() {
    this.destroyToken();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('configs');
    localStorage.removeItem('data_records');
    //  localStorage.removeItem('ds_dm');
    localStorage.removeItem('staffs');
    localStorage.removeItem('thoi_han');
    localStorage.removeItem('expired_date');
    localStorage.removeItem('countNoti');
    localStorage.removeItem('wait_sign');
    localStorage.removeItem('time_server');
  }

  setAuth(data: any) {
    this.setToken(data);
    let default_account = data.accounts.filter((p: any) => p.id == data.user.default_account_id)[0];
    /// trường hợp user bị phân quyền lại không thuộc default_account_id này nữa thì mặc định là account đầu tiên
    if (!default_account && data.accounts && data.accounts.length > 0) {
      default_account = data.accounts[0];
      data.user.default_account_id = default_account.id;
    }
    this.currentUser = {
      user: data.user,
      accounts: data.accounts,
      unit: data.unit,
      default_account: default_account,
      //status: 3,//data.status,
      //password_default: data.password,
      // username: data.username,
      // tax_code: data.tax_code,
      // unsigned: data.unsigned
    }
    localStorage['currentUser'] = JSON.stringify(this.currentUser);
    localStorage.setItem('refresh_token', data.refresh_token);
  }


  setBills(bills: any) {
    localStorage.setItem('bills', JSON.stringify(bills));
  }

  getBills() {
    if (localStorage['bills'])
      return JSON.parse(localStorage['bills']);
    return null;
  }

  setBillsOffline(bill: any) {
    let lstBillsOffline = this.getBillsOffline();
    lstBillsOffline.push(bill);

    localStorage.setItem('billsOffline', JSON.stringify(lstBillsOffline));

  }

  refeshBillsOffline(bills: any) {
    localStorage.setItem('billsOffline', JSON.stringify(bills));
  }

  removeBillsOffline() {
    if (localStorage['billsOffline'])
      localStorage.removeItem('billsOffline');
  }

  getBillsOffline() {
    if (localStorage['billsOffline'])
      return JSON.parse(localStorage['billsOffline']);
    return [];
  }

  setUsers(oUser: any) {
    localStorage.setItem('oUser', JSON.stringify(oUser));
  }



  getUsers() {
    if (localStorage['oUser'])
      return JSON.parse(localStorage['oUser']);
    return null;
  }

  setCustomers(oCustomer: any) {
    localStorage.setItem('oCustomer', JSON.stringify(oCustomer));
  }

  getCustomers() {
    if (localStorage['oCustomer'])
      return JSON.parse(localStorage['oCustomer']);
    return null;
  }

  setProducts(oProduct: any) {
    localStorage.setItem('oProduct', JSON.stringify(oProduct));
  }

  getProducts() {
    if (localStorage['oProduct'])
      return JSON.parse(localStorage['oProduct']);
    return null;
  }

  setLanguage(language: any) {
    localStorage['language'] = language;
  }
  setShowCapcha(isShow: any) {
    localStorage['capcha'] = isShow;
  }
  removeShowCapcha() {
    localStorage.removeItem('capcha');
  }
  getShowCapcha() {
    if (localStorage['capcha']) {
      return true;
    } else return false;
  }

  setNotify(data: any) {
    localStorage.setItem('countNoti', JSON.stringify(data));
  }

  getNotify() {
    if (localStorage['countNoti']) {
      return JSON.parse(localStorage['countNoti']);
    }
  }
  setCurentAuth(data: any) {
    //this.setToken(data);
    let default_account = data.accounts.filter((p: any) => p.id == data.user.default_account_id)[0];
    this.currentUser = {
      user: data.user,
      accounts: data.accounts,
      unit: data.unit,
      default_account: default_account,
      status: 3,//data.status,
      //password_default: data.password,
      // username: data.username,
      // tax_code: data.tax_code,
      // unsigned: data.unsigned
    }
    localStorage['currentUser'] = JSON.stringify(this.currentUser);
    //localStorage.setItem('refresh_token', data.refresh_token);
  }


  getCurrentUser(): any {
    if (localStorage['currentUser'])
      return JSON.parse(localStorage['currentUser']);
  }
  setCurrentUser(data: any) {
    localStorage['currentUser'] = JSON.stringify(data);
    this.currentUser = data;
  }
  getDataRecords(): any {
    if (sessionStorage['listRecords'])
      return JSON.parse(sessionStorage['listRecords']);
    else return null;
  }

  getExpiration(): any {
    if (localStorage['thoi_han']) {
      return JSON.parse(localStorage['thoi_han']);
    } else {
      return null;
    }
  }

  setDMLocal(data: any) {
    localStorage['ds_dm'] = data;
  }


  // static setStaffs(data: any) {
  //   sessionStorage['staffs'] = JSON.stringify(data);
  // }

  // static getStaffs(): any {
  //   if (sessionStorage.getItem('staffs')) {
  //     return JSON.parse(sessionStorage.getItem('staffs'));
  //   } else {
  //     return [];
  //   }
  // }

  setConfigs(data: any) {
    localStorage['configs'] = JSON.stringify(data);
    this.configs = this.getConfigs();
  }

  setConfigsById(id: any, data: any) {
    if (localStorage['configs']) {
      let config = JSON.parse(localStorage['configs']);
      let _obj = config.configs.filter((p: any) => p.id == id)[0];
      if (_obj) {
        let _index = config.configs.indexOf(_obj);
        config.configs[_index].value = JSON.stringify(data);
        this.setConfigs(config);
      }
    }
  }

  getConfigs(): any {
    if (localStorage['configs']) {
      let _configsOut: any = { id: {} };
      let _configs: any = {};
      _configs = JSON.parse(localStorage['configs']);
      /////////
      _configs.configs.forEach((item: any) => {
        let _obj = _configs.configs.filter((p: any) => p.name == item.name)[0];
        if (_obj) {
          _configsOut[item.name] = JSON.parse(_obj.value);
          _configsOut.id[item.name] = _obj.id;
        }

      });
      return _configsOut;
    } else {
      return null;
    }
  }

  getAllConfigs(): any {
    return JSON.parse(localStorage['configs']);
  }

  getLanguage(): any {
    let language = localStorage['language'];
    if (language === '' || language == null) {
      language = 'vn';
    }
    return language;
  }

  static getLanguage(): any {
    let language = localStorage['language'];
    if (language === '' || language == null) {
      language = 'vn';
    }
    return language;
  }

  getTranslate() {
    if (this.getLanguage() === 'vn') {
      // localStorage.removeItem('language_en');
      // if (localStorage['language_vn']) {
      //   return JSON.parse(localStorage['language_vn']);
      // } else {
      let data: any = {};//= require('assets/i18n/vn.json');
      //localStorage['language_vn'] = JSON.stringify(data);
      return data;
      // }
    } else {
      // localStorage.removeItem('language_vn');
      // if (localStorage['language_en']) {
      //   return JSON.parse(localStorage['language_en']);
      // } else {
      let data: any = {};// require('assets/i18n/en.json');
      //localStorage['language_en'] = JSON.stringify(data);
      return data;
      // }
    }
  }

  isAuthenticated() {
    if (localStorage['access_token']) {
      return true;
    }

    return false;
  }

  getToken(): any {
    if (this.token_temp) {
      return this.token_temp;
    } else if (localStorage.getItem('access_token'))
      return JSON.parse(localStorage.getItem('access_token') + "");
    else
      return null;
  }
  getRefreshToken(): any {
    if (localStorage.getItem('refresh_token'))
      return localStorage.getItem('refresh_token');
    else
      return null;
  }

  setToken(data: any): any {
    localStorage['access_token'] = JSON.stringify({
      value: data.access_token,
      timestamp: moment(new Date()).add(data.expires_in - 10, 's').toDate().getTime()
    });
  }

  setTokenAfterRefresh(data: any): any {
    localStorage['access_token'] = JSON.stringify({
      value: data.access_token,
      timestamp: moment(new Date()).add(data.expires_in - 600, 's').toDate().getTime()
    });

    localStorage.setItem('refresh_token', data.refresh_token);
  }

  destroyToken() {
    localStorage.removeItem('access_token');
  }

  getPermissions() {
    return this.apiService.get('/get-permissions');
  }

  getDefaultAccount() {
    const currentUser = JSON.parse(localStorage['currentUser']);
    return currentUser.default_account;
  }

  changeParamUrl(params: any, router: any, route: any) {
    let qp: any = {};
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key];
        if (value || value === 0) {
          qp[key] = value;
        }
      }
    }
    router.navigate([],
      {
        relativeTo: route,
        queryParams: qp,
        queryParamsHandling: ''
      }
    );
  }

  checkArray(data: Array<any>) {
    return Array.isArray(data) && data.length > 0;
  }

  getCheckNld(data: any) {
    return this.apiService.post('/staffs/search', data);
  }

  updateListClass(id: any) {
    return this.apiService.put('/lists/' + id).toPromise();
  }

  // getDemo() {
  //   return this.apiService.get('/l1isttypes');
  // }

  checkAllPropertyObjNull(objCheck: any) {
    let isCheck: boolean = false;
    for (const keyVal in objCheck) {
      if (objCheck.hasOwnProperty(keyVal) && objCheck[keyVal]) {
        isCheck = true;
        break;
      }
    }
    return isCheck;
  }
  getInforUnit(isWaitSign: any): Observable<any> {
    if (isWaitSign)
      return this.apiService.get('/accounts/get-list?is_only_wait_sign=1');
    else
      return this.apiService.get('/accounts/get-list');
  }

  setStatusWaitSign(data: any) {
    localStorage['wait_sign'] = data;
  }

  getStatusWaitSign(): any {
    const wait_sign = localStorage.getItem('wait_sign');
    if (wait_sign) {
      return wait_sign;
    } else {
      return {};
    }
  }
}
