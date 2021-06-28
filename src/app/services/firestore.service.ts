import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { Observable } from 'rxjs';

import { Evento } from '../models/evento.interface';
import { Usuario } from '../models/usuario.interface';
import { ParticipanteEvento } from '../models/participante-evento.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

    constructor(
        public firestore: AngularFirestore
    ) {}

    // SERVICES DE USUÁRIOS
    async createUsuario(nome: string, sobrenome: string, email: string, data_nascimento: string, cpf: string, senha: string) {
        const id = this.firestore.createId();
        
        await this.firestore.doc(`usuarios/${id}`).set({
            id, nome, sobrenome, email, data_nascimento, cpf, senha
        });

        return `${id}`
    }

    getUsuarioList(): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>(`usuarios`).valueChanges();
    }

    getUsuarioDetail(usuarioId: string): Observable<Usuario> {
        return this.firestore.collection('usuarios').doc<Usuario>(usuarioId).valueChanges();
    }

    loginUsuario(email: string, senha: string) {
        return this.firestore.collection('usuarios', ref => ref.where('email', '==', email).where('senha', '==', senha)).valueChanges()
    }

    async updateUsuario(id: string, nome: string, sobrenome: string, data_nascimento: string, cpf: string, senha?: string): Promise<any> {
        let update_usuario =  {
            nome: nome,
            sobrenome: sobrenome,
            data_nascimento: data_nascimento,
            cpf: cpf
        }

        if (senha) {
            update_usuario['senha'] = senha
        }

        return this.firestore.doc(`usuarios/${id}`).update(update_usuario)
    }

    // SERVICES DE EVENTOS
    async createEvento(nome: string, data_inicio: string, data_fim: string, hora_inicio: string, hora_fim: string, quantidade_pessoas: string, valor_entrada: string, endereco: string, cidade: string, estado: string, id_usuario_criador: string, descricao: string) {
        const id = this.firestore.createId();
        
        await this.firestore.doc(`eventos/${id}`).set({
            id, nome, data_inicio, data_fim, hora_inicio, hora_fim, quantidade_pessoas, valor_entrada, endereco, cidade, estado, id_usuario_criador, descricao
        });

        return `${id}`
    }

    getEventoList(): Observable<Evento[]> {
        return this.firestore.collection<Evento>(`eventos`).valueChanges();
    }

    getEventoFilter(data?: string, nome?: string) {
        if (data && nome) {
            return this.firestore.collection('eventos', ref => ref.where('data_inicio','==', data).where('nome', '==', nome)).valueChanges()    
        } else if (data && !nome) {
            return this.firestore.collection('eventos', ref => ref.where('data_inicio','==', data)).valueChanges()
        } else {
            return this.firestore.collection('eventos', ref => ref.where('nome','==', nome)).valueChanges()
        }
    }

    getEventosUsuario(usuarioId: string) {
        return this.firestore.collection('eventos', ref => ref.where('id_usuario_criador', '==', usuarioId)).valueChanges()
    }

    getEventoDetail(eventoId: string): Observable<Evento> {
        return this.firestore.collection('eventos').doc<Evento>(eventoId).valueChanges();
    }

    // SERVICES DE PARTICIPANTE EVENTO
    async createParticipacao(id_usuario, usuario, id_evento, evento) {
        const id = this.firestore.createId();
        const validado: number = 0
        
        await this.firestore.doc(`participanteEvento/${id}`).set({
            id, id_usuario, usuario, id_evento, evento, validado
        });

        return `${id}`
    }

    getEntradaDetail(entradaId: string): Observable<ParticipanteEvento> {
        return this.firestore.collection('participanteEvento').doc<ParticipanteEvento>(entradaId).valueChanges();
    }

    async validarEntrada(id: string): Promise<any> {
        let update =  {
            validado: 1
        }

        return this.firestore.doc(`participanteEvento/${id}`).update(update)
    }

    verificaParticipacao(id_usuario: string, id_evento: string) {
        return this.firestore.collection('participanteEvento', ref => ref.where('id_usuario','==', id_usuario).where('id_evento', '==', id_evento)).valueChanges()
    }

    getEntradasUsuario(id_usuario: string) {
        return this.firestore.collection('participanteEvento', ref => ref.where('id_usuario','==', id_usuario)).valueChanges()
    }

    cancelar(id_participacao: string) {
        this.firestore.doc<any>(`participanteEvento/${id_participacao}`).delete();
    }
}