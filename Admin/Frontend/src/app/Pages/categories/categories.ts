import { Component, Inject, inject, model, OnInit, signal, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Category } from '../../interface/category';
import { DatePipe, NgClass } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CategoryForm } from "./category-form/category-form";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports: [DatePipe, MatIconModule, MatButtonModule, MatTooltipModule, FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories implements OnInit {

  searchText: string = '';
  filteredCategories = signal<Category[]>([]);

  isLoading: boolean = true;



  categories = signal<Category[]>([]);

  private api = inject(ApiService);
  dialogRef = inject(MatDialog);


  constructor(private dialog: MatDialog) {
    this.filteredCategories.set(this.categories());

  }

  ngOnInit() {
    this.getCategories();
  }

  onSearch() {
  if (!this.searchText) {
    this.filteredCategories.set(this.categories());
    return;
  }

  const text = this.searchText.toLowerCase();
  const filtered = this.categories().filter(item =>
    item.categoryTitle.toLowerCase().includes(text)
  );
  this.filteredCategories.set(filtered);
  console.log('Filtered Categories:', filtered);
}

  getCategories() {
    this.api.getCategories().subscribe({
      next: (res: Category[]) => {
        this.categories.set(res);
        this.isLoading = false;
      },
      error: (err) => { 
        console.error('API Error:', err); 
        this.isLoading = false;
      }
    });
  }


  openCategoryForm() {
    const dialogRef = this.dialog.open(CategoryForm, {
      data: {},
      // width: '40%',       // responsive max width
    height: 'auto',       // optional
    minHeight: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.getCategories();
        this.isLoading = false;
      }
    });
  }

  statusChange(status: boolean, id: number) {
    const payload = {
      status: !status,
    };
    this.api.updateCategory(id, payload).subscribe({
      next: (res) => {
        this.getCategories();
      },
      error: (err) => console.error('API Error:', err)
    });

  }

  onEdit(category?: any) {
    const dialogRef = this.dialog.open(CategoryForm, {
      data: category,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.getCategories();
      }
    });
  }
  onDelete(id: number) {

    this.api.deleteCategory(id).subscribe({
      next: (res) => {
        this.getCategories();
      },
      error: (err) => console.error('API Error:', err)
    });
  }

}
