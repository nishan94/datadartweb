"use client"
import { 
    Box, 
    Button, 
    Container, 
    Grid2 as Grid, 
    Link, 
    TextField, 
    Typography 
  } from "@mui/material"; 
  import { 
    CssBaseline, 
    ThemeProvider as MuiThemeProvider, 
    createTheme 
  } from "@mui/material"; 
  import React, { useState } from "react"; 
  import frame2018777514 from "../../public/assets/frame-2018777514.svg"; 
  import image from "../../public/assets/image.png"; 
  import Image from 'next/image'

  const theme = createTheme({ 
    palette: { 
      primary: { 
        main: "rgba(0, 141, 255, 1)", 
      }, 
      secondary: { 
        main: "rgba(184, 0, 208, 1)", 
      }, 
      text: { 
        primary: "rgba(28, 28, 28, 1)", 
        secondary: "rgba(94, 94, 93, 1)", 
      }, 
      background: { 
        default: "rgba(253, 253, 253, 1)", 
      }, 
    }, 
    typography: { 
      fontFamily: "Poppins, Helvetica, Arial, sans-serif", 
      h1: { 
        fontSize: "2rem", 
        fontWeight: 600, 
      }, 
      h2: { 
        fontSize: "1.5rem", 
        fontWeight: 500, 
      }, 
      body1: { 
        fontSize: "1rem", 
        fontWeight: 400, 
      }, 
      button: { 
        fontSize: "0.875rem", 
        fontWeight: 700, 
      }, 
    }, 
  }); 
  
  const SignIn = () => { 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(""); 
  
    const handleSubmit = (event) => { 
      event.preventDefault(); 
      if (!email || !password) { 
        setError("Both fields are required."); 
      } else { 
        setError(""); 
        // Handle sign in logic here
      } 
    }; 
  
    return ( 
      <MuiThemeProvider theme={theme}> 
        <CssBaseline /> 
        <Container 
          maxWidth="lg" 
          sx={{ height: "100vh", display: "flex", alignItems: "center" }} 
        > 
          <Grid container spacing={2}> 
            <Grid 
              item="true" 
              xs={12} 
              md={6} 
              sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} 
            > 
              <Box sx={{ mb: 4 }}> 
                <Image src={"/assets/frame-2018777514.svg"} alt="Frame" width="64" height="64" unoptimized /> 
                <Typography variant="h2" color="primary"> 
                  Administrator 
                </Typography> 
              </Box> 
              <Typography variant="h1" gutterBottom> 
                Sign in 
              </Typography> 
              <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}> 
                <TextField 
                  fullWidth 
                  margin="normal" 
                  variant="outlined" 
                  label="Email Address *" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  error={!!error} 
                  helperText={error} 
                /> 
                <TextField 
                  fullWidth 
                  margin="normal" 
                  variant="outlined" 
                  label="Password *" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  error={!!error} 
                  helperText={error} 
                /> 
                <Link href="#" variant="body2" color="primary"> 
                  Forgot Password? 
                </Link> 
                <Button 
                  fullWidth 
                  variant="contained" 
                  color="primary" 
                  sx={{ 
                    mt: 3, 
                    mb: 2, 
                    borderRadius: "30px", 
                    background: "linear-gradient(180deg, rgba(175,12,211,1) 0%, rgba(24,128,250,1) 100%)" 
                  }} 
                > 
                  SIGN IN 
                </Button> 
              </Box> 
              <Typography variant="body2" align="center"> 
                Don&#39;t you have an account?{" "} 
                <Link href="#" color="primary"> 
                  Sign up 
                </Link> 
              </Typography> 
            </Grid> 
            <Grid 
              item="true" 
              xs={12} 
              md={6} 
              sx={{ 
                position: "relative", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }} 
            > 
              <Box 
                sx={{ 
                  width: "100%", 
                  height: "100%", 
                  backgroundImage: `url(${image})`, 
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  borderRadius: "22px", 
                  position: "relative" 
                }} 
              > 
                <Typography 
                  variant="h1" 
                  sx={{ 
                    position: "absolute", 
                    top: "20%", 
                    left: "10%", 
                    color: "white", 
                    fontSize: "2.5rem", 
                    fontWeight: 400 
                  }} 
                > 
                  Unified Solution <br /> 
                  for Data Transport 
                </Typography> 
                <Box 
                  sx={{ 
                    position: "absolute", 
                    bottom: "5%", 
                    left: "50%", 
                    transform: "translateX(-50%)", 
                    display: "flex", 
                    gap: "8px" 
                  }} 
                > 
                  <Box 
                    sx={{ 
                      width: "8px", 
                      height: "8px", 
                      backgroundColor: "white", 
                      borderRadius: "50%" 
                    }} 
                  /> 
                  <Box 
                    sx={{ 
                      width: "8px", 
                      height: "8px", 
                      backgroundColor: "rgba(217, 217, 217, 0.3)", 
                      borderRadius: "50%" 
                    }} 
                  /> 
                  <Box 
                    sx={{ 
                      width: "8px", 
                      height: "8px", 
                      backgroundColor: "rgba(217, 217, 217, 0.3)", 
                      borderRadius: "50%" 
                    }} 
                  /> 
                </Box> 
              </Box> 
            </Grid> 
          </Grid> 
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              position: "fixed", 
              bottom: "16px", 
              left: "50%", 
              transform: "translateX(-50%)", 
              color: "rgba(94, 94, 93, 1)" 
            }} 
          > 
            © 2024 All right reserved 
          </Typography> 
        </Container> 
      </MuiThemeProvider> 
    ); 
  }; 
  
  export default SignIn;  