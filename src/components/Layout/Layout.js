import { Text } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      {splitLocation[1] !== "preview" && <Navbar location={splitLocation[1]} />}
      <main>{children}</main>
    </>
  );
}

export default Layout
