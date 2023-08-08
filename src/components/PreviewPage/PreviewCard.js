import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LinkItem from "../ViewLinks/LinkItem";

const PreviewCard = ({ avatar, username, email, links }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      borderRadius="50px"
      bg="white"
      boxShadow="rgba(0,0,0,0.1) 0px 0px 32px 0px "
      padding="20px"
      width="100%"
      maxWidth="350px"
      //   minHeight="35rem"
    >
      {avatar && (
        <Box margin="25px 0 15px">
          <Image
            width="100px"
            height="100px"
            src={avatar}
            borderRadius="50%"
            border="3px solid "
            borderColor="brand.100"
            objectFit="cover"
          />
        </Box>
      )}
      {username && (
        <Text fontWeight={700} color="primary.100" fontSize="24px">
          {username}
        </Text>
      )}
      {email && (
        <Text
          fontWeight={500}
          color="primary.200"
          fontSize="16px"
          margin="10px 0 50px"
        >
          {email}
        </Text>
      )}
      <Box
        display="flex"
        flexDirection="column"
        gap="1.25rem"
        className="view-links-container"
        width="100%"
        px="20px"
        marginBottom="15px"
        height="300px"
      >
        {links.length > 0 &&
          links.map((link) => {
            return (
              <LinkItem
                label={link.value}
                background={link.background}
                icon={link.icon}
                link={link.link}
              />
            );
          })}
      </Box>
    </Flex>
  );
};

export default PreviewCard;
