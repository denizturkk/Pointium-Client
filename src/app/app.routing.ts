import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { AdminLayoutComponent } from './core/components/app/layouts/admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router';
//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./core/modules/admin-layout.module').then(m => m.AdminLayoutModule)
      //loadChildren: './core/modules/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: 
  [ RouterModule],
})
export class AppRoutingModule { }
