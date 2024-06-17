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
        <About_me/>
        <Projects/>
        <div className="h-screen">
          <div className="h-dvh">
            ...
          </div>
        </div>
      </Container>
    </ThemeProvider>

  )
}

export default Page;


