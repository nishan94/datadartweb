import { Box, Typography } from "@mui/material";
import { GradientBox } from "./components/GradientBox";

export const metadata = {
  title: "Redux Toolkit"
}

export default function IndexPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        width: '100%',
        justifyContent: 'center',      
      }}
      alignItems={"center"}

    >
      
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          justifyContent: 'flex-start',  
          maxWidth: 1200,                
        }}
        alignItems={"center"}
      >
        <Typography
        variant="h4"
        sx={{ fontFamily: "Poppins, Helvetica", color: "#2374f7" ,width:'100%'}}
      >
        Administrator Overview
      </Typography>
        {[
          { title: "Orders", img: '/assets/orders.png' ,route : '/orders'},
          { title: "Subscription", img: '/assets/subsciptions.png',route : '/subscription' },
          { title: "Shipping Center", img: '/assets/shippingcenter.png',route : '/shippingcenter' },
          { title: "Cloud End Point", img: '/assets/cloudendpoint.png',route : '/cloudendpoint' },
          { title: "Engineers", img: '/assets/engineers.png',route : '/engineers' },
        ].map((item, index) => (
          <GradientBox key={index} imageSrc={item.img} cardName={item.title} route={item.route}/>
        ))}
      </Box>
    </Box>
  );
}
