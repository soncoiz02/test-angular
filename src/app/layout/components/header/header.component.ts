import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { DxDataGridComponent } from "devextreme-angular";

import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { BsModalService } from "ngx-bootstrap/modal";
import * as moment from "moment";
import { AuthService } from "../../../core/services/auth.service";
import { Library } from "../../../core/library";
import { FormsModule } from "@angular/forms";
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgFor
  ],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent | undefined;

  class_header: any;
  isVn: boolean = true;
  _translate: any;
  currentUser: any;
  //@Input() RecordsComponent: any;
  bsModalRef: BsModalRef | undefined;
  dataSource: any;
  message: string = "";
  configs: any;
  notiNumber = 0;
  txttimkiem: any = "";
  checkWaitSign: boolean = false;
  isShowCheckWait: boolean = false;
  isKyVaNop: boolean = false;
  isShowPopup: boolean = false;

  _accounts: any = [];
  account: any;
  constructor(
    public authService: AuthService,
    //public usersService: UsersService,
    public router: Router,
    private modalService: BsModalService,
    //public configsService: ConfigsService,
    //private data: SharedConfigService,
    //private loginService: LoginService
  ) {
    // if (this.authService.getLanguage() != "vn") {
    //   this.isVn = false;
    // }
    // this._translate = this.authService.getTranslate();
    // this.currentUser = this.authService.currentUser;
    // this.class_header = "app-header-system";
  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    // this._accounts = JSON.parse(JSON.stringify(this.currentUser.accounts));
    // this.account = this._accounts[0];
    // //this.data.currentMessage.subscribe((message: any) => (this.message = message));
    // //KY_VA_NOP_HO_SO
    // if (this.currentUser.user && this.currentUser.user.permissions && this.currentUser.user.permissions.length > 0) {
    //   for (let i = 0; i < this.currentUser.user.permissions.length; i++) {
    //     let roles = this.currentUser.user.permissions[i].roles;
    //     if (roles && roles.length > 0) {
    //       let role = roles.filter((p: any) => p == "KY_VA_NOP_HO_SO")[0];
    //       if (role) {
    //         this.isKyVaNop = true;
    //         break;
    //       }
    //     }
    //   }
    // }
    // this.configs = this.authService.configs;
    // if (this.configs.system_parameter && this.currentUser.default_account) {
    //   if (this.configs.system_parameter.nhom_doi_tuong != this.currentUser.default_account.unit_type) {
    //     setTimeout(() => {
    //       this.configs = this.authService.configs;
    //       if (this.configs.system_parameter) {
    //         this.message = this.configs[sEnum.configSys.system_parameter].doi_tuong;
    //       }
    //     }, 500);
    //   }
    //   else {
    //     if (this.configs.system_parameter) {
    //       this.message = this.configs[sEnum.configSys.system_parameter].doi_tuong;
    //     }
    //   }
    // }
  }

  changeUserInfo() {
    // if (this.currentUser.user.id) {
    //   Library.showloading();
    //   this.usersService
    //     .getUser(this.currentUser.user.id)
    //     .subscribe((res: any) => {
    //       if (res.status == sEnum.statusApi.success) {
    //         const initialState = {
    //           user: res.data.user,
    //         };
    //         initialState.user.password_old = null;
    //         Library.hideloading();
    //         this.bsModalRef = this.modalService.show(ChangeInfoComponent, {
    //           class: "modal-lg modal-margin-152",
    //           initialState,
    //           backdrop: "static",
    //           keyboard: false,
    //         });
    //       } else {
    //         Library.notify(res.message, sEnum.statusApi.error);
    //       }
    //     });
    // }
  }

  logout() {
    this.authService.logout();
    window.location.href = "/login";
  }

  changLangugeVn() {
    this.isVn = true;
    this.authService.setLanguage("vn");
  }

  changLangugeEn() {
    this.isVn = false;
    this.authService.setLanguage("en");
  }

  choiseDefaultAccount(id: any) {
    // Library.showloading();
    // const user = {
    //   user: {
    //     default_account_id: id,
    //   },
    // };
    // if (this.authService.getExpireDate) {
    //   this.authService.setExpiration(null);
    // }
    // this.usersService.setDefaultAccount(user).subscribe((res: any) => {
    //   if (res.status == "success") {
    //     this.onRefresh();
    //     // if (this.documentElement) {
    //     //   this.dataGrid.instance.refresh();
    //     // }
    //     const default_account = res.data.account;
    //     if (default_account) {
    //       this.currentUser.default_account = default_account;
    //       this.currentUser.user.default_account_id = id;
    //       localStorage["currentUser"] = JSON.stringify(this.currentUser);
    //       this.authService.currentUser = this.authService.getCurrentUser();
    //       this.configsService.getAll().toPromise().then((res1: any) => {
    //         if (res1.status == sEnum.statusApi.success) {
    //           this.authService.setConfigs(res1.data.configs);
    //           this.configs = this.authService.configs;
    //           if (this.configs.system_parameter) {
    //             this.message = this.configs[
    //               sEnum.configSys.system_parameter
    //             ].doi_tuong;
    //           }
    //         }
    //       }).then((res: any) => {
    //         this.loginService.reloadDM(default_account);
    //       })
    //     }
    //     Library.hideloading();
    //     this.loginService.checkNotify(this.router.url);
    //   } else {
    //     Library.notify(res.message, "error");
    //   }
    // });
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: false }).then(() =>
      setTimeout(() => {
        this.router.navigateByUrl(currentUrl, { skipLocationChange: false });
      }, 500)
    );

    this.router.onSameUrlNavigation = "reload";
    this.router.navigateByUrl(this.router.url).then(() => {
      this.router.onSameUrlNavigation = "ignore";
    });
    // let currentUrl = this.router.url;
    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.router.navigate([currentUrl]);
    // });
  }

  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    const currentUrl = this.router.url + "?isView=true";
    this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false;
      this.router.navigate([currentUrl]);
    });
  }

  fullScreen() {
    // if (screenfull.enabled) {
    //   screenfull.toggle();
    // }
  }

  onCheckWaitSign(checked: any) {
    // this.checkWaitSign = NumberUtilsService._attemptConvertBool(checked);
    // this.authService.setStatusWaitSign(NumberUtilsService._attemptConvertBool(checked));
    // this.authService.getInforUnit(NumberUtilsService._attemptConvertBool(checked)).subscribe((rs: any) => {
    //   if (rs.status == "success") {
    //     this._accounts = rs.data;
    //     let lstWaitSign = this._accounts.filter((p: any) => parseInt(p.record_wait_sign) > 0);
    //     if (lstWaitSign && lstWaitSign.length > 0)
    //       this.isShowCheckWait = true;
    //     else
    //       this.isShowCheckWait = false;
    //   }
    // });
  }
  changeStyle(e: any) {
    if (this._accounts && this._accounts.length > 1) {
      // let isDisplayParent = document.getElementById("dropdown-unit-parent").classList.toggle("show");
      // document.getElementById("dropdown-unit").classList.toggle("show");
      if (e.type == "mouseenter" && this.isKyVaNop) {
        let checkWaitSign = this.authService.getStatusWaitSign();
        this.onCheckWaitSign(checkWaitSign);
      }
      if (e.type == "mouseleave") {
        this.txttimkiem = "";
        this.isShowPopup = false;
        // this.checkWaitSign = false;
        setTimeout(() => {
          // if (this.checkWaitSign) {
          //   this.checkWaitSign = false;
          //   this.onCheckWaitSign(false);
          // }
          // else
          //this.filterFunction(null);
        }, 100);
      }
    }
  }
  interval: any;
  startTimer() {
    this.interval = setInterval(() => {
      let time = 0;
      if (time === 0) {
        time++;
      } else {
        time++;
      }
    }, 1000);
  }
  openPopup() {
    if (this._accounts && this._accounts.length > 1) {
      if (this.isKyVaNop) {
        let checkWaitSign = this.authService.getStatusWaitSign();
        this.onCheckWaitSign(checkWaitSign);
      }
      this.isShowPopup = true;
    }
  }
}
