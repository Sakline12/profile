import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Service/data-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.css'],
})
export class UsermessageComponent implements OnInit {
  MessageList: any;
  data: any;
  form: any;
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.dataService.list_of_message().subscribe((data: any) => {
      this.MessageList = data.data;
      console.log(data);
    });
  }
  delete_a_message(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Delete',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.delete_a_message(id).subscribe((res) => {
          this.data = res;
          this.getTask();
          Swal.fire('Deleted!', 'Comment Deleted', 'success');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Canceled', 'Not deleted', 'error');
      }
    });
  }

  logout() {
    Swal.fire({
      title: 'are you sure',
      text: 'Logout',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'no',
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.logout(this.form).subscribe((res) => {
          this.data = res;
          localStorage.clear();
          // localStorage.removeItem('type');
          this.router.navigate(['/login']);

          Swal.fire('Logout!', 'user logout', 'success');
        });
      }
    });
  }
}
