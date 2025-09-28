import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './../directives/highlight.directive';
import { EmailService } from '../services/email-service';
import { EmailPipePipe } from '../pipes/email-pipe-pipe';
import { Observable } from 'rxjs';
import { FilterWithTextPipe } from '../pipes/filter-with-text-pipe';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-list',
  imports: [FormsModule, FilterWithTextPipe, EmailPipePipe, EmailPipePipe, CommonModule],
  templateUrl: './email-list.html',
  styleUrl: './email-list.css',
})
export class EmailList implements OnInit {
  @ViewChild('emailForm') emailFrom: any;

  filterByBody: boolean = false;
  selectedEmail: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };
  emails: Email[] = [];

  filterText: string = '';

  value!: string | null;
  value1!: string | null;

  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.emails = this.emailService.createDb();
    this.route.paramMap.subscribe((params) => {
      this.value = params.get('paramvalue');
    });

    this.value1 = this.route.snapshot.paramMap.get('value');

    this.route.queryParamMap.subscribe((params1) => {
      this.email.id = this.emails.length + 1;
      this.email.sender = params1.get('p2') as string;
      this.email.reciver = params1.get('p3') as string;
      this.email.subject = params1.get('p4') as string;
      this.email.body = params1.get('p5') as string;
      this.emails.push(this.email);
    });
  }

  showEmailInfo(email: Email): void {
    this.selectedEmail = email;
  }

  redirect(email: Email): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        p1: email.id,
        p2: email.sender,
        p3: email.reciver,
        p4: email.subject,
        p5: email.body,
      },
    };
    this.router.navigate([`/email-viewer/${this.email}`], navigationExtras);
  }

  redirect1(): void {
    let navigationExtras: NavigationExtras = {};
    this.router.navigate(['email-form'], navigationExtras);
  }

  deleteEmail(id: number): void {
    this.emails.splice(id - 1, 1);
  }

  update(): void {
    this.router.navigate([`/email-list/`, {}]);
  }

  goBack(): void {
    this.location.back();
  }
}
