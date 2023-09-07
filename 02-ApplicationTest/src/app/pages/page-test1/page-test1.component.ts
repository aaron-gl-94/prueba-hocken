import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Test1Service } from '../../services/test1.service';

@Component({
  selector: 'page-test1',
  templateUrl: './page-test1.component.html'
})
export class PageTest1Component implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(private readonly formBuilder: FormBuilder, private test1Service: Test1Service) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      latitude: [''],
      longitude: ['']
    });
  }

  public get weather() {
    return this.test1Service.weather;
  }

  public get error() {
    return this.test1Service.error;
  }

  onGetWeather(){
    const formData = this.form.value;
    this.test1Service.getWeather(formData.latitude, formData.longitude);
  }

}
