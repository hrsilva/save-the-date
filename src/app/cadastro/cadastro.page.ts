import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class Cadastro {
  constructor(private data: DataService) {}

  cadastroForm = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    sobrenome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    senha: new FormControl('',[Validators.required]),
    dataNascimento: new FormControl('',[Validators.required]),
    cpf: new FormControl(''),
    aceitoTermos: new FormControl('', [Validators.required])
  });

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
