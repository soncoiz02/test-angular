import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';
import {routing} from './system.routing';
import { LayoutModule } from '../layout/layout.module';
//import {LayoutModule} from '../layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        LayoutModule,
        SystemComponent,
    ]
})
export class SystemModule {
}
