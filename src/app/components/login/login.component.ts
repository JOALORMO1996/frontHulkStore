import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService, private router: Router, private appComponent: AppComponent) {
    this.appComponent.isLoggedIn = false;
  }
 
ngOnInit(): void {}


onSubmit(): void {
  const email = this.loginForm.get('email')?.value;
  const password = this.loginForm.get('password')?.value;
  const usuario: Usuario = { id: 0, nombre: '',  email: email ? email : '',  password: password ? password : '', token: '' };

  if (this.authService.login(usuario)) {
    this.router.navigate(['/inicio']);
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
}

}
