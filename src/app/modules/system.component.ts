import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import {IndexComponent} from './records/components/index/index.component';
//import * as $ from 'jquery';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { FooterComponent } from '../layout/components';
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarMoreComponent } from '../layout/components/sidebar-more/sidebar-more.component';
import { APP_SIDEBAR_NAV, AppSidebarNavComponent } from '../layout/components/sidebar/sidebar.component';
import { AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES } from '../layout/directives';
const APP_DIRECTIVES = [AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES]
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  standalone: true,
  imports: [
    NgIf,
    AppSidebarNavComponent,
    HeaderComponent,
    RouterOutlet,
    FormsModule,
    FooterComponent,
    APP_SIDEBAR_NAV,
    SidebarMoreComponent,
    RouterLink
    // ...APP_DIRECTIVES,
  ],
})
export class SystemComponent {
  // @ViewChild(IndexComponent) RecordsComponent: IndexComponent;

  currentUser: any;
  isVisibleBreadcrumbs = true;
  isShowBreadcrumbs = false;
  numberNotify = 0;
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit() {
    // $('html').css({
    //   '-moz-user-select': '',
    //   //'-moz-user-select': 'none',
    //   '-o-user-select': '',
    //   '-khtml-user-select': '',
    //   '-webkit-user-select': '',
    //   '-ms-user-select': '',
    //   'user-select': ''
    // });
  }

  onActivate(componentRef: any) {
    let a = '';
    //componentRef.myFunc();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let isMobile = false;
    if (window.innerWidth < 768) {
      isMobile = true;
    } else isMobile = false;
    if (isMobile != this.authService._isMobile) {
      this.authService._isMobile = isMobile;
      window.location.reload();
    }
  }
}
