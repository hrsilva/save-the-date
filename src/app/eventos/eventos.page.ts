import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Evento } from '../models/evento.interface';
import { DataService, Message } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  // public eventosList: Observable<Evento[]>;
  public eventosList: Array<any> = [];

  constructor(
    private data: DataService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getEventoList().subscribe(res => {
      this.eventosList = res
    })
  }

  filtroForm = new FormGroup({
    nome: new FormControl(null),
    data: new FormControl(null),
  });

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getEventos() {
    this.firestoreService.getEventoList().subscribe(res => {
      this.eventosList = res
    })
  }

  limparFiltro() {
    this.filtroForm.get('data').reset()
    this.filtroForm.get('nome').reset()
  }

  submit() {
    if (this.filtroForm.value.data || this.filtroForm.value.nome) {
      var dataFiltro = null 
      if (this.filtroForm.value.data) {
        var data = this.filtroForm.value.data.split('T')
        dataFiltro = data[0]
      }

      this.firestoreService.getEventoFilter(dataFiltro, this.filtroForm.value.nome).subscribe(res => {
        this.eventosList = res
      })
    } else {
      this.getEventos()
    }
  }
}
