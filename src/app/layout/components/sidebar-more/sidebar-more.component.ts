import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { DxDataGridComponent } from "devextreme-angular";
import { AuthService } from "../../../core/services/auth.service";

@Component({
    selector: "app-sidebar-more",
    templateUrl: "./sidebar-more.component.html",
    styleUrls: ["./sidebar-more.component.scss"],
    standalone: true,
})
export class SidebarMoreComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent | undefined;

  class_header: any;
  isVn: boolean = true;
  _translate: any;
  @Input() currentUser: any;
  //@Input() RecordsComponent: any;
  dataSource: any;
  configs: any;
  notiNumber = 0;
  txttimkiem: any = "";
  checkWaitSign: boolean = false;
  isShowCheckWait: boolean = false;
  isKyVaNop: boolean = false;
  isShowPopup: boolean = false;

  _accounts = [];
  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
    if (this.authService.getLanguage() != "vn") {
      this.isVn = false;
    }
    this._translate = this.authService.getTranslate();
    // this.currentUser = this.authService.currentUser;
  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this._accounts = JSON.parse(JSON.stringify(this.currentUser.accounts));
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
}
