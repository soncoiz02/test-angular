import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import moment from 'moment';
import 'rxjs/add/operator/map'
import { finalize, tap, flatMap, mergeMap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Library } from '../library';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  _translate: any;
  _publicApi: any = ["public"];
  constructor(
    public authService: AuthService,
    public apiService: ApiService,
    private router: Router,
  ) {

    this._translate = this.authService.getTranslate();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic aWhvYWRvbjppaG9hZG9uQDEyM2VydGFAIQ==',
    };
    let _arr = req.url.split('/').filter(p => p.includes(this._publicApi))[0];
    if (_arr) {
      // var url_string = req.url; //window.location.href
      // var url = new URL(url_string);
      let _arrTaxCode = req.url.split('&');
      if (_arrTaxCode.length > 1) {
        let TaxCode = _arrTaxCode[1].split('=');
        if (TaxCode.length > 1)
          headersConfig['TaxCode'] = TaxCode[1];
      }
    }
    headersConfig['Lang'] = this.authService.getLanguage();

    const token = this.authService.getToken();
    if (token) {
      let infor = this.authService.currentUser;

      const now = moment(new Date(), 's').toDate();
      headersConfig['Authorization'] = `Bearer ${token.value}`;
      //if (infor.status && infor.status > 2) {
      headersConfig['TaxCode'] = infor.unit.tax_code;
      headersConfig['AccountId'] = infor.default_account.id;

      //}
      const request = req.clone({ setHeaders: headersConfig });
      return next.handle(request)
      .map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.code == "IWE008") {
            Library.hideloading();
            Library.notify(this._translate.NOTIFY.dang_nhap_het_han, "error");
            this.authService.logout();
            this.router.navigate(['/login']);
            //refesh lại trình duyệt để load code mới nhất về
            //window.location.href = '/login';
          }
        }
        return event;
      });
    } else {
      const request = req.clone({ setHeaders: headersConfig });
      return next.handle(request)
      .map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.code == "IWE008") {
            Library.hideloading();
            Library.notify(this._translate.NOTIFY.dang_nhap_het_han, "error");
            this.authService.logout();
            this.router.navigate(['/login']);
            //refesh lại trình duyệt để load code mới nhất về
            //window.location.href = '/login';
          }
        }
        return event;
      });
    }
  }
}
