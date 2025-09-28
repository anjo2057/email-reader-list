import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailWithService } from './email-with-service/email-with-service';
import { EmailHolder } from './email-holder/email-holder.component';
import { EmailForm } from './email-form/email-form';
import { EmailViewer } from './email-viewer/email-viewer';
import { EmailList } from './email-list/email-list';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'email-holder',
    component: EmailHolder,
  },
  {
    path: 'email-with-service',
    component: EmailWithService,
  },

  {
    path: 'email-form',
    component: EmailForm,
  },
  {
    path: 'email-viewer/:paramvalue',
    component: EmailViewer,
  },
  {
    path: 'email-list/:value',
    component: EmailList,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
