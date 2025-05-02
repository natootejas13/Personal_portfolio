'use client'
import Image from "next/image";
import HomePage from "../../components/homepage";
import Navbar from "../../components/navbar";
import AboutMe from "../../components/aboutme";
import Services from "../../components/services";
import Work from "../../components/work";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";

export default function Home() {

  const[darkTheme,setDarkTheme] = useState(true);

  useEffect(()=>{
    if(darkTheme){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[darkTheme])


  return (
    <div>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <HomePage/>
      <AboutMe darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Services/>
      <Work darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Contact darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Footer/>

    </div>
  );
}
