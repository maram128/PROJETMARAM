import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
@Input()
login!:LoginComponent;
constructor(private router: Router){}
goToLogin() {
  this.router.navigate(['/inscription'])
}
}
