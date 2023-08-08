import { Text } from '@chakra-ui/react';
import React from 'react'

const SectionTitle = ({title,subTitle}) => {
  return (
    <>
      <Text
        fontSize={{ base: "24px", lg: "32px" }}
        color="primary.100"
        fontWeight={600}
        marginBottom="10px"
      >
        {title}
      </Text>
      <Text color="primary.200" fontSize="15px" marginBottom="30px">
        {subTitle}
      </Text>
    </>
  );
}

export default SectionTitle
