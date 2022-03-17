import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {UserService} from "../service/user-service";
import {Observable} from "rxjs";
import {RoleType} from "../model/role-type";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User = new User();
  tmp: Observable<any>|undefined;
  submitted = false;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }


  onLogin() {
    this.submitted=true;
    //this.tmp=this.userService.validate(this.user.email);
    if(this.user.userRole=="ADMIN")
    {
      this.user.userRole=RoleType.Admin;
    }
    else if(this.user.userRole=="MANAGER")
    {
      this.user.userRole=RoleType.Manager;
    }
    else if(this.user.userRole=="USER")
    {
      this.user.userRole=RoleType.User;
    }

    this.userService.validate(this.user.email)
      .subscribe(
        data => {
          console.log(data);
          this.tmp=data;
          this.landingPage();
        },
        error => console.log(error));
  }

  landingPage(){
    this.router.navigate(['land']);
  }
}
