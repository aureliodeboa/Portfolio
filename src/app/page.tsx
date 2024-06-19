"use client"
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/sections/Profile";
import '../i18nify';

import { ThemeProvider } from "@/contexts/ThemeContext";
import { About_me } from "@/components/sections/About-me";
import { Projects } from "@/components/sections/Projects";




const Page = () =>{
  return(
    <ThemeProvider>
      <Container>
        <Navbar/>
        <Profile/>
        <Projects/>
        <About_me/>
      
      </Container>
    </ThemeProvider>

  )
}

export default Page;


