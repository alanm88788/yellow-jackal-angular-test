import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSummaryComponent } from './pages/dashboard-summary/dashboard-summary.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardSummaryComponent, canActivate: [AuthGuard] },
  {
    path: 'tickets',
    canActivate: [],
    loadChildren: () =>
      import('./pages/tickets/tickets.module').then((m) => m.TicketsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
