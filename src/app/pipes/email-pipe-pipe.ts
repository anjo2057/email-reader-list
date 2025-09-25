import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email-service';

@Pipe({
  name: 'emailPipe',
})
export class EmailPipePipe implements PipeTransform {
  constructor(private emailService: EmailService) {}

  transform(emails: Email[], filterByBody: boolean): Email[] {
    let emailswithbody: Email[] = [];

    for (let i = 0; i < emails.length; i++) {
      const element: Email = emails[i];
      if (element.body !== '' && filterByBody) {
        emailswithbody.push(element);
      }
    }
    return emailswithbody.length > 0 ? emailswithbody : emails;
  }
}
