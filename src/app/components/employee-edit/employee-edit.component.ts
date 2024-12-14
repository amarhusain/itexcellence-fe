import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent {

  @Input() employee: any = {};
  @Output() updateShowEditWidget = new EventEmitter<boolean>(); 

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(
      {
        next: (response: any) => {
          alert('Employee updated successfully!');
          this.updateShowEditWidget.emit(false); 
        },
        error: (err: any) => {
          console.error('Error updating employee', err);
        }
      }
    );
  }

}
