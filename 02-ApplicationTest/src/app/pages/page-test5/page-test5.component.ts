import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-test5',
  templateUrl: './page-test5.component.html'
})
export class PageTest5Component {

  public form: FormGroup = new FormGroup({});
  public isSubmitted: boolean = false;
  public resultado: Array<string> = []
  public conteoLetras:[any, any][] = [];

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      s: ['',Validators.required]
    });
  }

  getConteoLetras() {
    this.isSubmitted = true;
    const { s } = this.form.value;

    const letras = s.toLowerCase().split('');

    const conteo = new Map();

    for (const letra of letras) {
      if (!conteo.has(letra)) {
        conteo.set(letra, 0);
      }

      conteo.set(letra, conteo.get(letra) + 1);
    }

    this.conteoLetras = Array.from(conteo.entries()).sort((a, b) => b[1] - a[1]);

    return this.conteoLetras;
  }

}
