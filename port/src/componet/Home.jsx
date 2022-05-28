
import React, {useEffect } from 'react';

import Aos from 'aos';
import "../App.css"
import 'aos/dist/aos.css';

export const Home = ()=>{
    useEffect(()=>{
        Aos.init({
         duration: 3000,
        })
       },[])

    return(
    <>
      <div>
      <div className="" data-aos="fade-down">

<section class="home bd-grid section" id="home">
    <div class="home-data">
      <h2 class="home-title">
        Hi 👋,<br />I'am <span class="home-title-color">Poorvi</span><br />
        MERN Developer
      </h2>

      <a
        href="https://docs.google.com/document/d/1FD4zsOOXEL5pYIDgiX7n_IQ313sJ1nFWT7oNyLncNXw/edit?usp=sharing"
        target="_blank"
        class="button"
        >Resume</a
      >
    </div>

    <div class="home-social">
      <a
        href="https://www.linkedin.com/in/poorvi-parashar-2000aa213/"
        target="_blank"
        class="home-social-icon"
        ><i class="bx bxl-linkedin"></i
      ></a>
      <a
        href="https://github.com/poorviparashar122"
        target="_blank"
        class="home-social-icon"
        ><i class="bx bxl-github"></i
      ></a>
    </div>

    <div class="home-img">
      <img  className='poorviimg' src="https://avatars.githubusercontent.com/u/99714520?s=400&u=6aefa8a4d147f4b6e74725081955699df3fe87d4&v=4" alt="" />
    </div>
  </section>

</div> 
      </div>
    </>)

}