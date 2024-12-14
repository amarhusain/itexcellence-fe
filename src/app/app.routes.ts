import { Routes } from '@angular/router';

import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: DepartmentComponent },
    { path: 'employees/:id', component: EmployeeListComponent },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
];