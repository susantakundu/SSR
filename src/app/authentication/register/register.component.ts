import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerUserData = {
    "name": '',
    "email": '',
    "password": ''
  }


  constructor( private auth: AuthService, private router: Router) { }
  

  ngOnInit() {
  }
  registerUser() {
    console.log(this.registerUserData);
    this.auth.registerUser(this.registerUserData)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token', res.token)
            this.router.navigateByUrl('login');
          },
          err=> console.log(err)
        )
         
      
  }

}
