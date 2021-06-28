import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-view-entrada',
  templateUrl: './view-entrada.page.html',
  styleUrls: ['./view-entrada.page.scss'],
})
export class ViewEntradaPage implements OnInit {

  public entrada;
  public evento;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getEntradaDetail(id).subscribe(res => {
      this.entrada = res
      this.getEvento()
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  getEvento() {
    this.firestoreService.getEventoDetail(this.entrada.id_evento).subscribe(res => {
      this.evento = res
    })
  }
}
