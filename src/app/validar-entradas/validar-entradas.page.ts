import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-validar-entradas',
  templateUrl: './validar-entradas.page.html',
  styleUrls: ['./validar-entradas.page.scss'],
})
export class ValidarEntradasPage implements OnInit {

  public evento = null
  public id_evento = null

  public form = new FormGroup({
    id_entrada: new FormControl(null)
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.id_evento = this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getEventoDetail(this.id_evento).subscribe(res => {
      this.evento = res
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  async submit() {
    var id_entrada = this.form.value.id_entrada

    // Fazer get entrada + evento

    const alert = await this.alertController.create({
      header: 'Validada!',
      message: 'Sua entrada foi validada com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
    
  }

}
