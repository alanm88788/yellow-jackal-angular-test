import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { LoggedUserComponent } from './components/logged-user/logged-user.component';
import { FilterComponent } from './components/filter/filter.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SearchComponent } from './components/search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';



@NgModule({
  declarations: [
    SidebarComponent,
    PageTitleComponent,
    LoggedUserComponent,
    FilterComponent,
    DatePickerComponent,
    SearchComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
  ],
  exports: [
    SidebarComponent,
    PageTitleComponent,
    LoggedUserComponent,
    FilterComponent,
    DatePickerComponent,
    SearchComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
