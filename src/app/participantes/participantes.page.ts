import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataServiceUsuario, Usuario } from '../services/data-usuario.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.page.html',
  styleUrls: ['./participantes.page.scss'],
})
export class ParticipantesPage implements OnInit {

  constructor(
    private data: DataServiceUsuario
  ) { }

  ngOnInit() {
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getUsuarios(): Usuario[] {
    return this.data.getUsuarios();
  }
}
