import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class Login {
  constructor(private data: DataService) {}

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

}
