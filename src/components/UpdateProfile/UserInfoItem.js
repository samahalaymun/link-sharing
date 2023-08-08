import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import InputWithIcon from '../commonComponents/InputWithIcon';

const UserInfoItem = ({ infoName, placeHolder, type, onInputChange,name ,value ,error}) => {
  return (
    <Flex width="100%" flexDirection={{ base: "column", md: "row" }} gap="5px">
      <Text
        color="primary.200"
        fontSize="16px"
        width={{ base: "100%", md: "40%" }}
      >
        {infoName}
      </Text>
      <InputWithIcon
        placeholder={placeHolder}
        type={type}
        width={{ base: "100%", md: "60%" }}
        onChangeInput={onInputChange}
        name={name}
        inputValue={value}
        error={error}
      />
    </Flex>
  );
};

export default UserInfoItem
