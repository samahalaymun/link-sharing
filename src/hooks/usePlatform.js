import React, { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai';

export const usePlatform = () => {

  const [platFormState, setPlatFromState] = useState({
    isOpen: false,
    selectedMenuItem: {
      value: "github",
      icon: AiFillGithub,
      background: "#EB4925",
    },
  });
  const toggleMenuOpen = () => {
    setPlatFromState((prev) => ({
      ...prev,
      isOpen: !platFormState.isOpen,
    }));
  };
 console.log(platFormState);
  const onSelectMenuItem = (menuItem) => {
    console.log("select item")
    setPlatFromState((prev) => ({
      isOpen:false,
      selectedMenuItem: menuItem,
    }));
    // if (platFormState.isOpen) {
    //   toggleMenuOpen();
    // }
  };
useEffect(()=>{

},[])

  return {
    platFormState,
    setPlatFromState,
    toggleMenuOpen,
    onSelectMenuItem,
  };
}


