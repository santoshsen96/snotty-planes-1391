import React, { useState } from "react";
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import {Input,Text} from "@chakra-ui/react"
//import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar"
 
function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  


  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
 
  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer isOpen={isOpen} onClose={onClose} gap={3}>
        <DrawerOverlay />
        <DrawerContent paddingLeft={2}>
          <DrawerCloseButton />
          <DrawerHeader>Sign-in to your Bass Pro Shops account</DrawerHeader>
          <Text>Email</Text>
          <Input placeholder="Email"/>
          <Text>Password</Text>
          <Input placeholder="Password"/>
          <Text>Re-enter Password</Text>
          <Input placeholder="Re-enter"/>
            
                 
        <Button color="gray">SIGN IN</Button>
          
        
          <DrawerBody>CLUB members can now manage their account by signing in through Bass Pro Shops above. Learn More</DrawerBody>
          <DrawerFooter>Drawer Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Login ;





