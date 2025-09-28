// Controller

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './../directives/highlight.directive';

@Component({
  selector: 'email-holder',
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './email-holder.html',
  styleUrls: ['./email-holder.css'],
})
export class EmailHolder implements OnInit {
  @ViewChild('emailForm') emailForm: any;

  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };

  // List of emails to show in table
  emails: Email[] = [];

  constructor() {}

  ngOnInit(): void {}

  sendForm(): void {
    //ID increases incrementally
    const latestEmail: Email = { ...this.email, id: this.emails.length + 1 };

    this.emails.push(latestEmail);

    window.alert(
      "The email '" + latestEmail.subject + "' has been sent to '" + latestEmail.reciver + "'."
    );


    this.clear();
  }

  clear(): void {
    this.emailForm.resetForm();
  }
}