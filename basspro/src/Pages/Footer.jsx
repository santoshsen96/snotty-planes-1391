import react from 'react'
import {Grid,Heading,Stack,Text,Link,Input,Button} from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const Footer = () => {
  return (
     <div>
        <hr/>
        <Grid gridTemplateColumns="repeat(4,1fr)" backgroundColor="#F5F5DC" >
            
            <Stack>
              <Heading fontSize={20} marginTop={5}>HELP</Heading>
              <Link paddingTop={3}>Order Status</Link>
              <Link>Returns</Link>
              <Link>Shipping Information</Link>
              <Link>Product Subscriptions</Link>
              <Link>Size Chart</Link>
              <Link>Embroidery Services</Link>
              <Link>Rod & Reel Repair</Link>
              <Link>Boat & Boat Centers</Link>
              <Link>Tracker Off-Road</Link>  
            </Stack>

            <Stack>
              <Heading fontSize={20} marginTop={5} >RESOURCES</Heading>
              <Link paddingTop={3}>Order Status</Link>
              <Link>Returns</Link>
              <Link>Shipping Information</Link>
              <Link>Product Subscriptions</Link>
              <Link>Size Chart</Link>
              <Link>Embroidery Services</Link>
              <Link>Rod & Reel Repair</Link>
              <Link>Boat & Boat Centers</Link>
              <Link>Tracker Off-Road</Link>  
            </Stack>

            <Stack>
              <Heading fontSize={20} marginTop={5}>ABOUT US</Heading>
              <Link paddingTop={3}>Order Status</Link>
              <Link>Returns</Link>
              <Link>Shipping Information</Link>
              <Link>Product Subscriptions</Link>
              <Link>Size Chart</Link>
              <Link>Embroidery Services</Link>
              <Link>Rod & Reel Repair</Link>
              <Link>Boat & Boat Centers</Link>
              <Link>Tracker Off-Road</Link>  
            </Stack>
            <Stack>
            <Heading fontSize={20} marginTop={5}>SIGN UP FOR EXCLUSIVE DEALS & OFFERS</Heading>
            <Input placeholder="Enter Your Email Address"/>
            <Checkbox >I agree to receive special offers, promotions, and catalog announcements</Checkbox>
            <Button>SIGN UP</Button>
            </Stack>
        </Grid>
    </div>
  );
};

export default Footer;
