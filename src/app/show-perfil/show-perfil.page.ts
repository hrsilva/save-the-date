import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService, Message } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'show-perfil.page.html',
  styleUrls: ['show-perfil.page.scss'],
})
export class ShowPerfil implements OnInit {
  constructor(
    private data: DataService,
    private firestoreService: FirestoreService
  ) {}

  public usuario = null
  public showSenha = true
  private usuarioId = localStorage.getItem('usuario')

  ngOnInit() {
    this.getUsuario()
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  getUsuario() {
    this.firestoreService.getUsuarioDetail(this.usuarioId).subscribe(res => {
      if (res) {
        this.usuario = res
      }
    })
  }

}
