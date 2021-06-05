import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  filtroForm = new FormGroup({
    descricao: new FormControl(''),
    data: new FormControl(''),
  });

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  submit() {}
}
