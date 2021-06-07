import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'show-perfil.page.html',
  styleUrls: ['show-perfil.page.scss'],
})
export class ShowPerfil {
  constructor(private data: DataService) {}

  showPerfilForm = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    sobrenome: new FormControl('',[Validators.required]),
    dataNascimento: new FormControl('',[Validators.required]),
    cpf: new FormControl(''),
    alterarSenha: new FormControl(''),
    senhaAtual: new FormControl(''),
    novaSenha: new FormControl('')
  });

  public showSenha = true;

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  alteraSenha() {
    this.showSenha = !this.showSenha;
  }

}
