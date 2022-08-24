import { Routes } from '@angular/router';
import { CustomerComponent } from 'app/core/components/admin/customer/customer.component';
import { DepartmentComponent } from 'app/core/components/admin/department/department.component';
import { FieldComponent } from 'app/core/components/admin/field/field.component';
import { JobTitleComponent } from 'app/core/components/admin/job-title/job-title.component';
import { ProjectDetailsComponent } from 'app/core/components/admin/project-details/project-details.component';
import { ProjectComponent } from 'app/core/components/admin/project/project.component';
import { UserComponent } from 'app/core/components/admin/user/user.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',    component: DashboardComponent},
    { path: 'projects',      component: ProjectComponent},
    { path: 'users',         component: UserComponent},
    {path:"customers",       component:CustomerComponent},
    {path:"fields",          component:FieldComponent},
    {path:"departments",     component:DepartmentComponent},
    {path:"jobTitles",       component:JobTitleComponent},
    {path:"projects/projectdetails/:id", component:ProjectDetailsComponent}

];
