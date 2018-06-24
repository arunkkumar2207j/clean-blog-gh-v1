import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageTitle: string;
  subTitle: string;
  btnText: string;

  name: string;
  email: string;
  phoneNumber: number;
  message: string;

  constructor() { }

  ngOnInit() {
    this.pageTitle = `Contact me`;
    this.subTitle = `Have questions? I have answers (maybe).`;
    this.btnText = 'Send';

    this.name = 'Arun Kumar';
    this.email = '';
    this.phoneNumber = 0;
    this.message = '';
  }
  clickEvent() {
    alert('AA');
  }

}
