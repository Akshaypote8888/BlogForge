import { Component, inject, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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


  isEdit = false;

  categoryForm: FormGroup = new FormGroup({
    categoryTitle: new FormControl('', Validators.required),
    categoryDescription: new FormControl('')

  });

  private api = inject(ApiService);
  private data = inject(MAT_DIALOG_DATA) as Category;

  constructor(private dialogRef: MatDialogRef<CategoryForm>,) {

    this.categoryForm.patchValue({
      categoryTitle: this.data.categoryTitle || '',
      categoryDescription: this.data.categoryDescription || ''
    });
    if (this.data.id) {
      this.isEdit = true; 
    }

  }


  submitForm() {
    if (this.categoryForm.valid) {

      const payload = {
        categoryTitle: this.categoryForm.value.categoryTitle,
        categoryDescription: this.categoryForm.value.categoryDescription,
        status: true
      };

      if (this.isEdit) {
        this.api.updateCategory(this.data.id, payload).subscribe({
          next: res => this.dialogRef.close(res),
          error: err => console.error('Update failed', err)
        });
      } else {
        this.api.addCategory(payload).subscribe({
          next: res => this.dialogRef.close(res),
          error: err => console.error('Create failed', err)
        });
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
