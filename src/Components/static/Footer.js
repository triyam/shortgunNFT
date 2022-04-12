import React from 'react'
import '../../Assets/css/footer.css'
import {BsFacebook, BsLinkedin} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Shortgun.com <i>Shortcoin innovation strategy .</i> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#/">NFT</a></li>
              <li><a href="#/">UI Design</a></li>
              <li><a href="#/">MongoDB</a></li>
              <li><a href="#/">Blockchain</a></li>
              <li><a href="#/">React JS</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#/">About Us</a></li>
              <li><a href="#/">Contact Us</a></li>
              <li><a href="#/">Contribute</a></li>
              <li><a href="#/">Privacy Policy</a></li>
              <li><a href="#/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#a">Shortgun</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#a"><BsFacebook/></a></li>
              <li><a class="twitter" href="#a"><AiFillTwitterCircle/></a></li>
              <li><a class="instagram" href="#a"><AiFillInstagram/></a></li>
              <li><a class="linkedin" href="#a"><BsLinkedin/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer