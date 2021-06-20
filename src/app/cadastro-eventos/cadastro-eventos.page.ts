import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment'
import { Observable } from 'rxjs';

import { Evento } from '../models/evento.interface';
import { Usuario } from '../models/usuario.interface';
import { DataService, Message } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-cadastro-eventos',
  templateUrl: './cadastro-eventos.page.html',
  styleUrls: ['./cadastro-eventos.page.scss'],
})
export class CadastroEventosPage implements OnInit {

  public evento: Message = null
  public eventosList: Observable<Evento[]>;

  constructor(
    private router: Router,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService
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
    this.eventosList = this.firestoreService.getEventoList();
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

  async onSubmit() {
    if (this.evento) {
      
    } else {
      var data_inicio = this.cadastroForm.value.data_inicio.split('T')
      var data_fim = this.cadastroForm.value.data_fim.split('T')
      
      let response = await this.firestoreService.createEvento(
        this.cadastroForm.value.nome, 
        data_inicio[0], 
        data_fim[0], 
        this.cadastroForm.value.hora_inicio, 
        this.cadastroForm.value.hora_fim, 
        this.cadastroForm.value.quantidade_pessoas, 
        this.cadastroForm.value.valor_entrada, 
        this.cadastroForm.value.endereco, 
        this.cadastroForm.value.cidade, 
        this.cadastroForm.value.estado, 
        localStorage.getItem('usuario'), 
        this.cadastroForm.value.descricao
      )

      this.router.navigateByUrl('eventos')
    }
  }
}
