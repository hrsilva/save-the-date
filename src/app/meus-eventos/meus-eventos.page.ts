import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-meus-eventos',
  templateUrl: './meus-eventos.page.html',
  styleUrls: ['./meus-eventos.page.scss'],
})
export class MeusEventosPage implements OnInit {

  public eventosList: Array<any> = [];
  public usuarioId = localStorage.getItem('usuario')

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.getMeusEventos()
  }

  getMeusEventos() {
    this.firestoreService.getEventosUsuario(this.usuarioId).subscribe(res => {
      this.eventosList = res
    })
  }

}
