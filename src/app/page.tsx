"use client"
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/sections/Profile";
import '../i18nify';

import { ThemeProvider } from "@/contexts/ThemeContext";



const Page = () =>{
  return(
    <ThemeProvider>
      <Container>
        <Navbar/>
        <Profile/>
      </Container>
    </ThemeProvider>

  )
}

export default Page;


