import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email-service';

@Pipe({
  name: 'emailPipe',
})
export class EmailPipePipe implements PipeTransform {
  constructor(private emailService: EmailService) {}

  transform(value: unknown, ...args: unknown[]): Email | null {
    let emailswithbody: Email[] = [];

    for (let i = 0; i < this.emailService.getEmailList().length; i++) {
      const emailList: Email[] = this.emailService.getEmailList();
      const element: Email = emailList[i];
      if (element.body !== '') {
        emailswithbody.push(element);
      }
    }
    return emailswithbody.length > 0 ? emailswithbody[0] : null;
  }
}
