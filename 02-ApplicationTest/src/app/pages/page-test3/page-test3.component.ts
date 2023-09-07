import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-test3',
  templateUrl: './page-test3.component.html'
})
export class PageTest3Component implements OnInit{
  public form: FormGroup = new FormGroup({});
  public isSubmitted: boolean = false;
  public leapYears:Array<string> = [];

  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

  getLeapYears() {
    const { start, end } = this.form.value;

    const startDate = new Date(start);
    const endDate = new Date(end);

    while (startDate <= endDate) {
      const year = startDate.getFullYear();

      if (this.isLeapYear(year)) {
        this.leapYears.push(year.toString());
      }

      startDate.setFullYear(startDate.getFullYear() + 1);
    }

    return this.leapYears;
  }

  isLeapYear(year: number):boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
}
