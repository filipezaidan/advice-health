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
import { ClientType } from "../../../@types/Client";
import { AgendamentoType } from "../../../@types/Agendamento";
import { Doctors } from "../../../mocks/Doctor";

interface ModalAgendamentoProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onConfirm: (value: AgendamentoType) => void;
  data: AgendamentoType;
}

export const ModalAgendamento = (props: ModalAgendamentoProps) => {
  const { isOpen, onClose, onConfirm } = props;
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(AgendamentoSchema),
  });

  const onSubmit = (data) => {
    const { doctor, ...cliente } = data;
    console.log({ cliente });
    const values: AgendamentoType = {
      id: props.data.id,
      client: cliente,
      available: false,
      doctor: doctor,
      horary: props.data.horary,
    };

    onConfirm(values);
    onClose();
    reset();
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
            </Stack>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit(onSubmit)}>
            Cadastrar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
