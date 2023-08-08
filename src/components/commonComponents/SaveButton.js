import { Button, Flex } from '@chakra-ui/react';
import React from 'react'

const SaveButton = ({label,handleClick}) => {
  return (
    <Flex
      justifyContent="flex-end"
      bg="white"
      padding="20px 30px"
      borderTop="1px solid"
      borderTopColor="primary.200"
      borderRadius="0 0 7px 7px"
    >
      <Button
        variant="solid"
        width={{ base: "100%", md: "inherit" }}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Flex>
  );
}

export default SaveButton
