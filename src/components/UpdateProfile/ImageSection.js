import { Box, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { IoImageOutline } from "react-icons/io5";

const ImageSection = ({ onSelectImage, selectedImage }) => {
  const selectedFileRef = useRef(null);
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      bg="secondary.100"
      borderRadius="7px"
      padding="20px"
      width="100%"
      alignItems="center"
      gap="15px"
      marginBottom="25px"
    >
      <Flex width={{ base: "100%", md: "40%" }}>
        <Text fontSize="16px" color="primary.200" fontWeight={500}>
          Profile picture
        </Text>
      </Flex>
      <Flex
        width={{ base: "100%", md: "60%" }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap="15px"
      >
        <Flex width={{ base: "100%", md: "50%" }}>
          <Box
            width="170px"
            height="170px"
            borderRadius="10px"
            bg="brand.300"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="15px"
            onClick={() => selectedFileRef.current?.click()}
            position="relative"
            zIndex={1}
            className="select-img"
            cursor="pointer"
          >
            <Box
              display={selectedImage ? "none" : "flex"}
              color={selectedImage ? "white" : "brand.100"}
              alignItems="center"
              justifyContent="center"
              fontWeight={700}
              flexDirection="column"
              position="absolute"
              borderRadius="10px"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={10}
              _hover={{
                display: "flex",
              }}
              backgroundColor={
                selectedImage ? "rgba(0, 0, 0, 0.6)" : "brand.300"
              }
              className="select-img-hover"
            >
              <Icon as={IoImageOutline} fontSize={30} />
              <Text>+ Upload Image</Text>
            </Box>
            {selectedImage && (
              <Image
                width="100%"
                height="100%"
                src={selectedImage}
                borderRadius="10px"
              />
            )}
            <Input
              type="file"
              ref={selectedFileRef}
              hidden
              onChange={onSelectImage}
            />
          </Box>
        </Flex>
        <Text
          fontSize="12px"
          color="primary.200"
          fontWeight={500}
          width={{ base: "100%", md: "60%" }}
        >
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </Flex>
    </Flex>
  );
};

export default ImageSection;
