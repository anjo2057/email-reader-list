import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './../directives/highlight.directive';

@Component({
  selector: 'app-email-holder',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './email-holder.html',
  styleUrls: ['./email-holder.css']
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


