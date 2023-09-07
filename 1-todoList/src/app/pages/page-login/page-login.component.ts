import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html'
})
export class PageLoginComponent implements OnInit {
  constructor(
    public fb:FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public loginForm: FormGroup = new FormGroup({});

  public isSubmitted:boolean = false;
  public isValid: boolean = false;
  public messageError:string = '';

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required,
        ]),
        role: new FormControl('', [Validators.requiredTrue])
      }
    );
  }

  onLogin():void{
    const dataForm    = this.loginForm.value;
    this.isSubmitted  = true;
    this.messageError = '';

    if (dataForm.email === '')
      this.messageError += '- Debe agregar su "Nombre de usuario".<br>' ;

    if (dataForm.password === '')
      this.messageError += '- Debe agregar su "Contraseña".<br>';

    if (dataForm.role === '')
      this.messageError += '- Debe selecionar una opción de "Rol"<br>';

    if (this.messageError.length > 0) return;
    
    console.log('- login Data', dataForm);

    if (dataForm.invalid) {
      dataForm.markAllAsTouched();
      return;
    }
      
    this.authService.login(dataForm)
      .subscribe((response: any) => {
        console.log('- login AutService: ', response);

        if (this.authService.isLoggedIn !== null) {
          this.router.navigate(['/', 'home'])
        } else {
          this.messageError += '- Usuario y contraseña no validos.<br>';
        }
      })
  }
}
