export interface Evento {
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
    id: string;
    id_usuario_criador: string;
    descricao: string;
}