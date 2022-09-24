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
import { ProjectAddComponent } from '../components/admin/project-add/project-add.component';
import { CustomerAddComponent } from '../components/admin/customer-add/customer-add.component';
import { UserScoreByProjectComponent } from '../components/admin/user-score-by-project/user-score-by-project.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { UserProjectByAdminComponent } from '../components/admin/user-project-by-admin/user-project-by-admin.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);








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
    FullCalendarModule
    
    
  ],
  declarations: [
    DashboardComponent,
    ProjectComponent,
    UserComponent,
    CustomerComponent,
    FieldComponent,
    DepartmentComponent,
    JobTitleComponent,
    ProjectDetailsComponent,
    ProjectAddComponent,
    CustomerAddComponent,
    UserScoreByProjectComponent,
    UserProjectByAdminComponent, 
  ]
})
export class AdminLayoutModule {}
