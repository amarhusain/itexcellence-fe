import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule,FormsModule, EmployeeEditComponent],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  employee: any;
  showEditWidget = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.params['id'];
    this.loadEmployee(employeeId);
  }

  // Load employee details from backend by ID
  loadEmployee(id: string): void {
    this.employeeService.getEmployeeById(id).subscribe((employee) => {
      this.employee = employee;
    });
  }
  editEmployee(id: string): void {
    this.showEditWidget = true;
  }

  handleShowEditWidgetChange(value: boolean) {
    this.showEditWidget = value;
  }

  // Delete the employee
  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          alert('Employee deleted successfully');
          this.router.navigate(['/home']); // Navigate back to the employee list after deletion
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
          alert('There was an error deleting the employee');
        }
      });
    }
  }
}
