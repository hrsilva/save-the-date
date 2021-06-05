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
  id_usuario_criador: number;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      nome: 'Evento Cultural CXS',
      data_inicio: '04/09/2021',
      data_fim: '04/09/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 0,
      id_usuario_criador: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Show Banda A',
      data_inicio: '20/05/2021',
      data_fim: '20/05/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 1,
      id_usuario_criador: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Palestra Marketing com Jordan Firth',
      data_inicio: '05/06/2021',
      data_fim: '05/06/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 2,
      id_usuario_criador: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Autógrafos com Bill Thomas',
      data_inicio: '03/06/2021',
      data_fim: '03/06/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 3,
      id_usuario_criador: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Workshop de Guitarra',
      data_inicio: '13/07/2021',
      data_fim: '13/07/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 4,
      id_usuario_criador: 1,
      descricao: 'Será apresentada técnicas do instrumento, apresentando todo o caminho a ser percorrido para se tornar um guitarrista profissional. O apresentador irá exemplificar as regulagens de efeitos com pedais e amplificador, o que deve ser levado em conta no momento de preparar seus equipamentos.'
    },
    {
      nome: 'Andrea Cornerston',
      data_inicio: '10/06/2021',
      data_fim: '10/06/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 5,
      id_usuario_criador: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Moe Chamont',
      data_inicio: '04/10/2021',
      data_fim: '04/10/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 6,
      id_usuario_criador: 1,
      descricao: 'Festa cultural.'
    },
    {
      nome: 'Kelly Richardson',
      data_inicio: '13/08/2021',
      data_fim: '13/08/2021',
      hora_inicio: '10:12',
      hora_fim: '05:12',
      quantidade_pessoas: 100,
      valor_entrada: 45.12,
      endereco: 'Rua Jhon Doe',
      cidade: 'Caxias do Sul',
      estado: 'RS',
      id: 7,
      id_usuario_criador: 1,
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
