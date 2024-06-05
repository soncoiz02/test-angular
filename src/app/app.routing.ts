import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppPreloadingStrategy } from './app-preloading.strategy';

export const routes: Routes = [

  {
    path: 'system',
    loadChildren: () => import('./modules/system.module').then(m => m.SystemModule),
    data: { preload: true },
    //canActivate: [AuthGuard, RegisterGuard, CompleteRegisterGuard, RegisterGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/system.module').then(m => m.SystemModule),
    data: { preload: true },
    //canActivate: [AuthGuard, RegisterGuard, CompleteRegisterGuard, RegisterGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy });

