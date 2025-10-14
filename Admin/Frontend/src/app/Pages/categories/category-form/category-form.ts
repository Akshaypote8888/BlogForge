import { Component, inject, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from '../../../services/api-service';
import { Category } from '../../../interface/category';

@Component({
  selector: 'app-category-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.scss'
})
export class CategoryForm {

 

  categoryForm: FormGroup = new FormGroup({
    categoryTitle: new FormControl('', Validators.required)

  });

  private api = inject(ApiService);

  constructor(private dialogRef: MatDialogRef<CategoryForm>) { }


  submitForm() {
    if (this.categoryForm.valid) {

      const payload = {
      categoryTitle: this.categoryForm.value.categoryTitle,
      status: 'Active',
      
    };

      this.api.addUser(payload).subscribe({
        next: (res: any) => {
          console.log('Created User:', res);
          this.dialogRef.close(res);
        },
        error: (err) => {
          console.error('Create user failed:', err);
        }
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
