import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
import { CoreService } from "./core.service";
import CustomStore from "devextreme/data/custom_store";
import { Library } from "../library";
import moment from "moment";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private coreService: CoreService) { }

  currentlyParam: any;
  api_url: string = environment.API_URL;
  groupCount = 0;
  count = 0;
  summary: any = {};

  // private _serverError(err: any) {
  //   Library.notify(err.message, "error", 3600000);
  //   //alert(err.message);
  //   // Library.hideloading();
  //   if (err instanceof Response) {
  //     Library.notify(err, "error", 3600000);
  //     //alert(err);

  //     return Observable;//.throw(err);
  //   }
  // }

  /**
   * Ham lay data hien thi danh sach
   * @param path : url api
   * @param otherParams : cac tham so nhu include, filter
   * @param sortParam : them so cho sort mac dinh, khi sort o cho khac thi deu se cong them sort nay.
   * @param params : khong de lam gi ca
   * @author Dungle, VAnh
   */
  getDataTable(
    path: string,
    otherParams = "NULL",
    sortParam = "NULL",
    params: HttpParams = new HttpParams()
  ): any {
    return new CustomStore({
      key: "id",
      load: (loadOptions: any) => {
        let paramsUrl = "";
        if (otherParams == "NULL" || otherParams == "")
          paramsUrl = "?";
        else
          paramsUrl = "&";

        let queryParam = "";
        const page = Number(loadOptions.skip / loadOptions.take) + Number(1);

        if (page) {
          paramsUrl += "limit=" + loadOptions.take || 15;
        }
        if (loadOptions.take) {
          paramsUrl += "&page=" + page || 1;
        }
        let countSort = 10;

        // if (loadOptions.sort) {
        //   let sortStr = "";
        //   loadOptions.sort.forEach((sortItem) => {
        //     let direction = "ASC";
        //     direction = sortItem.desc ? "DESC" : "ASC";
        //     sortStr +=
        //       "&" +
        //       `sort[${countSort}][key]=${sortItem.selector}&sort[${countSort}][direction]=${direction}`;
        //     countSort++;
        //   });
        //   paramsUrl += sortStr;
        // } else {
        //   if (!loadOptions.sort && sortParam !== "NULL") {
        //     paramsUrl += "&" + sortParam;
        //     const paramsArr = sortParam.split("&");
        //     paramsArr.forEach((element) => {
        //       if (element.includes("sort") && element.includes("[key]")) {
        //         countSort++;
        //       }
        //     });
        //   }
        // }
        if (otherParams != "NULL")
          queryParam += otherParams;
        if (loadOptions.filter) {
          let filter = "";
          if (loadOptions.filter.includes("and") === true ||
            loadOptions.filter.includes("or") === true) {
            // khi filter theo nhiều cột
            // loadOptions.filter.forEach((filterItem) => {
            //   if (filterItem !== "and" && filterItem !== "or") {
            //     if (filterItem[1] === "and") {
            //       // filter theo nhiều cột và có toán tử between
            //       let filterValue = filterItem[0][2];
            //       let keyValue = filterItem[0][0];
            //       let operator = filterItem[0][1];
            //       let isFilter = true;
            //       if (
            //         moment(filterValue, "YYYY/MM/DD HH:mm:ss", true).isValid()
            //       ) {
            //         filterValue = moment(filterValue).format(
            //           "YYYY-MM-DD HH:mm:ss"
            //         );
            //       }
            //       if (keyValue.includes("json_data.")) {
            //         let json_field = keyValue.split('.')[1];
            //         if (typeof filterValue === 'number')
            //           filterValue = `"${json_field}":${filterValue}`;
            //         else
            //           filterValue = `"${json_field}":"${filterValue}"`;
            //         keyValue = "json_data";
            //         if (operator == "<")
            //           isFilter = false;
            //         operator = "contains";
            //       }
            //       if (isFilter) {
            //         filter +=
            //           "&" +
            //           `filter_groups[0][filters][${countFilter}][key]=${keyValue
            //           }&filter_groups[0][filters][${countFilter}][value]=${filterValue}&filter_groups[0][filters][${countFilter}][operator]=${this.coreService.getFilterOperator(
            //             operator
            //           )}`;
            //         countFilter++;
            //       }
            //       filterValue = filterItem[2][2];
            //       keyValue = filterItem[2][0];
            //       operator = filterItem[2][1];
            //       if (
            //         moment(filterValue, "YYYY/MM/DD HH:mm:ss", true).isValid()
            //       ) {
            //         filterValue = moment(filterValue).format(
            //           "YYYY-MM-DD HH:mm:ss"
            //         );
            //       }

            //       if (isFilter) {
            //         filter +=
            //           "&" +
            //           `filter_groups[0][filters][${countFilter}][key]=${keyValue
            //           }&filter_groups[0][filters][${countFilter}][value]=${filterValue}&filter_groups[0][filters][${countFilter}][operator]=${this.coreService.getFilterOperator(
            //             operator
            //           )}`;
            //         countFilter++;
            //       }
            //     } else if (
            //       filterItem[1] !== "and" &&
            //       filterItem !== "or" &&
            //       filterItem[0] !== "id"
            //     ) {
            //       let filterValue = filterItem[2];
            //       let keyValue = filterItem[0];
            //       let operator = filterItem[1];
            //       let isFilter = true;
            //       if (
            //         moment(filterValue, "YYYY/MM/DD HH:mm:ss", true).isValid()
            //       ) {
            //         filterValue = moment(filterValue).format(
            //           "YYYY-MM-DD HH:mm:ss"
            //         );
            //       }
            //       if (isFilter) {
            //         filter +=
            //           "&" +
            //           `filter_groups[0][filters][${countFilter}][key]=${keyValue
            //           }&filter_groups[0][filters][${countFilter}][value]=${filterValue}&filter_groups[0][filters][${countFilter}][operator]=${this.coreService.getFilterOperator(
            //             operator
            //           )}`;
            //         countFilter++;
            //       }
            //     }
            //   }
            // });
          } else if (loadOptions.filter[0] != "id") {
            let filterValue = loadOptions.filter[2];
            let keyValue = loadOptions.filter[0];
            let operator = loadOptions.filter[1];
            let isFilter = true;
            if (moment(filterValue, "YYYY/MM/DD HH:mm:ss", true).isValid()) {
              filterValue = moment(filterValue).format("YYYY-MM-DD HH:mm:ss");
            }

            if (isFilter) {
              if (queryParam)
                filter += " and ";
              let _operator = this.coreService.getFilterOperator(operator);
              let arrOr = keyValue.split('_or_');

              if (arrOr.length > 1) {
                let index =0;
                arrOr.forEach((element: any) => {
                  if (index == 0)
                    filter += " (";
                  else
                    filter += " or "
                  ////
                  filter += `${element} like `;
                  filter += ` N'%${filterValue}%'`;
                  ////
                  if (index == arrOr.length - 1)
                    filter += ")";
                  index++;
                });

              } else {
                filter += `${keyValue} ${_operator}`;
                if (_operator == "like")
                  filter += ` '%${filterValue}%'`;
                else
                  filter += ` '${filterValue}'`;
              }
            }
          }
          queryParam += filter;
        }
        if (queryParam)
          queryParam = `&queryParam=${window.btoa(unescape(encodeURIComponent(queryParam)))}`;

        return this.http
          .get(`${this.api_url}${path}${paramsUrl + queryParam}`, { params })
          .toPromise()
          .then((response: any) => {
            this.currentlyParam = paramsUrl;
            this.summary = response.data ? (response.data.summary ? response.data.summary : {}) : {};
            let dataTable = this.checkData(response, path);
            let res = {
              data: dataTable.listData,
              totalCount: dataTable.total,
            };
            // res['summary'] = [dataTable['summaries'] + '-' + dataTable['summaries_deduction']];
            // res['summary_deduction'] = [dataTable['summaries_deduction']];
            return res;
          })
          .catch((error) => {
            throw "Lỗi khi load dữ liệu";
          });
      },
    });
  }
  postDataTable(path: string, data: any): any {
    if (!data)
      data = {};
    return new CustomStore({
      key: "id",
      load: (loadOptions: any) => {
        const page = Number(loadOptions.skip / loadOptions.take) + Number(1);



        // if (page) {
        //   paramsUrl += "limit=" + loadOptions.take || 15;
        // }
        // if (loadOptions.take) {
        //   paramsUrl += "&page=" + page || 1;
        // }

        if (page) {
          data.limit = loadOptions.take || 15;
        } else
          data.limit = 15;
        if (loadOptions.take) {
          data.page = page || 1;
        } else
          data.page = 1;

        return this.http
          .post(`${this.api_url}${path}`, data)
          .toPromise()
          .then((rs: any) => {
            let dataTable = this.checkData(rs, path);
            let res = {
              data: dataTable.listData,
              totalCount: dataTable.total,
            };
            // res['summary'] = [dataTable['summaries'] + '-' + dataTable['summaries_deduction']];
            // res['summary_deduction'] = [dataTable['summaries_deduction']];
            return res;
          })
          .catch((error) => {
            throw "Lỗi khi load dữ liệu";
          });
      },
    });
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.api_url}${path}`, { params })
      //.catch(this._serverError);
    // .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.api_url}${path}`, JSON.stringify(body))
      //.catch(this._serverError);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${this.api_url}${path}`, JSON.stringify(body))
      //.catch(this._serverError);
  }

  delete(path: any): Observable<any> {
    return this.http.delete(`${this.api_url}${path}`)
    //.catch(this._serverError);
  }

  checkData(data: any, url: any) {
    let listData: any; // dữ liệu hiển thị
    let total: any;
    let summaries: any;
    let summaries_deduction: any;
    let arrUrl = url.split('?')
    switch (arrUrl[0]) {
      case "/users/load": {
        listData = data.data.users;
        total = data.data.meta.total; // nếu không phân trang
        break;
      }
      case "/lists": {
        // danh mục đối tượng
        listData = data.data.lists;
        total = data.data.meta.total; // nếu phân trang
        break;
      }
      case "/listtypes": {
        listData = data.data.listtypes;
        total = data.data.meta.total;
        break;
      }
      case "/notifies": {
        listData = data.data.notifies;
        total = data.data.meta.total;
        break;
      }
      case "/customers/load": {
        listData = data.data.customers;
        total = data.data.meta.total;
        this.count = total;
        break;
      }

      case "/logs": {
        listData = data.data.logs;
        total = data.data.meta.total;
        break;
      }
      
      case "/record-types": {
        const itemsData = data.data.record_types;
        if (itemsData) {
          // let i = 0;
          // itemsData.forEach((item) => {
          //   item["order"] = i + 1;
          //   i += 1;
          // });
          listData = itemsData;
        } else {
          listData = [];
        }
        total = data.data.meta.total;
        break;
      }
      
      case "/bills/load": {
        listData = data.data.bills;
        total = data.data.meta.total;
        this.count = total;
        break;
      }
      case "/cash_flows/load": {
        listData = data.data.cash_flows;
        total = data.data.meta.total;
        this.count = total;
        break;
      }

      case "/products/load": {
        listData = data.data.products;
        total = data.data.meta.total;
        this.count = total;
        break;
      }
      case "/record-type-form-fields": {
        listData = data.data;
        total = data.meta.total;
        break;
      }
      case "/helps": {
        listData = data.data.helps;
        total = data.data.meta.total;
        break;
      }
      case "/statistic/transaction-detail": {
        listData = data.data.records;
        total = +data.data.meta.total;
        break;
      }
     
      default:
        break;
    }
    this.count = total;
    const res: any = { listData: listData, total: total };
    if (summaries) {
      res["summaries"] = summaries;
    } else {
      res["summaries"] = "";
    }
    if (summaries_deduction) {
      res["summaries_deduction"] = summaries_deduction;
    } else {
      res["summaries_deduction"] = "";
    }
    return res;
  }
}
