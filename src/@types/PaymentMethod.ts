export type PaymentMethodType = {
  id: number;
  type: "CREDIT_CARD" | "PIX" | "BOLETO" | "DINHEIRO";
  value: string;
};
