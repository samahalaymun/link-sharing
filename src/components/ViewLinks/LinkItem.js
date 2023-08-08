import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { platFormIcons } from "../../utils/platformItems";
const LinkItem = ({link,label,background,icon}) => {
  return (
    <Link href={link} isExternal>
      <Flex
        bg={background}
        minH="56px"
        width="100%"
        rounded=".5rem"
        p="12px"
        color="white"
        justify="space-between"
        align="center"
      >
        <Flex align="center" columnGap={2}>
          <Icon color="white" fontSize={20} as={platFormIcons[label]}/>
          <Text fontSize="18px">{label}</Text>
        </Flex>
        <Icon as={AiOutlineArrowRight} fontSize={20} />
      </Flex>
    </Link>
  );
}

export default LinkItem
