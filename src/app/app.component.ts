import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailHolder } from './email-holder/email-holder.component';
import { FormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, EmailHolder],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
// })

// export class App {
//   protected readonly title = signal('email-reader-list');
// }


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, EmailHolder],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Examples - Programming of User Intefaces - 23/24 ';
}
