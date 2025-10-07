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
        display: isLoading ? 'flex' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        zIndex: 9999,
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
          <div className="nav-overlay" onClick={toggleMenu} style={{display: isMenuOpen ? 'block' : 'none'}}></div>
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
          
          {/* Mobile Menu Sidebar */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} style={{
            position: 'fixed',
            top: '0',
            left: isMenuOpen ? '0' : '-100%',
            width: '300px',
            height: '100vh',
            backgroundColor: '#fff',
            zIndex: '9999',
            transition: 'left 0.3s ease',
            boxShadow: '5px 0 15px rgba(0,0,0,0.1)',
            overflowY: 'auto'
          }}>
            <div style={{padding: '20px'}}>
              {/* Mobile Logo */}
              <div className="mobile-logo mb-30 text-center">
                <Link href="/" className="brand-logo" onClick={toggleMenu}>
                  <img 
                    src="/assets/images/logo/new-logo.png" 
                    alt="Bharat Agro Oil Logo" 
                    style={{maxWidth: '150px', height: 'auto'}}
                  />
                </Link>
              </div>
              
              {/* Mobile Menu Items */}
              <nav className="mobile-main-menu">
                <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                  <li style={{marginBottom: '15px'}}>
                    <Link 
                      href="/" 
                      className={pathname === '/' ? 'active' : ''} 
                      onClick={toggleMenu}
                      style={{
                        display: 'block',
                        padding: '12px 15px',
                        textDecoration: 'none',
                        color: pathname === '/' ? '#ffc107' : '#333',
                        fontSize: '16px',
                        fontWeight: pathname === '/' ? 'bold' : 'normal',
                        borderLeft: pathname === '/' ? '3px solid #ffc107' : '3px solid transparent',
                        backgroundColor: pathname === '/' ? '#fff9e6' : 'transparent',
                        borderRadius: '5px'
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{marginBottom: '15px'}}>
                    <Link 
                      href="/about" 
                      className={pathname === '/about' ? 'active' : ''} 
                      onClick={toggleMenu}
                      style={{
                        display: 'block',
                        padding: '12px 15px',
                        textDecoration: 'none',
                        color: pathname === '/about' ? '#ffc107' : '#333',
                        fontSize: '16px',
                        fontWeight: pathname === '/about' ? 'bold' : 'normal',
                        borderLeft: pathname === '/about' ? '3px solid #ffc107' : '3px solid transparent',
                        backgroundColor: pathname === '/about' ? '#fff9e6' : 'transparent',
                        borderRadius: '5px'
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li style={{marginBottom: '15px'}}>
                    <Link 
                      href="/products" 
                      className={pathname === '/products' ? 'active' : ''} 
                      onClick={toggleMenu}
                      style={{
                        display: 'block',
                        padding: '12px 15px',
                        textDecoration: 'none',
                        color: pathname === '/products' ? '#ffc107' : '#333',
                        fontSize: '16px',
                        fontWeight: pathname === '/products' ? 'bold' : 'normal',
                        borderLeft: pathname === '/products' ? '3px solid #ffc107' : '3px solid transparent',
                        backgroundColor: pathname === '/products' ? '#fff9e6' : 'transparent',
                        borderRadius: '5px'
                      }}
                    >
                      Our Products
                    </Link>
                  </li>
                  <li style={{marginBottom: '15px'}}>
                    <Link 
                      href="/recipes" 
                      className={pathname === '/recipes' ? 'active' : ''} 
                      onClick={toggleMenu}
                      style={{
                        display: 'block',
                        padding: '12px 15px',
                        textDecoration: 'none',
                        color: pathname === '/recipes' ? '#ffc107' : '#333',
                        fontSize: '16px',
                        fontWeight: pathname === '/recipes' ? 'bold' : 'normal',
                        borderLeft: pathname === '/recipes' ? '3px solid #ffc107' : '3px solid transparent',
                        backgroundColor: pathname === '/recipes' ? '#fff9e6' : 'transparent',
                        borderRadius: '5px'
                      }}
                    >
                      Recipes
                    </Link>
                  </li>
                  <li style={{marginBottom: '15px'}}>
                    <Link 
                      href="/services" 
                      className={pathname === '/services' ? 'active' : ''} 
                      onClick={toggleMenu}
                      style={{
                        display: 'block',
                        padding: '12px 15px',
                        textDecoration: 'none',
                        color: pathname === '/services' ? '#ffc107' : '#333',
                        fontSize: '16px',
                        fontWeight: pathname === '/services' ? 'bold' : 'normal',
                        borderLeft: pathname === '/services' ? '3px solid #ffc107' : '3px solid transparent',
                        backgroundColor: pathname === '/services' ? '#fff9e6' : 'transparent',
                        borderRadius: '5px'
                      }}
                    >
                      Service page
                    </Link>
                  </li>
                  <li style={{marginBottom: '15px'}}>
                    <Link 
                      href="/contact" 
                      className={pathname === '/contact' ? 'active' : ''} 
                      onClick={toggleMenu}
                      style={{
                        display: 'block',
                        padding: '12px 15px',
                        textDecoration: 'none',
                        color: pathname === '/contact' ? '#ffc107' : '#333',
                        fontSize: '16px',
                        fontWeight: pathname === '/contact' ? 'bold' : 'normal',
                        borderLeft: pathname === '/contact' ? '3px solid #ffc107' : '3px solid transparent',
                        backgroundColor: pathname === '/contact' ? '#fff9e6' : 'transparent',
                        borderRadius: '5px'
                      }}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
