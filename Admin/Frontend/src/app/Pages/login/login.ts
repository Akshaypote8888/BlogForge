import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, ReactiveFormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  logInData: any;
  loginError = false;

  logInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })


  router = inject(Router)

   onLogin(){
    this.logInData = this.logInForm.value;
    
    if(this.logInData.email == 'akshay08@gmail.com' && this.logInData.password == '112233'){
      
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('isAuthenticated', 'true');
    } else{
      this.loginError = true;
    }
   }
}
