import {  Flex, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Nolink from "../../assets/images/no-links.svg";
const EmptyUpdateLinks = () => {
    
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justify="center"
      height="100%"
      rowGap="30px"
    >
      <Img src={Nolink} marginTop={{base:"50px"}} />
      <Text
        fontSize={{ base: "24px", lg: "32px" }}
        color="primary.100"
        fontWeight={600}
      >
        Let’s get you started
      </Text>
      <Text
        fontSize={{ base: "12px", lg: "16px" }}
        color="primary.200"
        textAlign="center"
        width={{base: "80%", lg: "60%"}}
      >
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </Text>
    </Flex>
  );
}

export default EmptyUpdateLinks
