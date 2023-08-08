import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react'
import { usePlatform } from '../../hooks/usePlatform';
import { useDispatch } from 'react-redux';
import { menuActions } from '../../store/menu-slice';

const PlatformMenuItem = ({
  icon,
  value,
  onSelectItem,
}) => {
  return (
    <Flex cursor="pointer" onClick={onSelectItem} padding="4px 16px">
      <Box
        borderBottom="1px solid"
        display="flex"
        width="100%"
        textAlign="start"
        alignItems="center"
        color="primary.100"
        fontSize="18px"
        py="4px"
        borderBottomColor="primary.200"
        _hover={{
          color: "brand.100",
        }}
      >
        <Icon as={icon} marginRight="7px" />
        <Text>{value}</Text>
      </Box>
    </Flex>
  );
};

export default PlatformMenuItem
