import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      // {
      //   path: 'lists',
      //   loadChildren: './lists/lists.module#ListsModule',
      //   data: { brec: 'ds_danh_muc' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'bills', loadChildren: './bills/bills.module#BillsModule',
      //   data: { brec: 'ds_danh_muc' },
      //   //canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'products', loadChildren: './products/products.module#ProductsModule',
      //   data: { brec: 'ds_danh_muc' },
      //   //canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'cash-flows', loadChildren: './cash-flows/cash-flows.module#CashFlowsModule',
      //   data: { brec: 'ds_danh_muc' },
      //   //canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'sidebar-more', loadChildren: './sidebar-more/sidebar-more.module#SidebarMoreModule',
      //   data: { brec: 'ds_danh_muc' },
      //   //canActivate: [PermissionGuard]
      // },
      // // {
      // //   path: 'bills:id', loadChildren: './bills/bills.module#BillsModule',
      // //   data: { brec: 'ds_danh_muc' },
      // //   canActivate: [PermissionGuard]
      // // },
      // {
      //   path: 'staffs', loadChildren: './staffs/staffs.module#StaffsModule',
      //   data: { brec: 'nguoi_lao_dong' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'users', loadChildren: './users/users.module#UsersModule',
      //   data: { brec: 'ds_nguoi_dung' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'unit-account',
      //   loadChildren: './info-unit/info-unit.module#InfoUnitModule',
      //   data: { brec: 'unit_information' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'customers',
      //   loadChildren: './customers/customers.module#CustomersModule',
      //   data: { brec: 'customer' },
      //   //canActivate: [PermissionGuard]
      // },

      // {
      //   path: 'reports/debts',
      //   loadChildren: './reports/reports.module#ReportsModule',
      //   data: { brec: 'reports' },
      //   //canActivate: [PermissionGuard]
      // },

      // {
      //   path: 'configs',
      //   loadChildren: './configs/configs.module#ConfigsModule',
      //   data: { brec: 'tham_so_he_thong' },
      //   // resolve: {init: ConfigsResolver},
      //   canActivate: [PermissionGuard],
      // },    
      // {
      //   path: 'unit-account',
      //   loadChildren: './info-account/info-account.module#InfoAccountModule',
      //   data: { brec: 'account_information' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'tutorial-declaration',
      //   loadChildren: './tutorial-categories/tutorial-categories.module#TutorialCategoriesModule',
      //   data: { brec: 'Hướng dẫn kê khai' },
      //   canActivate: [PermissionGuard],
      // },
      // {
      //   path: 'notification',
      //   loadChildren: './notification/notification.module#NotificationModule',
      //   data: { brec: 'Thông báo' },
      //   canActivate: [PermissionGuard],
      // },
      // {
      //   path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule',
      //   data: { brec: 'Hướng dẫn' },
      //   canActivate: [PermissionGuard],
      // },
      // {
      //   path: 'diary', loadChildren: './diary/diary.module#DiaryModule',
      //   data: { brec: 'ds_nhat_ky' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'information-service',
      //   loadChildren: './info-service/info-service.module#InfoServiceModule',
      //   data: { brec: 'information_services' },
      //   canActivate: [PermissionGuard],
      // },
      // {
      //   path: 'listtypes',
      //   loadChildren: './listtypes/listtypes.module#ListtypesModule',
      //   data: { brec: 'ds_loai_danh_muc' },
      //   canActivate: [PermissionGuard]
      // },
      // {
      //   path: 'manage-notifies',
      //   loadChildren: './manage-notifies/manage-notifies.module#ManageNotifiesModule',
      //   data: { brec: 'quan_tri_thong_bao' },
      //   canActivate: [PermissionGuard]
      // },
      { path: '**', redirectTo: 'templates' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class routing {
}
