import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataServiceService } from '../Service/data-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css'],
})
export class MypageComponent implements OnInit {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  modalRef!: BsModalRef;
  data: any;
  constructor(
    private modalService: BsModalService,
    private dataService: DataServiceService,
    private router: Router
  ) {}
  public form = {
    name: null,
    email: null,
    password: null,
  };

  ngOnInit(): void {}

  openModal(event: Event) {
    event.preventDefault(); // Prevent the default link behavior
    this.modalRef = this.modalService.show(this.modalTemplate);
  }

  register() {
    console.log('dvd');
    this.dataService.myProfile(this.form).subscribe(
      (res) => {
        this.data = res;
        this.resetForm();
        this.modalService.hide();
        Swal.fire('Success', 'Registration successful!', 'success');
      },
      (error) => {
        Swal.fire('Error', 'Error occurred during registration.', 'error');
      }
    );
  }

  resetForm(): void {
    this.form = {
      name: null,
      email: null,
      password: null,
    };
  }
}
