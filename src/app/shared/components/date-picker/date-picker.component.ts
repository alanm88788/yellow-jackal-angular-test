import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DaterangepickerComponent,
  DaterangepickerDirective,
} from 'ngx-daterangepicker-material';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @ViewChild(DaterangepickerDirective, { static: false })
  pickerDirective: DaterangepickerDirective;
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  constructor() {
    this.selected = {
      startDate: dayjs('2015-11-18T00:00Z'),
      endDate: dayjs('2015-11-26T00:00Z'),
    };
  }

  ngOnInit() {
    this.picker = this.pickerDirective?.picker;
  }

  openDatepicker(): void {
    this.pickerDirective.open();
  }
  ngModelChange(e: any) {
  }
  change(e: any) {
  }
  choosedDate(e: any) {
    this.inlineDate = e;
  }

  choosedDateTime(e: any) {
    this.inlineDateTime = e;
  }
  open(e: any) {
    this.pickerDirective.open(e);
  }
  clear(e: any) {}
}
