import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.interface';
import { DataService, Message } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class Cadastro implements OnInit {
  constructor(
    private data: DataService,
    private firestoreService: FirestoreService
  ) {}

  public usuariosList: Observable<Usuario[]>;

  cadastroForm = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    sobrenome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    senha: new FormControl('',[Validators.required]),
    data_nascimento: new FormControl('',[Validators.required]),
    cpf: new FormControl(''),
    aceitoTermos: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.usuariosList = this.firestoreService.getUsuarioList();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  async onSubmit() {
    console.log(this.cadastroForm.value)
    let response = await this.firestoreService.createUsuario(this.cadastroForm.value.nome, this.cadastroForm.value.sobrenome, this.cadastroForm.value.email, this.cadastroForm.value.data_nascimento, this.cadastroForm.value.cpf)

    console.log(response)
  }

}
