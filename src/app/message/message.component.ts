import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Service/data-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  data: any;
  name: any;

  form = {
    name: '',
    subject: '',
    message: '',
  };

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendMessage() {
    this.dataService.message(this.form).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
        Swal.fire('Success', 'Message sent successfully!', 'success');
        this.resetForm();
        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2000);
      },
      (error) => {
        console.error(error);
        Swal.fire(
          'Error',
          'Failed to send the message!Fill up this form',
          'error'
        );
        this.resetForm();
      }
    );
  }

  resetForm(): void {
    this.form = {
      name: '',
      subject: '',
      message: '',
    };
  }
}
