import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl: FormControl = new FormControl('', [Validators.required]);
  senhaFormControl: FormControl = new FormControl('', [Validators.required]);

  formulario: FormGroup = new FormGroup({
    email: this.emailFormControl,
    senha: this.senhaFormControl
  });

  iconFaEye: IconDefinition = faEye;
  iconFaEyeSlash: IconDefinition = faEyeSlash;
  tipoInputSenha: 'password' | 'text' = 'password';

  constructor() { }

  ngOnInit() {
  }

  mostrarSenha(): void {
    if (this.tipoInputSenha === 'password') {
      this.tipoInputSenha = 'text';
    } else {
      this.tipoInputSenha = 'password';
    }
  }

}
