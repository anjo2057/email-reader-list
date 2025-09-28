import { Component, signal, NgModule } from '@angular/core';
import { EmailHolder } from './email-holder/email-holder.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routes';
@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    NgbDropdownModule,
    RouterLink,
    RouterModule,
    NgbModule,
    // AppRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
