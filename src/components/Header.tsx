'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Hide preloader when page is loaded
    const handleLoad = () => {
      setIsLoading(false)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback timer
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timer)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Preloader */}
      <div className="preloader" style={{ 
        display: isLoading ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="loader">
          <div className="pre-shadow"></div>
          <div className="pre-box"></div>
        </div>
      </div>

      {/* Header Section */}
      <header className="header-area">
        <div className="header-top-bar top-bar-one dark-black-bg">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-12 col-md-12 col-6">
                <div className="top-bar-left d-flex align-items-center">
                  <span className="text">Welcome to Bharat Agro Oil - Premium Edible Oils Since 1978</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-6">
                <div className="top-bar-right">
                  <span className="text"><i className="far fa-clock"></i>Opening Hours : Monday - Saturday, 08:00 am - 06:00pm</span>
                  <ul className="social-link">
                    <li><a href="https://www.facebook.com/bharatagrooil" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/bharatagrooil/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="header-middle">
          <div className="container-1350">
            <div className="row align-items-center">
              <div className="col-xl-4 d-xl-block d-lg-none">
                <div className="site-branding d-lg-block d-none">
                  <Link href="/" className="brand-logo">
                    <img 
                      src="/assets/images/logo/new-logo.png" 
                      alt="Bharat Agro Oil Logo"
                      style={{maxWidth: '230px', height: 'auto'}}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-12">
                <div className="contact-information">
                  <div className="information-item_one d-flex">
                    <div className="icon">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    <div className="info">
                      <h5 className="mb-1">Our Location</h5>
                      <p>Modinagar, Ghaziabad, UP</p>
                    </div>
                  </div>
                  <div className="information-item_one d-flex">
                    <div className="icon">
                      <i className="flaticon-email"></i>
                    </div>
                    <div className="info">
                      <h5 className="mb-1">Email Us</h5>
                      <p><a href="mailto:bharatagrooil@yahoo.in">bharatagrooil@yahoo.in</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="header-navigation navigation-one">
          <div className="nav-overlay"></div>
          <div className="container-1350">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/" className="brand-logo">
                  <img 
                    src="/assets/images/logo/new-logo.png" 
                    alt="Bharat Agro Oil Logo" 
                    style={{maxWidth: '180px', height: 'auto'}}
                  />
                </Link>
              </div>
              <div className="nav-inner-menu">
                <div className="nav-menu">
                  {/* Mobile Logo */}
                  <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                    <Link href="/" className="brand-logo">
                      <img 
                        src="/assets/images/logo/new-logo.png" 
                        alt="Bharat Agro Oil Logo" 
                        style={{maxWidth: '150px', height: 'auto'}}
                      />
                    </Link>
                  </div>
                         {/* Main Menu */}
                         <nav className="main-menu">
                           <ul>
                             <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                             <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                             <li><Link href="/products" className={pathname === '/products' ? 'active' : ''}>Our Products</Link></li>
                             <li><Link href="/recipes" className={pathname === '/recipes' ? 'active' : ''}>Recipes</Link></li>
                             <li><Link href="/services" className={pathname === '/services' ? 'active' : ''}>Service page</Link></li>
                             <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
                           </ul>
                         </nav>
                </div>
                {/* Nav Right Item */}
                <div className="nav-right-item">
                  <div className="navbar-toggler" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
