import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import EmptyUpdateLinks from "./EmptyUpdateLinks";
import UpdateLinkItem from "./UpdateLinkItem";
import { useDispatch, useSelector } from "react-redux";
import { linksActions } from "../../store/links-slice";
import { AiFillGithub } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { uiActions } from "../../store/ui-slice";
import useLocalStorage from "../../hooks/useLocalStorage";
import SectionTitle from "../commonComponents/SectionTitle";
import SaveButton from "../commonComponents/SaveButton";
const UpdateLinks = () => {
  const links = useSelector((state) => state.links);
  const dispatch = useDispatch();
  const [previewLinks, setPreviewLinks] = useLocalStorage("previewLinks",[]);

  const addNewLinks = () => {
    let item = {
      id: uuidv4(),
      value: "",
      icon: null,
      background: "",
      link: "",
    };
    dispatch(linksActions.addToUpdateLinks(item));
  };
  const saveLinks=()=>{
    let errorStatus=false;
    let previewLinks=[];
    links.updateLinks.forEach(link => {
       if(link.link === "" || link.value === ""){
        errorStatus=true;
      }
    });
    if(errorStatus){
       dispatch(
         uiActions.showNotification({
           type: "error",
           open: true,
           message: "Please fill all inputs ",
         })
       );
    }else{
      links.updateLinks.forEach((link) => {
        previewLinks.push(link);
        
      });
      console.log(previewLinks);
      setPreviewLinks(previewLinks);
      dispatch(linksActions.addToPreviewLinks(previewLinks));
      dispatch(
        uiActions.showNotification({
          type: "success",
          open: true,
          message: "Your changes have been successfully saved!",
        })
      );
    }
  }
 console.log(previewLinks);
useEffect(() => {
  if(previewLinks){
    previewLinks.forEach((link)=>{
       dispatch(linksActions.addToUpdateLinks(link));
    })
  }
}, [previewLinks]);
  return (
    <Flex
      width="100%"
      flexDirection="column"
      height="790px"
      bg="white"
      borderRadius="7px"
    >
      <Flex
        width="100%"
        minHeight="700px"
        bg="white"
        flexDirection="column"
        borderRadius="7px"
        padding={{ base: "30px 15px", lg: "40px 30px 10px" }}
        position="relative"
        className="update-links"
      >
        <SectionTitle
          title="Customize your links"
          subTitle="Add/edit/remove links below and then share all your profiles with the
          world!"
        />
        <Button
          width="100%"
          variant="outline"
          marginBottom="24px"
          onClick={addNewLinks}
          padding="20px"
        >
          <Icon as={IoAdd} color="brand.100" fontSize={18} marginRight="7px" />
          Add new link
        </Button>
        {links.updateLinks.length !== 0 ? (
          links.updateLinks.map((item, index) => (
            <UpdateLinkItem
              index={index + 1}
              id={item.id}
              key={index}
              link={item.link}
              value={item.value}
              background={item.background}
            />
          ))
        ) : (
          <EmptyUpdateLinks />
        )}
      </Flex>
      {links.updateLinks.length !== 0 && 
       <SaveButton label="Save" handleClick={saveLinks}/>
      }
    </Flex>
  );
};

export default UpdateLinks;
