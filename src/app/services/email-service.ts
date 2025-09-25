import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };

  emails: Email[] = [];
  
  ngOnInit() {
    this.emails = this.createDb();
  }

  constructor() {}

  createDb() {
    const emails = [
      {
        id: 1,
        sender: 'alice@example.com',
        reciver: 'bob@example.com',
        subject: 'Meeting Reminder',
        body: "Don't forget about our meeting tomorrow at 10am.",
      },
      {
        id: 2,
        sender: 'carol@example.com',
        reciver: 'dave@example.com',
        subject: 'Project Update',
        body: 'The project is on track for completion next week.',
      },
      {
        id: 3,
        sender: 'eve@example.com',
        reciver: 'frank@example.com',
        subject: 'Invoice Attached',
        body: 'Please find the invoice attached for your reference.',
      },
      {
        id: 4,
        sender: 'grace@example.com',
        reciver: 'heidi@example.com',
        subject: 'Lunch Invitation',
        body: 'Would you like to join me for lunch tomorrow?',
      },
      {
        id: 5,
        sender: 'ivan@example.com',
        reciver: 'judy@example.com',
        subject: 'Password Reset',
        body: 'Click the link below to reset your password.',
      },
      {
        id: 6,
        sender: 'mallory@example.com',
        reciver: 'oscar@example.com',
        subject: 'Conference Details',
        body: 'Here are the details for the upcoming conference.',
      },
      {
        id: 7,
        sender: 'peggy@example.com',
        reciver: 'trent@example.com',
        subject: 'Happy Birthday!',
        body: 'Wishing you a wonderful birthday and a great year ahead!',
      },
    ];
    return emails;
  }

  sendEmail(): void {
    const latestEmail: Email = { ...this.email, id: this.emails.length + 1 };
    this.emails.push(latestEmail);
  }

  deleteEmail(id: number): void {
    this.emails.splice(id, 1); //TODO: might not work unsure of indexing
  }

  deleteAllEmail(): void {
    this.emails = [];
  }

  getEmailList(): Email[] {
    return this.emails;
  }

  getEmail(id: number): Email | null {
    return this.emails[id];
  }
}
