import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Message } from '../services/data.service';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message;
  public participacao = null;

  constructor(
    private router: Router,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getEventoDetail(id).subscribe(res => {
      this.message = res
      this.verificaParticipante()
    })

  }

  verificaParticipante() {
    var id_evento = this.message.id
    var id_usuario = localStorage.getItem('usuario')

    this.firestoreService.verificaParticipacao(id_usuario, id_evento).subscribe(res => {
      if (res.length > 0) {
        this.participacao = res[0]
      }
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  async cancelar() {
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: `Você deseja cancelar a sua inscrição no evento <strong>${this.message.nome}</strong>?`,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (no) => {
            
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.acaoCancelar()
          }
        }
      ]
    });

    await alert.present();
  }

  async acaoCancelar() {
    await this.firestoreService.cancelar(this.participacao.id)
    this.router.navigateByUrl('eventos')
  }

  async submit() {
    var id_evento = this.message.id
    var id_usuario = localStorage.getItem('usuario')
    
    await this.firestoreService.createParticipacao(id_usuario, id_evento)

    const alert = await this.alertController.create({
      header: 'Feito!',
      message: 'Sua participação foi garantida!',
      buttons: ['OK']
    });

    await alert.present();
    
  }
}
