import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Text, IconButton,Img ,Stack,Heading, Center} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { HamburgerIcon ,SearchIcon} from '@chakra-ui/icons';
import Login from './Login'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Stack>
      
    <Box pos="fixed" top={0} left={0} w="100%" bg="white" px={4} py={2} >
      <Flex  alignItems="center" justifyContent="space-between" >
        <Link to="/">
            <Img  paddingLeft={50} src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/images/Redesign/Header/bass-pro-logo-2x.png" height={"20"}/>
          {/* <Text fontSize="2xl" fontWeight="bold">My App</Text> */}
        </Link>
        
        <Input  icon ={<SearchIcon />} variant='filled' placeholder='What can we help you Find?' width={800} borderRadius={50}  />
        <Box display={{ base: "none", md: "flex"}} paddingRight={55} >
          <Link to="/login">
              <Img onClick={onOpen} width={50} marginRight={0} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="/>
          </Link>
          <Link to="/contact">
              <Img width={50} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3217207/shopping-cart-icon-sm.png"/>
          </Link>
        </Box>
      </Flex>
      <hr/>
      {/* ////////////////2nd nav bar/////////////// */}
      <Box  bg="white.200" px={4} py={2}>
    <Flex alignItems="center" justifyContent="space-between" marginLeft={10} marginRight={10} paddingBottom={1}>
      <Link to="/fishing">
          
        <Text fontSize="xl" fontWeight="bold">Fishing</Text>
      </Link>
      <Link to="/boating">
          
        <Text fontSize="xl" fontWeight="bold">Boating</Text>
      </Link>
      <Link to="/shooting">
          
        <Text fontSize="xl" fontWeight="bold">Shooting</Text>
      </Link>
      <Link to="/hunting">
          
        <Text fontSize="xl" fontWeight="bold">Hunting</Text>
      </Link>
      <Link to="/camping">
          
        <Text fontSize="xl" fontWeight="bold">Camping</Text>
      </Link>
      <Link to="/clothing">
          
        <Text fontSize="xl" fontWeight="bold">Clothing</Text>
      </Link>
      <Link to="/footware">
          
        <Text fontSize="xl" fontWeight="bold">Footware</Text>
      </Link>
      <Link to="/ride">
          
        <Text fontSize="xl" fontWeight="bold">Ride</Text>
      </Link>
      <Link to="/home&gifts">
          
        <Text fontSize="xl" fontWeight="bold">Home & Gifts</Text>
      </Link>
      <Link to="/bargin_cave">
          
        <Text fontSize="xl" fontWeight="bold">Bargin Cave</Text>
      </Link>
    </Flex>
    <hr/>
  </Box>
    </Box>
    
   {/* /////////////////////baner///////////// */}

  <Stack>
    <Link to="/">
        <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1440/v1675795069/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/BPS_Homepage-Marine.png" alignItems="center" marginLeft={50} marginTop={150}/>
    </Link>
    <Flex  marginLeft={50} justifyContent="space-between" >
        <Stack width={710}>
           <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1676084944/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Sunday/Triple-Crown-Sub1.png"  marginLeft={50} width={1500}/>
        </Stack>
        <Stack width={710} marginRight={8}>
            <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1675793769/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Hompage-Saltwater-Sub.png" />
        </Stack>
        
    </Flex>
     {/* <Stack width={1000} marginLeft={10000} >
        <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1674252596/DigitalCreative/2023/Homepage/wk3-1-23-26/BPS_CEP.png" />
        </Stack> */}
    </Stack>
    <Heading textAlign="center" paddingTop={3}>SHOP BY CATEGORY</Heading>
    
    <Flex justifyContent="space-between" width={1500} paddingLeft={50} paddingRight={4} paddingTop={5}>
          <Stack>
               <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-marine.png"/>
               <Text fontSize='xl'>MARINE ELECTRONICS</Text>
            </Stack> 
            <Stack>
               <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-reel.png"/>
               <Text fontSize='xl'>FISHING REELS</Text>
            </Stack> 
            <Stack>
                <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-trolling-motor.png"/>
                <Text fontSize='xl'>TROLLING MOTORS</Text>
            </Stack>
            <Stack>
                <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-jigs.png"/>
                <Text fontSize='xl'>JIGS</Text>
            </Stack>
            <Stack>
                <Img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1675721556/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Category-Update/BPS_cat-wclothing.png" width={260}/>
                <Text fontSize='xl'>COLD WEATHER <br/> CLOTHING ESSENTIALS</Text>
            </Stack>
           
    </Flex>
    
    <Heading textAlign="center" paddingTop={3}>OUR TOP BRANDS</Heading>
    
    <Flex justifyContent="space-between" width={1500} paddingLeft={50} paddingRight={4} paddingTop={5}>
          <Stack>
               <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-bps.jpg"/>
               
            </Stack> 
            <Stack>
               <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-cabelas.jpg"/>
               
            </Stack> 
            <Stack>
                <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-redhead.jpg"/>
               
            </Stack>
            <Stack>
                <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-abu.jpg"/>
               
            </Stack>
            <Stack>
                <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-garmin.jpg"/>
                
            </Stack>
            <Stack>
                <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-nr.jpg"/>
               
            </Stack>
            <Stack>
                <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-minn.jpg"/>
               
            </Stack>
            <Stack>
                <Img width={120} src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-ascend.jpg"/>
                
            </Stack>
           
    </Flex>
    
  </Stack>
 
  );
}

export default Navbar;
