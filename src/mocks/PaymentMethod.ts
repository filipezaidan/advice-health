import { PaymentMethodType } from "../@types/PaymentMethod";

export const PaymentMethod: PaymentMethodType[] = [
  {
    id: 1,
    type: "CREDIT_CARD",
    value: "Cartão de Crédito",
  },
  {
    id: 2,
    type: "PIX",
    value: "PIX",
  },
  {
    id: 3,
    type: "BOLETO",
    value: "BOLETO",
  },
  {
    id: 4,
    type: "DINHEIRO",
    value: "DINHEIRO",
  },
];
