import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  title = 'reactive-form';
  // imp
  constructor(private formBuilder: FormBuilder) {}
  // when component is mount its called automatically
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(6)]],
      confirmPassword: ['', Validators.required],
      accptTandc: [false, Validators.requiredTrue],
    });
  }

  // on submit
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);
  }

  get h() {
    return this.registerForm.controls;
  }

  // reset the form
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
