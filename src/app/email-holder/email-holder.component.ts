import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-holder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email-holder.html',
  styleUrl: './email-holder.css',
})
export class EmailHolder implements OnInit {

  @ViewChild('emailForm') emailForm: any;

  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: null
  };

  constructor() {}

  ngOnInit(): void {}

  sendForm(): void {

  }

  clear() : void {
    this.emailForm.resetForm();
}
}


