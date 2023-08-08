import { Flex } from '@chakra-ui/react'
import React from 'react'

const PageContent = ({children}) => {
  return (
    <Flex justify="center" padding={{base:"10px",lg:"30px"}}>
      <Flex width="100%" justify="center">
        {/* Left side */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          width="40%"
          mr={{ base: "0", md: 6 }}
          flexGrow={1}
        >
          {children && children[0]}
        </Flex>
        {/* right side */}
        <Flex
          width={{ base: "100%", lg: "60%" }}
          flexDirection="column"
        >
          {children && children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PageContent
