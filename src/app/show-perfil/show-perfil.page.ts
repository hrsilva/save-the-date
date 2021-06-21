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

  public showSenha = true;

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
