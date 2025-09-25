import { Component } from '@angular/core';
import { EmailService } from '../services/email-service';

@Component({
  selector: 'email-with-service',
  imports: [],
  templateUrl: './email-with-service.html',
  styleUrl: './email-with-service.css',
})
export class EmailWithService {
  constructor(private emailService: EmailService) {}
}
