import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { EmailService } from '../services/email-service';
import { HighlightDirective } from './../directives/highlight.directive';
import { Location } from '@angular/common';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-email-form',
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './email-form.html',
  styleUrl: './email-form.css',
})
export class EmailForm implements OnInit {
  @ViewChild('emailForm') emailForm: any;

  constructor(
    private emailService: EmailService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  emails: Email[] = [];

  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };

  value!: string | null;
  param1!: string | null;
  param2!: string | null;

  sendEmail1(): void {
    this.emailService.sendEmail();
  }

  redirectToEmailList(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        p1: this.email.id,
        p2: this.email.sender,
        p3: this.email.reciver,
        p4: this.email.subject,
        p5: this.email.body,
      },
    };
    this.router.navigate([`/email-list/${this.email}`, {}], navigationExtras);
    window.alert(
      "The email '" + this.email.subject + "' has been sent to '" + this.email.reciver + "'."
    );
    this.clear1();
  }

  update(): void {
    this.router.navigate([`/email-list/`, {}]);
  }

  ngOnInit(): void {
    this.value = this.route.snapshot.paramMap.get('paramvalue');

    this.route.queryParamMap.subscribe((queryParams) => {
      this.param1 = queryParams.get('p1');
      this.param2 = queryParams.get('p2');
    });
  }

  clear1(): void {
    this.emailForm.reset();
  }

  goBack(): void {
    this.location.back();
  }
}
