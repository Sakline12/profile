import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css'],
})
export class PersonalProfileComponent implements OnInit {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  @ViewChild('modalTemplate2') modalTemplate2!: TemplateRef<any>;
  modalRef!: BsModalRef;
  modalRef2!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(event: Event) {
    event.preventDefault(); // Prevent the default link behavior
    this.modalRef = this.modalService.show(this.modalTemplate);
  }

  openModal2(event: Event) {
    event.preventDefault();
    this.modalRef2 = this.modalService.show(this.modalTemplate2);
  }
}
