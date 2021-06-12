import { Injectable } from '@angular/core';

export interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  data_nascimento: string;
  cpf: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceUsuario {
  public usuario: Usuario[] = [
    {
      id: '1',
      nome: 'Jhon',
      sobrenome: 'Doe',
      email: 'jhondoe@jhondoe.com',
      data_nascimento: '04/09/1990',
      cpf: '01134455567'
    },
    {
      id: '2',
      nome: 'Jairo',
      sobrenome: 'Nascimento',
      email: 'jaironasc@jairo.com',
      data_nascimento: '09/08/1998',
      cpf: '01134455123'
    }
  ];

  constructor() { }

  public getUsuarios(): Usuario[] {
    return this.usuario;
  }

  public getUsuarioById(id: number): Usuario {
    return this.usuario[id];
  }
}
