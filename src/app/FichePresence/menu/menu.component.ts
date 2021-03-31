import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  role: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(){
    this.role = this.auth.getRole();
  }

}
