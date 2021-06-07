import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment'

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-cadastro-eventos',
  templateUrl: './cadastro-eventos.page.html',
  styleUrls: ['./cadastro-eventos.page.scss'],
})
export class CadastroEventosPage implements OnInit {

  public evento: Message = null

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

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
  })

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      this.evento = this.data.getMessageById(parseInt(id, 10))
      this.initializeEditForm()  
    }
  }

  initializeEditForm() {
    let inicio = this.evento.data_inicio.split('/')
    let data_inicio = `${inicio[2]}-${inicio[1]}-${inicio[0]}`

    let fim = this.evento.data_fim.split('/')
    let data_fim = `${fim[2]}-${fim[1]}-${fim[0]}`

    this.cadastroForm.get('nome').setValue(this.evento.nome)
    this.cadastroForm.get('data_inicio').setValue(data_inicio)
    this.cadastroForm.get('data_fim').setValue(data_fim)
    this.cadastroForm.get('hora_inicio').setValue(this.evento.hora_inicio)
    this.cadastroForm.get('hora_fim').setValue(this.evento.hora_fim)
    this.cadastroForm.get('quantidade_pessoas').setValue(this.evento.quantidade_pessoas)
    this.cadastroForm.get('valor_entrada').setValue(this.evento.valor_entrada)
    this.cadastroForm.get('endereco').setValue(this.evento.endereco)
    this.cadastroForm.get('cidade').setValue(this.evento.cidade)
    this.cadastroForm.get('estado').setValue(this.evento.estado)
    this.cadastroForm.get('descricao').setValue(this.evento.descricao)

    this.cadastroForm.get('data_inicio').disable()
    this.cadastroForm.get('data_fim').disable()
    this.cadastroForm.get('valor_entrada').disable()
    this.cadastroForm.get('nome').disable()
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  submit() {
    if (this.evento) {
      let submitForm = {
        nome: this.evento.nome,
        data_inicio: this.evento.data_inicio,
        data_fim: this.evento.data_fim,
        hora_inicio: this.evento.hora_inicio,
        hora_fim: this.evento.hora_fim,
        quantidade_pessoas: this.cadastroForm.value.quantidade_pessoas,
        valor_entrada: this.evento.valor_entrada,
        endereco: this.cadastroForm.value.endereco,
        cidade: this.cadastroForm.value.cidade,
        estado: this.cadastroForm.value.estado,
        descricao: this.cadastroForm.value.descricao
      }
    } else {

    }
  }
}
