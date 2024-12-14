import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  departmentId: string = '';
  employees: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.departmentId = params['id'];
      this.loadEmployees(this.departmentId);
    });
  }

  // Load employees from backend based on department ID
  loadEmployees(departmentId: string): void {
    this.employeeService.getEmployeesByDepartment(departmentId).subscribe((employees) => {
      this.employees = employees;
    });
  }

  // View details of an employee
  viewEmployee(id: string): void {
    this.router.navigate(['/employee', id]);
  }

  // Edit an employee's information
  editEmployee(id: string): void {
    this.router.navigate(['/edit-employee', id]);
  }

  // Delete an employee
  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.loadEmployees(this.departmentId); // Reload the employee list after deletion
      });
    }
  }
}
