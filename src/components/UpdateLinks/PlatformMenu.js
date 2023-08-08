import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PlatformMenuItem from "./PlatformMenuItem";
import { IoLogoFacebook } from "react-icons/io5";
import { SiCodewars, SiFreecodecamp, SiHashnode } from "react-icons/si";
import { BsStackOverflow } from "react-icons/bs";
import { platformItems } from "../../utils/platformItems";
import { usePlatform } from "../../hooks/usePlatform";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../../store/menu-slice";
import { AiFillGithub } from "react-icons/ai";
import { linksActions } from "../../store/links-slice";
import { platFormIcons } from "../../utils/platformItems";

const PlatformMenu = ({ index, id, link, selectedValue,background }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const toggleMenu = (index) => {
    dispatch(menuActions.toggleMenuOpen(index));
  };
  const [selectedItem, setSelectedItem] = useState({
    menuIndex: index,
    value: selectedValue,
    icon: platFormIcons[selectedValue],
    background: background,
  });
  const onSelectMenuItem = (index, icon, value, background) => {
    setSelectedItem({
      menuIndex: index,
      icon: icon,
      value: value,
      background: background,
    });
    dispatch(
      menuActions.onSelectMenuItem({
        index,
        item: {
          id: id,
          icon: icon,
          value: value,
          background: background,
        },
      })
    );
    let item = {
      index,
      id: id,
      value: value,
      icon: icon,
      background: background,
      link: link,
    };
    dispatch(linksActions.addToUpdateLinks(item));
    toggleMenu(index);
  };

  return (
    <Menu isOpen={menu.index === index && menu.isOpen}>
      <MenuButton
        padding={0}
        paddingRight="16px"
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        as={Button}
        rightIcon={<ChevronDownIcon color="brand.100" />}
        _expanded={{
          boxShadow: "2px 2px 9px 4px rgba(99,59,254,0.3)",
          borderColor: "brand.100",
        }}
        _focus={{
          boxShadow: "2px 2px 9px 4px rgba(99,59,254,0.3)",
          borderColor: "brand.100",
        }}
        variant="menu"
        onClick={() => toggleMenu(index)}
      >
        <Box
          display="flex"
          width="100%"
          textAlign="start"
          alignItems="center"
          color="primary.100"
          fontSize="18px"
          padding="8px 16px"
        >
          {selectedItem.icon && (
            <Icon as={selectedItem.icon} marginRight="7px" />
          )}
          <Text>{selectedItem.value}</Text>
        </Box>
      </MenuButton>
      <MenuList>
        {platformItems.map((item) => (
          <PlatformMenuItem
            menuIndex={index}
            key={item.value}
            icon={item.icon}
            value={item.value}
            background={item.background}
            onSelectItem={() =>
              onSelectMenuItem(index, item.icon, item.value, item.background)
            }
          />
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
