import { Component, ElementRef, Input, OnInit, OnDestroy, Renderer2, forwardRef } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import moment from 'moment';
import { AuthService } from '../../../core/services/auth.service';
import { SidebarService } from '../../../config';
import { ReplaceDirective } from '../../directives/replace/replace.directive';
import { NavDropdownToggleDirective, NavDropdownDirective } from '../../directives/nav-dropdown/nav-dropdown.directive';
import { NgIf, NgFor, NgClass } from '@angular/common';

// import { UsersService } from '@modules/users/shared';


class Helper {
  compareUrl(fUrl: any, sUrl: any) {
    const nfUrl = fUrl.split('/');
    const nsUrl = sUrl.split('/');
    if (nfUrl[1] === nsUrl[1] && nfUrl[2] === nsUrl[2]) {
      return true;
    }
    return false;
  }

  isUrl(childrens: any, currentUrl: any) {
    for (let i = 0; i < childrens.length; i++) {
      if (this.compareUrl(childrens[i].url, currentUrl)) {
        return true;
      }
    }
    return false;
  }

  checkPermissions(item: any) {
    const currentUser = JSON.parse(localStorage['currentUser']);
    if (currentUser.user.permissions) {
      const permissionsCurrentUser = currentUser.user.permissions.split(',');
      if (item.permissions) {
        let count = 0;
        item.permissions.forEach((itemPermission: any) => {
          if (permissionsCurrentUser.includes(itemPermission)) {
            count++;
          }
        });
        if (count > 0) {
          return true;
        }
      }
    }
    return false;
  }
}

/**
 * Component quản lý layout sideBar.
 *
 * @author Lamnt
 */
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink, NgFor]
})
export class AppSidebarNavComponent {
  message: string = "";
  public navigation: any;
  url: any;
  expiredDate: any;
  formatDate: any;
  class_sidebar_icon: any;
  class_active: any;
  _translate: any;
  countTb: any;
  @Input() currentUser: any;
  @Input() numberNotify: any;

  @Input() isVisibleBreadcrumbs: any;
  constructor(
    private router: Router,
    public authService: AuthService,
  ) {
    this.url = router.url;
    this._translate = authService.getTranslate();
    if (this.authService._isMobile)
      this.navigation = SidebarService._sidebarMobile(this._translate);
    else
      this.navigation = SidebarService._sidebar(this._translate);

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

    if (this.currentUser && this.currentUser.user.is_super_admin != true) {
      //this.navigation = this.navigation.slice(0, -1);
    }

    this.countTb = this.authService.getNotify();
    if (this.countTb && this.countTb !== '0') {
      this.message = this.countTb;
    }
  }
  ngAfterViewInit() {
    this.getExpiredDate();
  }

  public isDivider(item: any) {
    return item.divider ? true : false;
  }

  public isTitle(item: any) {
    return item.title ? true : false;
  }

  public over(navitem: any) {
    this.class_sidebar_icon = navitem.icon_active;
  }

  public out(navitem: any) {
    this.class_sidebar_icon = navitem.icon;
  }

  public click(navitem: any) {
    this.isVisibleBreadcrumbs = false;
    // this.class_sidebar_icon = navitem.icon_active;
  }

  // public static isPermissions(navitem, currentUser) {
  //   return UsersService.isPermissions(navitem, currentUser);
  // }
  public isPermissions(navitem: any) {
    let count = 0;
    if (navitem.permissions.includes('ALL')) {
      count++;
    } else {
      if (navitem.permissions.includes('superadmin')) {
        if (this.currentUser.user.is_super_admin == true) {
          count++;
        }
      } else {
        let _obj = this.currentUser.user.permissions.filter((p: any) => p.account_id == this.currentUser.user.default_account_id)[0];
        if (_obj && _obj.roles.length > 0) {
          for (var i = 0; i < navitem.permissions.length; i++) {
            let _objRole = _obj.roles.filter((p: any) => p == navitem.permissions[i])[0];
            if (_objRole) {
              count++;
              break;
            }
          }
        }
      }

    }
    if (count > 0) {
      return true;
    }else return false;
  }

  public isExpired(navitem: any) {
    let count = 0;
    let thoi_han = this.authService.getExpireDate;
    if (thoi_han) {
      if (thoi_han.thoi_han == "het_han_dung_thu" || thoi_han.thoi_han == "het_han") {
        if (navitem.url == '/system/information-service') {
          count++;
        }
        if (navitem.url == '/system/unit-account') {
          if (this.currentUser.user.is_super_admin == true) {
            count++;
          }
        }
      } else count++;
    } else count++;

    if (count > 0) {
      return true;
    }else return false;

  }
  checkExpiration(navitem: any) {
    let isExpired = this.authService.getExpireDate;
    if (isExpired && isExpired.thoi_han) {
      if (isExpired.thoi_han == "het_han_dung_thu" || isExpired.thoi_han == "het_han")
        return "menu-sidebar disabled";
      else
        return "menu-sidebar";
    } else {
      if (this.authService.currentUser.default_account.expiration_date) {
        let _expiredDate = moment(this.authService.currentUser.default_account.expiration_date);
        let _diff = _expiredDate.diff(moment(), 'days');
        if (_diff < 0) {
          return "menu-sidebar disabled";
        } else
          return "menu-sidebar";
      } else
        return "menu-sidebar";
    }
  }

  public classActive(navitem: any) {
    //return this.router.isActive(navitem.url, false);
    if (navitem.url) {
      if (this.router.isActive(navitem.url, false)) {
        if (this.authService._isMobile) {
          return 'sidebar-mobile-active';

        } else
          return 'sidebar-active';

      } else {
        if (this.authService._isMobile) {
          return 'sidebar-mobile-no-active';

        } else
          return 'sidebar-no-active';
      }
    } else {
      return 'sidebar-no-active';
    }
  }

  public checkActive(navitem: any) {
    // return this.router.isActive(navitem.url, false);
    if (this.router.isActive(navitem.url, false)) {
      return true;
    } else {
      return false;
    }
  }

  public iconActive(navitem: any) {
    if (navitem.url) {
      if (this.router.isActive(navitem.url, false)) {
        return navitem.icon_active;
      } else {
        return navitem.icon;
      }
    } else {
      return navitem.icon;
    }
  }

  public classHeThongActive(navitem: any) {
    let _arr = this.router.url.split('?');
    let _objChildren = navitem.children.filter((p: any) => p.url == _arr[0])[0];
    if (_objChildren || this.router.url.includes('/system/information-service/')) {
      return 'sidebar-active';
    } else {
      return 'sidebar-no-active';
    }
  }

  public iconHeThongActive(navitem: any) {
    let _arr = this.router.url.split('?');
    let _objChildren = navitem.children.filter((p: any) => p.url == _arr[0])[0];
    if (_objChildren || this.router.url.includes('/system/information-service/')) {
      return navitem.icon_active;
    } else {
      return navitem.icon;
    }
  }

  getExpiredDate() {
    this.expiredDate = moment(this.currentUser.default_account.expiration_date);
    this.formatDate = this.expiredDate.format('DD/MM/YYYY');
    let expiredElement = document.getElementById('thoi_han');
    if (expiredElement) {
      let remainDay = this.expiredDate.diff(moment(), 'days');
      if (remainDay < 30) {
        expiredElement.style.color = 'rgba(236, 30, 36, 1)';
      } else {
        expiredElement.style.color = 'rgba(12, 79, 159, 1)';
      }
    }
  }
}

/**
 * Component quản lý thẻ tiêu đề cho sidebar
 *
 * @author Lamnt
 */
@Component({
    selector: 'app-sidebar-title',
    template: '',
    standalone: true
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() title: any;
  expiredDate: any;

  constructor(private el: ElementRef, private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.title.name);
    this.renderer.addClass(li, 'nav-title');

    if (this.title.class) {
      const classes = this.title.class;
      this.renderer.addClass(li, classes);
    }

    if (this.title.wrapper) {
      const wrapper = this.renderer.createElement(this.title.wrapper.element);

      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(li, wrapper);
    } else {
      this.renderer.appendChild(li, name);
    }
    this.renderer.appendChild(nativeElement, li);
  }

}

/**
 * Component hiển thị từng module
 *
 * @author Lamnt
 */
@Component({
    selector: 'app-sidebar-item',
    template: `

    <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
      <app-sidebar-link [link]='item' *ngIf="hasPermission"></app-sidebar-link>
    </li>
    <ng-template #dropdown>
      <li *ngIf="hasVisibleRoot" [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
          [class.open]="isOpenDropdown"
          appNavDropdown>
        <app-sidebar-dropdown [link]='item'></app-sidebar-dropdown>
      </li>
    </ng-template>
  `,
    standalone: true,
    imports: [NgIf, NgClass, forwardRef(() => AppSidebarNavLinkComponent), ReplaceDirective, NavDropdownDirective, forwardRef(() => AppSidebarNavDropdownComponent)]
})
export class AppSidebarNavItemComponent implements OnInit {
  @Input() item: any;
  isOpenDropdown = false;
  helper: Helper = new Helper();
  currentUser: any;
  hasPermission = true;
  hasVisibleRoot = true;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
  }

  // Khoi tao
  ngOnInit() {

    if (this.isDropdown()) {
      let countVisible = 0;
      const childrens = this.item.children;
      childrens.forEach((children: any) => {
        if (this.helper.checkPermissions(children)) {
          countVisible++;
        }
      });
      this.hasVisibleRoot = countVisible === 0 ? false : true;
      this.isOpenDropdown = this.helper.isUrl(childrens, this.router.url);
    } else {
      this.hasPermission = this.helper.checkPermissions(this.item);
    }
  }

  public hasClass() {
    return this.item.class ? true : false;
  }

  public isDropdown() {
    return this.item.children ? true : false;
  }

  public thisUrl() {
    return this.item.url;
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false);
  }
}

/**
 * Component hiển thị Link Sidebar
 *
 * @author Lamnt
 */
@Component({
    selector: 'app-sidebar-link',
    template: `
    <a *ngIf="!isExternalLink(); else external"
       class="{{ layout }}"
       [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
       routerLinkActive="active"
       [routerLink]="[url]">
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      <img class="sidebar-icon" *ngIf="isImages()" [src]="link.images" alt="">
      <span *ngIf="isImages()" class="sidebar-text">{{ link.name }}</span>
      <div style="float: left;text-align: center;width: 76px;">
        <span style="font-size: x-small;" *ngIf="isIcon()">{{ link.name }}</span>
      </div>

      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ng-template #external>
      <a class="{{ layout }}" [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{url}}"
         target="_blank">
        <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-template>
  `,
    standalone: true,
    imports: [NgIf, RouterLinkActive, NgClass, RouterLink]
})
export class AppSidebarNavLinkComponent implements OnInit {
  @Input() link: any;
  public url: any;
  public layout: any;

  constructor() {
  }

  // Khoi tao
  ngOnInit() {
    this.layout = 'nav-link';
    // check system or backend
    this.url = this.link.url; // "/" + this.link.url
  }

  public hasVariant() {
    return this.link.variant ? true : false;
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  public isImages() {
    return this.link.images ? true : false;
  }

}

/**
 * Component quản lý dropdown cho sidebar
 *
 * @author Lamnt
 */
@Component({
    selector: 'app-sidebar-dropdown',
    template: `
    <a class="nav-link nav-dropdown-toggle {{layout}}" appNavDropdownToggle [ngClass]="{'active': isActiveDropdown}">
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      <img class="sidebar-icon" *ngIf="isImages()" [src]="link.images" alt="">
      <span class="sidebar-text">{{ link.name }}</span>
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <app-sidebar-item [item]='child'></app-sidebar-item>
      </ng-template>
    </ul>
  `,
    standalone: true,
    imports: [NavDropdownToggleDirective, NgClass, NgIf, NgFor, AppSidebarNavItemComponent, ReplaceDirective]
})
export class AppSidebarNavDropdownComponent implements OnInit, OnDestroy {
  @Input() link: any;
  layout: any;
  isActiveDropdown: boolean = false;
  helper: Helper = new Helper();

  ngOnInit() {
    const childrens = this.link.children;
    this.isActiveDropdown = this.helper.isUrl(childrens, this.router.url);

    // this.routerSub = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(evt => {
    //   this.isActiveDropdown = this.helper.isUrl(childrens, this.router.url);
    // });
  }

  constructor(
    private router: Router,
  ) {
    this.layout = 'nav-link';
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  public isImages() {
    return this.link.images ? true : false;
  }

  ngOnDestroy() {
  }
}

export const APP_SIDEBAR_NAV = [
  AppSidebarNavComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavTitleComponent,
];
