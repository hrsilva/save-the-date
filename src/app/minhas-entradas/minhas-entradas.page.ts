import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-minhas-entradas',
  templateUrl: './minhas-entradas.page.html',
  styleUrls: ['./minhas-entradas.page.scss'],
})
export class MinhasEntradasPage implements OnInit {

  public entradasList: Array<any> = [];
  public usuarioId = localStorage.getItem('usuario')

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getEntradasUsuario(this.usuarioId).subscribe(res => {
      this.entradasList = res
    })
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

}
