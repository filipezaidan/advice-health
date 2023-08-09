import uuid from "react-uuid";

const generateHorary = () => {
  const horarios = [];
  let hora = 8;

  while (hora <= 18) {
    for (const minuto of [0, 30]) {
      const agendaHoury = {
        id: uuid(),
        client: {
          name: "",
          cpf: "",
          birthdate: "",
          address: "",
        },
        doctor: "",
        horary: `${hora.toString().padStart(2, "0")}:${minuto
          .toString()
          .padStart(2, "0")}`,
        available: true,
      };
      horarios.push(agendaHoury);
    }

    hora++;
  }

  return horarios;
};

export const ListOfHorary = generateHorary();
