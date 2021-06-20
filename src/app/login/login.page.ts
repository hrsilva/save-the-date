import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class Login {
  constructor(
    private router: Router,
    private data: DataService,
    private alertController: AlertController,
    private firestoreService: FirestoreService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    senha: new FormControl('',[Validators.required])
  });

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  login() {
    this.firestoreService.loginUsuario(this.loginForm.value.email, this.loginForm.value.senha).subscribe(res => {
      if (res.length > 0) {
        localStorage.setItem('usuario', res[0]['id'])
        this.router.navigateByUrl('eventos')
      } else {
        this.alertaLoginFail()
      }
    })
  }

  async alertaLoginFail() {
    const alert = await this.alertController.create({
      header: 'Ooops!',
      message: 'E-mail ou senha incorretos, tente novamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
