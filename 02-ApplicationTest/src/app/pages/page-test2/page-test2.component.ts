import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-test2',
  templateUrl: './page-test2.component.html'
})
export class PageTest2Component {
  public form:FormGroup = new FormGroup({});
  public sundaysAtEndOfMonth: number = 0;
  public isSubmitted:boolean = false;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

  getSundaysAtEndOfMonth() {
    const { start, end } = this.form.value;
    this.isSubmitted = true;

    const startDate = new Date(start);
    const endDate   = new Date(end);

    while (startDate <= endDate) {
      const dayOfWeek = startDate.getDay();
      const month = startDate.getMonth();

      if (dayOfWeek === 0 && month === endDate.getMonth()) {
        this.sundaysAtEndOfMonth++;
      }

      startDate.setDate(startDate.getDate() + 1);
    }

    this.sundaysAtEndOfMonth;
    
    this.form.reset();
  }

}
