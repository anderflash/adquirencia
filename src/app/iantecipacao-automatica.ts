export interface IAntecipacaoAutomatica {
  banco: number;
  agencia: number;
  conta: number;
  trava: number;
  termo: number;
  status: string;
  dataContratacao: Date;
  dataCancelamento: Date;
}