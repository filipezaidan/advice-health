/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Divider,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AgendamentoSchema } from "../../../schemas/Agendamento";
import { AgendamentoType } from "../../../@types/Agendamento";
import { Doctors } from "../../../mocks/Doctor";
import { PaymentMethod } from "../../../mocks/PaymentMethod";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";

interface ModalAgendamentoProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onConfirm: (value: AgendamentoType) => void;
  data: AgendamentoType | null;
}

export type AgendamentoData = z.infer<typeof AgendamentoSchema>;

export const ModalAgendamento = (props: ModalAgendamentoProps) => {
  const { isOpen, onClose, onConfirm } = props;
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(AgendamentoSchema),
  });

  const onSubmit: SubmitHandler<AgendamentoData> = (data) => {
    const { value, payment, doctor, ...cliente } = data;
    if (props.data) {
      const values: AgendamentoType = {
        id: props.data.id,
        horary: props.data.horary,
        client: cliente,
        available: false,
        doctor: doctor,
        payment: payment,
        value: value,
      };

      console.log({ values });
      onConfirm(values);
      onClose();
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agendar Paciente</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>Nome</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <Controller
                name="cpf"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>CPF</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <Controller
                name="birthdate"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <Input type="date" {...field} />
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>Endereço</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <Divider />
              <Controller
                name="doctor"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>Doutor</FormLabel>
                    <Select {...field}>
                      <option value={""}></option>
                      {Doctors.map((doctor, key) => (
                        <option value={doctor.name} key={key}>
                          {doctor.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <Controller
                name="payment"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>Meio de Pagamento</FormLabel>
                    <Select {...field}>
                      <option value={""}></option>
                      {PaymentMethod.map(({ value }, key) => (
                        <option value={value} key={key}>
                          {value}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
              <Controller
                name="value"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel>Valor da Consulta</FormLabel>
                    <Input type="number" {...field} />
                    <FormErrorMessage>
                      {fieldState?.error?.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              />
            </Stack>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit">
            Agendar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
