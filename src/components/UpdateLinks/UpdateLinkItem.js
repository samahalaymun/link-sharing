import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { VscGrabber } from "react-icons/vsc";
import PlatformMenu from "./PlatformMenu";
import InputWithIcon from "../commonComponents/InputWithIcon";
import { BsLink45Deg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { linksActions } from "../../store/links-slice";
const UpdateLinkItem = ({ index,id ,link,value ,background}) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const [linkValue, setLinkValue] = useState(link);
 
  const onInputChange = (e) => {
    if (e.target.value) {
      setLinkValue(e.target.value);
    }else{
      setLinkValue("");
      
    }
  };
  const removeUpdateLink = () => {
    dispatch(linksActions.removeFromUpdateLinks(index));
  };
  useEffect(() => {
      const item = menu.selectedMenuItems.find((item) => item.id === id);
      if(item){
        dispatch(
          linksActions.addToUpdateLinks({
            id:id,
            value: item.value,
            icon: item.icon,
            background: item.background,
            link: linkValue,
          })
        );
      }else{
        dispatch(
          linksActions.addToUpdateLinks({
            id: id,
            value: value,
            icon: null,
            background: background,
            link: linkValue,
          })
        );
      }
  }, [linkValue, index, menu.selectedMenuItems]);
  return (
    <Flex
      bg="secondary.100"
      borderRadius="7px"
      padding="18px 15px 15px "
      flexDirection="column"
      marginBottom="15px"
    >
      <Flex justify="space-between" width="100%" marginBottom="10px">
        <Flex
          alignItems="center"
          color="primary.200"
          gap="5px"
          fontWeight={600}
        >
          <Icon as={VscGrabber} w={4} h={6} fontSize={18} />
          <Text>Link</Text>
          <Text>#{index}</Text>
        </Flex>
        <Button variant="ghost" onClick={removeUpdateLink}>
          Remove
        </Button>
      </Flex>
      <Text color="primary.200" fontSize="12px" marginBottom="7px">
        Platform
      </Text>
      <PlatformMenu
        index={index}
        id={id}
        link={link}
        selectedValue={value}
        background={background}
      />

      <Text color="primary.200" fontSize="12px" my="7px">
        Link
      </Text>
      <InputWithIcon
        placeholder="e.g https://github.com/samahalaymun"
        icon={BsLink45Deg}
        type="text"
        iconColor="gray.500"
        onChangeInput={onInputChange}
        inputValue={link}
      />
    </Flex>
  );
};

export default UpdateLinkItem;
