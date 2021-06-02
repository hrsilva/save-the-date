import { Injectable } from '@angular/core';

export interface Message {
  nome: string;
  data_inicio: string;
  data_fim: string;
  hora_inicio: string,
  hora_fim: string,
  quantidade_pessoas: number,
  valor_entrada: number,
  endereco: string,
  cidade: string,
  estado: string,
  id: number;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      nome: 'Matt Chorsey',
      data_inicio: '04/09/2021',
      data_fim: '9:32 AM',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 0,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Lauren Ruthford',
      data_inicio: '20/05/2021',
      data_fim: '6:12 AM',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Jordan Firth',
      data_inicio: '05/06/2021',
      data_fim: '4:55 AM',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 2,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Bill Thomas',
      data_inicio: '03/06/2021',
      data_fim: 'Yesterday',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 3,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Joanne Pollan',
      data_inicio: '13/07/2021',
      data_fim: 'Yesterday',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 4,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Andrea Cornerston',
      data_inicio: '10/06/2021',
      data_fim: 'Yesterday',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 5,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Moe Chamont',
      data_inicio: '04/10/2021',
      data_fim: 'Last Week',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 6,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Kelly Richardson',
      data_inicio: '13/08/2021',
      data_fim: 'Last Week',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 7,
      descricao: 'Festa cultural.'
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
