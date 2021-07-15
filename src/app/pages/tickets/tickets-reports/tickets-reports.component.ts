import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/shared/models/ticket';
import { TicketsService } from 'src/app/shared/services/tickets.service';

@Component({
  selector: 'app-tickets-reports',
  templateUrl: './tickets-reports.component.html',
  styleUrls: ['./tickets-reports.component.scss'],
})
export class TicketsReportsComponent implements OnInit, OnDestroy {
  page = 1;
  pageSize = 12;
  tickets: Ticket[] = [];
  allTickets: Ticket[] = [];
  collectionSize = 0;
  ticketsSubscription: Subscription;

  constructor(private ticketService: TicketsService) {
    this.refreshTickets();
  }

  refreshTickets() {
    this.tickets = this.allTickets
      .map((ticket, i) => ({ id: i + 1, ...ticket }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  ngOnInit(): void {
    this.ticketService.fetchTickets();
    this.ticketsSubscription = this.ticketService.tickets$.subscribe(
      (res) => {
        this.collectionSize = res.length;
        this.allTickets = res;
        this.refreshTickets()
      },
      (err) => {
        console.log('error: ', err);
      }
    );
  }

  ngOnDestroy(): void {
    this.ticketsSubscription?.unsubscribe();
  }
}
