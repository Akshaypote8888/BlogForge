import { Component, Inject, inject, model, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Category } from '../../interface/category';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CategoryForm } from "./category-form/category-form";

@Component({
  selector: 'app-categories',
  imports: [DatePipe],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories implements OnInit {


  category = signal<Category[]>([]);

  private api = inject(ApiService);
  dialogRef = inject(MatDialog);


  newUser: any;readonly animal = signal('');
  readonly name = model('');


  constructor(private dialog: MatDialog, ) {


  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.api.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.category.set(res);
      },
      error: (err) => console.error('API Error:', err)
    });
  }


  openCategoryForm() {
    const dialogRef = this.dialog.open(CategoryForm, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.getCategories();
      }
    });
  }
  

}
