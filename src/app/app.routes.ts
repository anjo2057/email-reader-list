import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailWithService } from './email-with-service/email-with-service';
import { EmailHolder } from './email-holder/email-holder.component';

export const routes: Routes = [
  {
    path: 'email-holder',
    component: EmailHolder,
  },
  {
    path: 'email-with-service',
    component: EmailWithService,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
