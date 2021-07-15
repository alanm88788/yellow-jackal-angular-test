import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../models/ticket';
import { ticketsMockData } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>([]);

  constructor() { }

  fetchTickets(): void {
    this.tickets$.next(ticketsMockData);
  }
}
