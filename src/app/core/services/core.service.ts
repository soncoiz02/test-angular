import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  boquaKy = false;
  noticeStream: BehaviorSubject<any> = new BehaviorSubject(0);
  showNhacViec = false;
  isDisplayNotify = true;
  api_url: string = environment.API_URL;
  dataApi: any;

  constructor(
    private http: HttpClient,
  ) {
  }

  getFilterOperator(keyFilterOperator: any) {
    let valueFilterOperator;
    let operators: any = {
      'contains': 'like',
      'startswith': 'sw',
      'endswith': 'ew',
      '=': '=',
      '<': '<',
      '>': '>',
      '>=': '>=',
      '<=': '<=',
    };
    for (const key in operators) {
      if (key === keyFilterOperator) {
        valueFilterOperator = operators[key];
      }
    }
    return valueFilterOperator;
  }

  getFilterItem(filterItem: any, filter: any) {
    let ofjectFilterItem =
    {
      'key': filterItem[0],
      'value': filterItem[2],
      'operator': this.getFilterOperator(filterItem[1]),
      'not': false
    };
    filter.filter_groups[0].filters.push(ofjectFilterItem);
    return filter;
  }

  getTemplateOption(): Observable<any> {
    let observable = new Observable((observer: any) => {
      this.http.get(`${this.api_url}/templates?options[end_number]=1&sort[0][key]=created_at&sort[0][direction]=DESC`).subscribe((rs: any) => {
        // console.log(rs['data'].templates);
        let data: any = [];
        rs['data'].templates.forEach((item: any) => {
          data.push({
            name: `${item.invoice_type_name} - ${item.template_code} - ${item.invoice_series}`,
            value: item.id,
            end_number: parseInt(item.end_number) || 0,
            invoice_series: item.invoice_series,
            template_code: item.template_code
          });
        });
        observer.next(data);
      });
    });
    return observable;
  }
}
