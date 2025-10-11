import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgClass],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  isCollapsed = false;
  isRotated = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.isRotated = !this.isRotated;
  }

router = inject(Router);

  onLogout() {
    debugger;
    // event.preventDefault();
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
