import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const PreviewHeader = () => {
  return (
    <Flex
      bg="white"
      padding="20px"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={{ base: "0 0 10px 10px", md: "7px" }}
    >
      <NavLink to="/profile">
        <Button variant="outline" size="md">
          Back to Editor
        </Button>
      </NavLink>
      <NavLink>
        <Button variant="solid" size="md">
          Share Link
        </Button>
      </NavLink>
    </Flex>
  );
};

export default PreviewHeader;
