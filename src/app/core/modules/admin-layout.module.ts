import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../components/app/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AdminLayoutRoutes } from '../components/app/layouts/admin-layout/admin-layout.routing';
import { ProjectComponent } from '../components/admin/project/project.component';
import { UserComponent } from '../components/admin/user/user.component';
import { CustomerComponent } from '../components/admin/customer/customer.component';
import { FieldComponent } from '../components/admin/field/field.component';
import { DepartmentComponent } from '../components/admin/department/department.component';
import { JobTitleComponent } from '../components/admin/job-title/job-title.component';
import { ProjectDetailsComponent } from '../components/admin/project-details/project-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
  ],
  declarations: [
    DashboardComponent,
    ProjectComponent,
    UserComponent,
    CustomerComponent,
    FieldComponent,
    DepartmentComponent,
    JobTitleComponent,
    ProjectDetailsComponent
  ]
})
export class AdminLayoutModule {}
