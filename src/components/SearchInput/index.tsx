import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { ChangeEventHandler } from "react";

interface SearchInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <InputGroup>
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
