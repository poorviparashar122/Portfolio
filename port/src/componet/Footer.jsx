
import Aos from 'aos';
import "../App.css"
import 'aos/dist/aos.css';
 export const Footer = ()=>{

    return(
        <>
        <footer class="footer section" id="contact">
      <h2 class="section-title">Get in touch</h2>
      <p class="footer-title">Poorvi Parashar</p>
      <div class="footer-social">
        <a
          href="https://www.linkedin.com/in/poorvi-parashar-2000aa213/"
          target="_blank"
          class="footer-icon"
          ><i class="bx bxl-linkedin">
            <br />
            LinkedIn</i
          ></a
        >
       
      
        <a
          href="mailto:poorviparasharpm@gmail.com"
          target="_blank"
          class="footer-icon"
          ><i class="bx bx-mail-send">
            <br />
            E-mail</i
          ></a
        >
        <a href="tel:+919259647248" target="_blank" class="footer-icon"
          ><i class="bx bx-phone">.
            <br />
            Phone
            </i
          ></a
        >
      </div>
      <p>&#169; 2020 copyright all right reserved</p>
    </footer>
        </>
    )
 }