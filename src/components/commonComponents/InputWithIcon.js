import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

const InputWithIcon = ({
  placeholder,
  type,
  icon,
  iconColor,
  onChangeInput,
  inputValue,
  width,
  name,
  error
}) => {
  return (
    <InputGroup width={width}>
      {icon && (
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color={iconColor} />
        </InputLeftElement>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        _focus={{
          boxShadow: "2px 2px 9px 4px rgba(99,59,254,0.3)",
          borderColor: "brand.100",
        }}
        onChange={onChangeInput}
        value={inputValue}
        bg="white"
        name={name}
      />
      {error && (
        <InputRightElement width="60%">
          <Text
            fontSize="11px"
            color="red.300"
            width="100%"
            display="flex"
            justifyContent="flex-end"
            paddingRight="10px"
          >
            {error}
          </Text>
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default InputWithIcon;
