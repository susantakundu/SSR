import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video.service';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    "email": '',
    "password": ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  loginUser(){
    //console.log(this.loginUserData)
    this.auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
            localStorage.setItem('token', res.token)
            this.router.navigateByUrl('videos');
            //console.log(res)
            //let tokenData = this.jwt.decodeToken(res.token)
            //console.log(tokenData)
          },
          err => console.log(err)
        )
  }
}
