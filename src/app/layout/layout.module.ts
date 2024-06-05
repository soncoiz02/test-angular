import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import {AsideToggleDirective,NAV_DROPDOWN_DIRECTIVES,ReplaceDirective,SIDEBAR_TOGGLE_DIRECTIVES} from './directives';
const APP_DIRECTIVES = [AsideToggleDirective,NAV_DROPDOWN_DIRECTIVES,ReplaceDirective,SIDEBAR_TOGGLE_DIRECTIVES]

import { 
  HeaderComponent,
  APP_SIDEBAR_NAV,
  FooterComponent
} from './components';
import { SidebarMoreComponent } from './components/sidebar-more/sidebar-more.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        FormsModule,
        FooterComponent,
        HeaderComponent,
        APP_SIDEBAR_NAV,
        ...APP_DIRECTIVES,
        SidebarMoreComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        APP_SIDEBAR_NAV,
        ...APP_DIRECTIVES,
        SidebarMoreComponent
    ],
    providers: []
})
export class LayoutModule {
  constructor( @Optional() @SkipSelf() parentModule: LayoutModule) {
    if (parentModule) {
      throw new Error(
        'LayoutModule is already loaded. Import it in the AppModule only');
    }
  }
}
