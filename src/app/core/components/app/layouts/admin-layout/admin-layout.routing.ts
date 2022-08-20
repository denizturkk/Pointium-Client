import { Routes } from '@angular/router';
import { ProjectComponent } from 'app/core/components/admin/project/project.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';






export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'project',      component: ProjectComponent },

];
