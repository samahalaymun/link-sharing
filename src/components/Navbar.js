import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsLink, BsLink45Deg } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = ({location}) => {
  return (
    <Flex
      bg="white"
      padding="20px"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={{ base: "0 0 10px 10px", md: "7px" }}
      margin={{ base: 0, md: "20px 20px 0 20px" }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Box
          bg="brand.100 "
          borderRadius="7px"
          padding="5px"
          height={{ md: "20px", base: "30px" }}
          width={{ md: "20px", base: "32px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="5px"
        >
          <Icon
            as={BsLink}
            color="white"
            fontWeight={700}
            fontSize={{ md: 18, base: 30 }}
          ></Icon>
        </Box>
        <Text
          color="primary.100"
          fontWeight={700}
          display={{ base: "none", md: "unset" }}
        >
          devlinks
        </Text>
      </Flex>
      <Flex columnGap="15px">
        <NavLink to="/links">
          <Button
            variant={location === "links" ? "solidSecondary" : "ghost"}
            size="md"
          >
            <Icon
              as={BsLink45Deg}
              fontSize={{ md: 18, base: 30 }}
              fontWeight={700}
              marginRight="7px"
            />
            <Text display={{ base: "none", md: "unset" }}>Links</Text>
          </Button>
        </NavLink>
        <NavLink to="/profile">
          <Button
            variant={location === "profile" ? "solidSecondary" : "ghost"}
            size="md"
          >
            <Icon
              as={BiUserCircle}
              fontSize={{ md: 18, base: 30 }}
              fontWeight={700}
              marginRight="7px"
            />
            <Text display={{ base: "none", md: "unset" }}>Profile Details</Text>
          </Button>
        </NavLink>
      </Flex>
      <NavLink to="/preview">
        <Button variant="outline">
          <Icon
            as={AiOutlineEye}
            fontSize={30}
            fontWeight={700}
            display={{ base: "unset", md: "none" }}
          />
          <Text display={{ base: "none", md: "unset" }}>Preview</Text>
        </Button>
      </NavLink>
    </Flex>
  );
};

export default Navbar;
