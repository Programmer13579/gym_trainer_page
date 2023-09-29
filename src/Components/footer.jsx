import React from 'react'
import "../Styles/footer.css"
import {FaFacebook} from 'react-icons/fa';    
import {BsInstagram} from 'react-icons/bs';     
import {BiLogoGmail} from 'react-icons/bi';   
import {BsWhatsapp} from 'react-icons/bs';                                                         
import {BsYoutube} from 'react-icons/bs';



const footer = () => {
    return (
        <footer class="footer">
        <div> <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> ¿Quien soy? </span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
          ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
       
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
         <p>Aguilares, Tucuman</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+54)  3865 266434</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#"> manumborquez@gmail.com</a></p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
     <center><h1> <span>  SDN GYM </span></h1></center>
        <div class="icons">
          <center>
           <a href="https://www.facebook.com/manuel.borquez.9638?locale=es_LA"><FaFacebook/></a>
          <a href="https://www.instagram.com/sdngym15/"><BsInstagram/></a>
          <a href="#"><BiLogoGmail /></a>
          <a href="https://wa.me/+5493865266434"><BsWhatsapp/></a>
          <a href="#"><BsYoutube/></a>
          </center>
        </div>
       <center> <p class="name"><span> Developed by | Ligth & Soft &copy; 2023  |</span></p> </center>
      </div>       
        </div>

        </footer>
    )
}

export default footer
