import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../interfaces/email';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-viewer',
  imports: [],
  templateUrl: './email-viewer.html',
  styleUrl: './email-viewer.css',
})
export class EmailViewer {
  constructor(private route: ActivatedRoute,
    private location: Location,
  ) {}

  value!: string | null;
  email: Email = {
    id: 0,
    sender: '',
    reciver: '',
    subject: '',
    body: '',
  };

  ngOnInit() {
    this.value = this.route.snapshot.queryParamMap.get('paramvalue');
    this.route.queryParams.subscribe((params) => {
      this.email.id = params['p1'];
      this.email.sender = params['p2'];
      this.email.reciver = params['p3'];
      this.email.subject = params['p4'];
      this.email.body = params['p5'];
    });
  }
  goBack() : void{
    this.location.back();
  }

}
