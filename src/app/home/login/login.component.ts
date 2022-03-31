import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**Title */
  title = 'Login';

  @Output() registerFlag = new EventEmitter<boolean>();

  /** Creating form template variable */
  angForm: FormGroup;
  router: Router;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  /** Method to create the form */
  public createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
    });
  }

  public navToRegister(): void {
    this.registerFlag.emit(true);
    this.router.navigateByUrl('/register');
  }

  ngOnInit(): void {}
}
