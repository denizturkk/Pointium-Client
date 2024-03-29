import { Routes } from '@angular/router';
import { CustomerAddComponent } from 'app/core/components/admin/customer-add/customer-add.component';
import { CustomerComponent } from 'app/core/components/admin/customer/customer.component';
import { DepartmentComponent } from 'app/core/components/admin/department/department.component';
import { FieldComponent } from 'app/core/components/admin/field/field.component';
import { JobTitleComponent } from 'app/core/components/admin/job-title/job-title.component';
import { ProjectAddComponent } from 'app/core/components/admin/project-add/project-add.component';
import { ProjectDetailsComponent } from 'app/core/components/admin/project-details/project-details.component';
import { ProjectComponent } from 'app/core/components/admin/project/project.component';
import { UserAddComponent } from 'app/core/components/admin/user-add/user-add.component';
import { UserProjectByAdminComponent } from 'app/core/components/admin/user-project-by-admin/user-project-by-admin.component';
import { UserScoreByProjectComponent } from 'app/core/components/admin/user-score-by-project/user-score-by-project.component';
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
    {path:"projects/projectdetails/:id", component:ProjectDetailsComponent},
    {path:"projects/add", component:ProjectAddComponent},
    {path:"users/add", component:UserAddComponent},
    {path:"customers/add", component:CustomerAddComponent},
    {path:"projects/projectdetails/:projectid/user/:userid/score", component:UserScoreByProjectComponent},
    {path:'users/:userid/projects', component:UserProjectByAdminComponent }
    
];
