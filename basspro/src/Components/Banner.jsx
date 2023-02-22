import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Text, IconButton,Img ,Stack,Heading, Center} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { HamburgerIcon ,SearchIcon} from '@chakra-ui/icons';

function Banner(){

    return(
       
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
    )
}
export default Banner