import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  imports: [CommonModule,FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent {
  departmentId: string = '';
  departments: any[] = [];

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  // Load departments from backend
  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  // Navigate to employee list for a selected department
  getEmployees(): void {
    if (this.departmentId) {
      this.router.navigate(['/employees', this.departmentId]);
    } else {
      alert('Please enter a valid Department ID');
    }
  }
}
