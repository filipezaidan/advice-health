import { ClientType } from "./Client";
import { DoctorType } from "./Doctor";

export type AgendamentoType = {
  id: string;
  client: ClientType;
  doctor: DoctorType;
  horary: string;
  available: boolean;
  value: string;
  payment: string;
};
