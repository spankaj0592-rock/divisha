import React from 'react'
import './Navbar.css'
import logo from '../../images/white-logo.png'

const Navbar = () => {
  


  return (
    <header class="main-header header-sticky header-sticky-smart header-style-01 header-float text-uppercase ">
    <div class="header-wrapper sticky-area">
      <div class="container container-1720">
        <nav class="navbar navbar-expand-xl">
          <div class="header-mobile d-flex d-xl-none flex-fill justify-content-between align-items-center">
            <div class="navbar-toggler toggle-icon collapsed">
              <span></span>
            </div>
            <a class="navbar-brand navbar-brand-mobile" href="/">
              <img src={logo} width="60" height="60" alt="Startupz World"/>
            </a>
            <a class="mobile-button-search" data-gtf-mfp="true" data-mfp-options="{&quot;type&quot;:&quot;inline&quot;,&quot;mainClass&quot;:&quot;mfp-move-from-top mfp-align-top search-popup-bg&quot;,&quot;closeOnBgClick&quot;:false,&quot;showCloseBtn&quot;:false}" href="/#search-popup">
              <i class="far fa-search"></i>
            </a>
          </div>
          <div class="collapse navbar-collapse " id="navbar-main-menu">
            <a class="navbar-brand d-none d-xl-block mr-auto" href="/">
              <img src={logo} width="60" height="60" alt="Startupz World"/>
            </a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/startup">Startup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/investor">Investor</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about-us">About Us</a>
              </li>
            </ul>
            <div class="header-customize justify-content-end align-items-center d-none d-xl-flex">
              <div class="header-customize-item">
                <a class="link" data-gtf-mfp="true" data-mfp-options="{&quot;type&quot;:&quot;inline&quot;}" href="/startup/login">
                  <span class="fas fa-user-circle pr-2"></span>Log In </a>
              </div>
              <div class="header-customize-item button">
                <a class="btn btn-primary btn-icon-right" href="/startup/register">Add Listing <i class="far fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Navbar