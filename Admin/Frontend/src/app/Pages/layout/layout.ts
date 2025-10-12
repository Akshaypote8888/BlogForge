import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgClass, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  isCollapsed = true;
  isRotated = true;

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
