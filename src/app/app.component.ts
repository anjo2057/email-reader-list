import { Component, signal } from '@angular/core';
import { EmailHolder } from './email-holder/email-holder.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [FormsModule, EmailHolder],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web assignment 1 - Programming of User Intefaces - 25/26 ';
}
