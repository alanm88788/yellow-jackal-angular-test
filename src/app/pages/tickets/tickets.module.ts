import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsDetailsComponent } from './tickets-details/tickets-details.component';
import { TicketsReportsComponent } from './tickets-reports/tickets-reports.component';
import { TicketsNewComponent } from './tickets-new/tickets-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicketsDetailsComponent,
    TicketsReportsComponent,
    TicketsNewComponent,
  ],
  imports: [CommonModule, TicketsRoutingModule, SharedModule, NgbModule, FormsModule],
})
export class TicketsModule {}
