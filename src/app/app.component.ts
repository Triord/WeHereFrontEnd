import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './Service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'McDonApp';
l: boolean = false;
username: string;
role: string;
active='top';
collapsed= true;
  constructor(private auth: AuthenticationService, private logou: LoginComponent , private router: Router){}



  ngOnInit() {
   console.log("le log"+this.authenticated);
   this.username =  this.auth.getAuthenticatedUser();
   this.role = this.auth.getRole();
   console.log(this.username, 'le role est', this.role)
  }
  logout(){
    this.auth.logout();
    this.l = false;
    this.router.navigate(['/login']);
  }
 public get authenticated(): boolean {

      return this.auth.isUserLoggedIn();


  }

}

