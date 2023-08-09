import { z } from "zod";

export const AgendamentoSchema = z.object({
  name: z.string().min(16, { message: "Digite o nome completo" }),
  cpf: z.string().min(11, { message: "CPF deve ter 11 caracteres" }),
  birthdate: z.string(),
  address: z.string(),
  payment: z.string(),
  value: z.string(),
});
