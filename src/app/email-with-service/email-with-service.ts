// Controller

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './../directives/highlight.directive';
import { EmailService } from '../services/email-service';

@Component({
  selector: 'email-with-service',
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './email-with-service.html',
  styleUrls: ['./email-with-service.css'],
})
export class EmailWithService implements OnInit {
  @ViewChild('emailForm') emailForm: any;

  emails: Email[] = [];

  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };
  
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emails = this.emailService.createDb();
  }

  sendEmail(): void {
    this.emailService.sendEmail();
  }

  getEmail(id: number): Email | null {
    return this.emailService.getEmail(id);
  }

  getEmailList(): Email[] {
    return this.emailService.getEmailList();
  }

  clear(): void {
    this.emailService.deleteAllEmail();
  }
}
