import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../models/usuario.interface';
import { DataService, Message } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'edit-perfil.page.html',
  styleUrls: ['edit-perfil.page.scss'],
})
export class EditPerfil implements OnInit {
  constructor(
    private router: Router,
    private data: DataService,
    private firestoreService: FirestoreService
  ) {}

  public editPerfilForm = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    sobrenome: new FormControl('',[Validators.required]),
    dataNascimento: new FormControl('',[Validators.required]),
    cpf: new FormControl(''),
    alterarSenha: new FormControl(''),
    senhaAtual: new FormControl(''),
    novaSenha: new FormControl('')
  });

  public usuario = null
  public showSenha = true
  public usuarioId = localStorage.getItem('usuario')

  ngOnInit() {
    this.firestoreService.getUsuarioDetail(this.usuarioId).subscribe(res => {
      if (res) {
        this.usuario = res
        this.preencheCamposForm()
      }
    })
  }

  preencheCamposForm() {
    this.editPerfilForm.get('nome').setValue(this.usuario.nome)
    this.editPerfilForm.get('sobrenome').setValue(this.usuario.sobrenome)
    this.editPerfilForm.get('cpf').setValue(this.usuario.cpf)
    this.editPerfilForm.get('dataNascimento').setValue(this.usuario.data_nascimento)
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  
  alteraSenha() {
    this.showSenha = !this.showSenha;
  }

  submit() {
    this.firestoreService.updateUsuario(this.usuarioId, this.editPerfilForm.value.nome, this.editPerfilForm.value.sobrenome, this.editPerfilForm.value.dataNascimento, this.editPerfilForm.value.cpf).then(
      res => {
        this.router.navigateByUrl('tabs/eventos')
      }
    ).catch(err => { console.log("err: ", err) })
  }
}
