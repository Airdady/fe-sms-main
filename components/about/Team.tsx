import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ImageIcon from '@mui/icons-material/Image';

const Team = () => {
  const data = [
    {   id:1,
      image:null, 
      name:'Rumbiiha Swaib' ,
      title:"CTO/ Founder",
      description:'A senior Software Engineer and product Owner'
  },
  {   id:2,
      image:'/ayes.jpg',
      name:'Ayesiza Hawah' ,
      title:"Engineer/ Tech Lead",
      description:'Leads the tech team and manages most company products'
  },
  {   id:3,
      image:null,
      name:'Asiimwe Paul' , 
      title:"SoftWare Engineer",
      description:'Leads the tech team and manages most company products'
  },
  ];
  return (
    <Box bgcolor="#ffffff" py={5}>
      <Container maxWidth="lg">
      <Box textAlign="center" mb={3} mt={6.3}>
              <Typography
                color="#008BB7"
                sx={{ fontSize: 30, fontFamily: "poppins", fontWeight: 700 }}
              >
               Meet Our Team
              </Typography>
            </Box>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          {data.map(({ image,name,title, description }, i) => (
            <Grid key={i} item xs={12} sm={12} md={4}>
              <Box sx={{
                // border:'solid 1px gainsboro',
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                boxShadow: "0 2px 10px rgb(0 0 0/25%)"
                
                }} 
                p={2} 
                height={350}>

                {image === null ?  <ImageIcon style={{fontSize:"200px"}} /> :<Image 
                src={image}
                alt="member"
                width={200}
                height={200}
               
                />
              }
               
              <Typography variant="h6" color={'#41AACB'}>{name}</Typography>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2" style={{textAlign:"center"}}>{description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
