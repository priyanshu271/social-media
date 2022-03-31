import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showRegister = false;
  public showLogin = true;

  constructor() {}

  ngOnInit(): void {}
  public getRegisterFlagValue(event: any) {
    if (event) {
      this.showRegister = true;
      this.showLogin = false;
    }
  }
}
