// Controller

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './../directives/highlight.directive';

@Component({
  selector: 'app-email-holder',
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
    body: null,
  };

  // List of emails to show in table
  emails: Email[] = [];

  constructor() {}

  ngOnInit(): void {}

  sendForm(): void {
    //ID increases incrementally
    const latestEmail: Email = { ...this.email, id: this.emails.length + 1 }; //TODO: const right? seemed most reasonable

    this.emails.push(latestEmail);

    window.alert(
      "The email '" + latestEmail.subject + "' has been sent to '" + latestEmail.reciver + "'."
    );

    //console.log(this.emails[0].sender);

    this.clear();
  }

  clear(): void {
    this.emailForm.resetForm();
  }
}
