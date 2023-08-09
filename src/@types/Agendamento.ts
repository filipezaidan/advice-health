import { ClientType } from "./Client";

export type AgendamentoType = {
  id: string;
  client: ClientType;
  doctor: string;
  horary: string;
  available: boolean;
  value: string;
  payment: string;
};
