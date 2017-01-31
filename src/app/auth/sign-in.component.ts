import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignIn()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary" style="margin-top: 20px">Sign In</button>
        </form>
    `
})
export class SignInComponent {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

    onSignIn() {
      this.authService.signInUser(this.myForm.value);
      this.router.navigate(['list']);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
