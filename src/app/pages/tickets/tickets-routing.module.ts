import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsDetailsComponent } from './tickets-details/tickets-details.component';
import { TicketsNewComponent } from './tickets-new/tickets-new.component';
import { TicketsReportsComponent } from './tickets-reports/tickets-reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'reports' },
  { path: 'reports', component: TicketsReportsComponent },
  { path: 'details', component: TicketsDetailsComponent },
  { path: 'new', component: TicketsNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
