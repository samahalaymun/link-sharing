import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import ViewLinksLogo from "./ViewLinksLogo";
import { useDispatch, useSelector } from "react-redux";

const ViewLinks = ({ avatar, username, email, links }) => {
  return (
    <Flex
      width="100%"
      bg="white"
      borderRadius="7px"
      justify="center"
      alignItems="center"
      padding="50px"
      height="790px"
    >
      <Flex>
        <ViewLinksLogo
          avatar={avatar}
          username={username}
          email={email}
          links={links}
        />
      </Flex>
    </Flex>
  );
};

export default ViewLinks;
