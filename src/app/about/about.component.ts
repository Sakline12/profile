import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  skills = [
    { name: 'Python', percentage: 60 },
    { name: 'C++', percentage: 85 },
    { name: 'Laravel', percentage: 70 },
    { name: 'JavaScript', percentage: 65 },
    { name: 'Angular', percentage: 80 },
    { name: 'Bootstrap-5', percentage: 85 },
  ];
  ngOnInit(): void {}

  downloadFile(): void {
    const fileUrl = 'assets/CV.pdf'; // Replace with the path to your CV file in the assets folder
    const fileName = 'CV.pdf'; // Replace with the desired file name

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, fileName);
      });
  }
}
