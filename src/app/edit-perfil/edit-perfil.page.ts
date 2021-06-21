import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'edit-perfil.page.html',
  styleUrls: ['edit-perfil.page.scss'],
})
export class EditPerfil {
  constructor(private data: DataService) {}

  editPerfilForm = new FormGroup({
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
  
  alteraSenha() {
    this.showSenha = !this.showSenha;
  }

}
