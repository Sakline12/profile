import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../Service/data-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { TokenService } from '../Service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: any;
  public form = {
    email: null,
    password: null,
  };

  public error = null;

  constructor(
    private dataService: DataServiceService,
    private Token: TokenService,
    private router: Router
  ) // private modalService: BsModalService
  {}

  onSubmit() {
    this.dataService.login(this.form).subscribe(
      (data: any) => {
        this.handleResponse(data);
        console.log(this.data); // Move the console.log() inside the success callback
      },
      (error: any) => this.handleError(error)
    );
  }

  // forgetPassword() {
  //   this.Jarwis.forgotPassword(this.form).subscribe(
  //     (data) => {
  //       this.forgotResponse(data);
  //       this.closeModal();
  //     },
  //     (error) => {
  //       this.handleError(error);
  //       this.closeModal();
  //     }
  //   );
  // }

  handleError(error: any) {
    this.error = error.error;
            Swal.fire(
              'Error',
              'Email or Password doesn not match',
              'error'
            );
  }

  handleResponse(data: any) {
    console.log(data);
    this.Token.handle(data?.data?.token);
    this.router.navigateByUrl('/Allmessage');
  }

  ngOnInit(): void {}
}
