import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-eventos',
  templateUrl: './cadastro-eventos.page.html',
  styleUrls: ['./cadastro-eventos.page.scss'],
})
export class CadastroEventosPage implements OnInit {

  constructor() { }

  cadastroForm = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    data_inicio: new FormControl('',[Validators.required]),
    data_fim: new FormControl('',[Validators.required]),
    hora_inicio: new FormControl('',[Validators.required]),
    hora_fim: new FormControl('',[Validators.required]),
    quantidade_pessoas: new FormControl('',[Validators.required]),
    valor_entrada: new FormControl('',[Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

}
