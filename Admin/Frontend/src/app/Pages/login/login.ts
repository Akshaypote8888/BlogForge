import { Component, inject } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  logobj: any = {
    email: '',
    password: ''
  }

   username: string = 'akshay';

  router = inject(Router)

   onLogin(){
    if(this.logobj.email == 'akshay08@gmail.com' && this.logobj.password == '112233'){
      this.router.navigate(['/dashboard'])
    }
   }
}
