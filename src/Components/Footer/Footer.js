import React from 'react'
import './footer.css'
import logo from '../../images/white-logo.png'

const Footer = () => {
  return (
    
    <footer class="main-footer main-footer-style-01 pt-12 pb-8 bg-pattern-01">
    <div class="footer-second">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-4 col-lg-3 mb-6 mb-lg-0">
            <div class="mb-8">
              <img src="/images/white-logo.png" width="100" height="100" alt="Thedir"/>
            </div>
            <div class="mb-7">
              <p class="mb-0">101, Relcon Enclave, NH-48 <br/>Surat, Gujarat <br/>India - 394325 </p>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-3 mb-6 mb-lg-0">
            <div class="font-size-md font-weight-semibold text-dark mb-4">Company</div>
            <ul class="list-group list-group-flush list-group-borderless">
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/about-us">About Us</a>
              </li>
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/contact-us">Contact Us</a>
              </li>
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-3 mb-6 mb-lg-0">
            <div class="font-size-md font-weight-semibold text-dark mb-4">Quick Links</div>
            <ul class="list-group list-group-flush list-group-borderless">
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/policy/community-guidelines">Community Guidelines</a>
              </li>
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/policy/privacy">Privacy Policy</a>
              </li>
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/policy/termsofuse">Terms Of Use</a>
              </li>
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/policy/cancellation-refund">Cancellation &amp; Refund</a>
              </li>
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/policy/shipping-and-exchange">Shipping &amp; Exchange</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-3 mb-6 mb-lg-0">
            <div class="font-size-md font-weight-semibold text-dark mb-4">FAQs</div>
            <ul class="list-group list-group-flush list-group-borderless">
              <li class="list-group-item px-0 lh-1625 bg-transparent py-1">
                <a class="link-hover-secondary-primary" href="/faqs/startup">Startup FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-last mt-8 mt-md-11">
      <div class="container">
        <div class="footer-last-container position-relative">
          <div class="row align-items-center">
            <div class="col-lg-4 mb-3 mb-lg-0">
              <div class="social-icon text-dark">
                <ul class="list-inline">
                  <li class="list-inline-item mr-5">
                    <a target="_blank" title="Twitter" href="">
                      <i class="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li class="list-inline-item mr-5">
                    <a target="_blank" title="Facebook" href="">
                      <i class="fab fa-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li class="list-inline-item mr-5">
                    <a target="_blank" title="Instagram" href="">
                      <i class="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 mb-3 mb-lg-0">
              <div>©
                {/* <!-- -->2023
                <!-- --> */}
                <a class="link-hover-dark-primary font-weight-semibold" href="/">StartupzWorld,</a>
                {/* <!-- -->All Rights Resevered. */}
              </div>
            </div>
            <div class="back-top text-left text-lg-right gtf-back-to-top">
              <a href="" class="link-hover-secondary-primary">
                <i class="fal fa-arrow-up"></i>
                <span>Back To Top</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>       
       
  )
}

export default Footer