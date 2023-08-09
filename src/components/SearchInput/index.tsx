import {
  Input,
  InputGroup,
  InputGroupProps,
  InputRightElement,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { ChangeEventHandler } from "react";

interface SearchInputProps extends InputGroupProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({ onChange, ...rest }: SearchInputProps) => {
  return (
    <InputGroup {...rest}>
      <InputRightElement pointerEvents="none">
        <FiSearch color="gray.300" />
      </InputRightElement>
      <Input
        type="text"
        placeholder="Pesquisar..."
        onChange={onChange}
        focusBorderColor="blue.400"
        borderRadius="full"
      />
    </InputGroup>
  );
};

export default SearchInput;
