import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}

    createUsuario(nome: string, sobrenome: string, email: string, data_nascimento: string, cpf: string): Promise<void> {
        const idnew = this.firestore.createId();

        return this.firestore.doc(`usuariosList/${idnew}`).set({
            nome, sobrenome, email, data_nascimento,cpf
        });
    }

    getUsuarioList(): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>(`usuariosList`).valueChanges();
    }

    getUsuarioDetail(usuarioId: string): Observable<Usuario> {
        return this.firestore.collection('usuarioList').doc<Usuario>(usuarioId).valueChanges();
    }
}