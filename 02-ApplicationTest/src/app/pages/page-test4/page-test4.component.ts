import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-test4',
  templateUrl: './page-test4.component.html'
})
export class PageTest4Component {
  public form: FormGroup = new FormGroup({});
  public isSubmitted: boolean = false;
  public n: number = 0;
  public matriz = new Array(this.n);

  public rotaciones = [1, 5, 6 -4, 10];

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      n: ['', Validators.required],
      x: ['', Validators.required],
      y: ['', Validators.required]
    });
  }

  getMatrizRotada() {
    const { n, x, y } = this.form.value;

    for (let i = 0; i < n; i++) {
      this.matriz[i] = new Array(n);

      for (let j = 0; j < n; j++) {
        this.matriz[i][j] = i * n + j + 1;
      }
    }

    for (let i = 0; i < this.rotaciones.length; i++) {
      const rotacion = this.rotaciones[i];

      if (rotacion > 0) {
        this.girarDerecha(this.matriz, rotacion);
      }
      
      if (rotacion < 0) {
        this.girarIzquierda(this.matriz, rotacion);
      }
    }

    return this.matriz[x][y];
  }

  girarDerecha(matriz: any[][], rotaciones: number) {
    for (let i = 0; i < rotaciones; i++) {
      const auxiliar = matriz[0][this.n - 1];

      for (let j = this.n - 1; j > 0; j--) {
        matriz[0][j] = matriz[0][j - 1];
      }

      matriz[0][0] = auxiliar;

      for (let i = 1; i < this.n; i++) {
        const auxiliar = matriz[i][this.n - 1];

        for (let j = this.n - 1; j > 0; j--) {
          matriz[i][j] = matriz[i][j - 1];
        }

        matriz[i][0] = auxiliar;
      }
    }
  }

  girarIzquierda(matriz: any[][], rotaciones: number) {
    for (let i = 0; i < rotaciones; i++) {
      const auxiliar = matriz[this.n - 1][0];

      for (let j = 0; j < this.n - 1; j++) {
        matriz[this.n - 1][j] = matriz[this.n - 1][j + 1];
      }

      matriz[this.n - 1][this.n - 1] = auxiliar;

      for (let i = this.n - 2; i >= 0; i--) {
        const auxiliar = matriz[i][0];

        for (let j = 0; j < this.n - 1; j++) {
          matriz[i][j] = matriz[i][j + 1];
        }

        matriz[i][this.n - 1] = auxiliar;
      }
    }
  }

  mostrarMatriz() {
    const matriz = this.getMatrizRotada();

    alert(matriz);

    console.log(matriz);
    
  }

}