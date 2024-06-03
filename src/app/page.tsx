"use client"
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () =>{
  return(
    <ThemeProvider>
      <Container>
        <Navbar/>
        <h1>...</h1>
      </Container>

    </ThemeProvider>

  )
}

export default Page;


