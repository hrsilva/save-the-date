import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { DataServiceUsuario, Usuario } from '../services/data-usuario.service';

@Component({
  selector: 'app-participantes-evento',
  templateUrl: './participantes-evento.page.html',
  styleUrls: ['./participantes-evento.page.scss'],
})
export class ParticipantesEventoPage implements OnInit {
  @Input() usuario: Usuario;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
