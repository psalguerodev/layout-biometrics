import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@psalguerodev/auth';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  numberOne: number;
  numberTwo:number;
  name: string;
  authResult: User;
  register: string;
  password: string;
  showBadCredential: boolean;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  loginWithLibrary() {
    this.authService.authenticate(this.register, this.password)
      .then(userResult => {
        this.authResult = userResult;
        this.showBadCredential = false;
        console.log(this.authResult);
      })
      .catch(error => {
        this.authResult = null;
        this.showBadCredential = true;
      });
  }

}
