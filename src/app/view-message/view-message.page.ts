import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  public usuarioCriador = false;
  public listParticipantes: Array<any> = [];
  public id_usuario = localStorage.getItem('usuario');

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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

      if (this.id_usuario == this.message.id_usuario_criador) {
        this.usuarioCriador = true
        this.getUsuariosParticipantes()
      }
    })
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  verificaParticipante() {
    var id_evento = this.message.id

    this.firestoreService.verificaParticipacao(this.id_usuario, id_evento).subscribe(res => {
      if (res.length > 0) {
        this.participacao = res[0]
      }
    })
  }

  getUsuariosParticipantes() {
    this.firestoreService.getEntradasEventos(this.message.id).subscribe(res => {
      this.listParticipantes = res
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

  redirectValidar() {
    this.router.navigateByUrl(`validar-entradas/${this.message.id}`)
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async submit() {
    var id_evento = this.message.id
    var evento = this.message.nome
    var id_usuario = localStorage.getItem('usuario')
    var usuario = localStorage.getItem('usuario_nome')
    
    await this.firestoreService.createParticipacao(id_usuario, usuario, id_evento, evento)

    const alert = await this.alertController.create({
      header: 'Feito!',
      message: 'Sua participação foi garantida! Verifique suas entradas.',
      buttons: ['OK']
    });

    await alert.present();
    
  }
}
