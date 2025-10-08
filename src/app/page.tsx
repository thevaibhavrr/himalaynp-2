'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'
import PartnersSection from '@/components/PartnersSection'
import ProductGallery from '@/components/ProductGallery'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { useEffect } from 'react'

// Type declarations for jQuery and Slick
interface JQuery {
  slick: (options?: Record<string, unknown> | string) => JQuery;
  hasClass: (className: string) => boolean;
  fn: {
    slick: Record<string, unknown>;
  };
}

interface JQueryFunction {
  (selector: string): JQuery;
  fn: {
    slick: Record<string, unknown>;
  };
}

declare global {
  interface Window {
    $: JQueryFunction;
    jQuery: JQueryFunction;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize slider after component mounts
    const initializeSlider = () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.slick) {
        // Destroy existing slider if it exists
        if (window.$('.hero-slider-one').hasClass('slick-initialized')) {
          window.$('.hero-slider-one').slick('unslick')
        }
        
        // Initialize the slider
        window.$('.hero-slider-one').slick({
          dots: true,
          arrows: true,
          infinite: true,
          speed: 400,
          fade: true,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-arrow prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="slick-arrow next"><i class="fas fa-chevron-right"></i></button>',
          responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
        })
        
        console.log('Hero slider initialized successfully')
      } else {
        // Fallback: If jQuery/Slick is not available, show first slide
        console.log('Slider initialization failed, showing first slide as fallback')
        const slides = document.querySelectorAll('.single-slider')
        if (slides.length > 0) {
          slides.forEach((slide, index) => {
            if (index === 0) {
              (slide as HTMLElement).style.display = 'block'
            } else {
              (slide as HTMLElement).style.display = 'none'
            }
          })
        }
      }
    }

    // Try multiple times to initialize slider
    let retryCount = 0
    const maxRetries = 10
    
    const tryInitialize = () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.slick) {
        initializeSlider()
      } else if (retryCount < maxRetries) {
        retryCount++
        // Retry after 200ms
        setTimeout(tryInitialize, 200)
      } else {
        console.log('Max retries reached, using fallback')
        const slides = document.querySelectorAll('.single-slider')
        if (slides.length > 0) {
          slides.forEach((slide, index) => {
            if (index === 0) {
              (slide as HTMLElement).style.display = 'block'
            } else {
              (slide as HTMLElement).style.display = 'none'
            }
          })
        }
      }
    }

    // Initialize slider after a short delay to ensure DOM is ready
    const timer = setTimeout(tryInitialize, 100)
    
    return () => {
      clearTimeout(timer)
      // Cleanup slider on unmount
      if (typeof window !== 'undefined' && window.$ && window.$('.hero-slider-one').hasClass('slick-initialized')) {
        window.$('.hero-slider-one').slick('unslick')
      }
    }
  }, [])

  // Add global jQuery type declaration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery
    }
  }, [])
  return (
    <>
      <style jsx>{`
        @media (max-width: 500px) {
          .mobile-gap-5 {
            gap: 10px !important;
          }
        }
        @media (min-width: 501px) {
          .mobile-gap-5 {
            gap: 0 !important;
          }
        }
        
        /* Enhanced hero content animation */
        .hero-content h1 {
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        
        .hero-content p {
          animation: fadeInUp 1s ease-out 0.4s both;
        }
        
        .hero-buttons {
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        /* Improved mobile responsiveness for hero */
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            gap: 15px !important;
          }
          
          .hero-buttons .main-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
      <Header />
      {/* Hero Section */}
      <section className="hero-area-one">
        <div className="hero-slider-one">
          <div className="single-slider homa_page_banner" style={{minHeight: '100vh', position: 'relative'}}>
            <div className="image-layer bg_cover" style={{
              backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}></div>
          </div>
          <div className="single-slider homa_page_banner" style={{minHeight: '100vh'}}>
            <div className="image-layer bg_cover" style={{
              backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b6f3b58-0e49-41b3-b041-2a95c525b2b9.__CR0,0,970,600_PT0_SX970_V1___.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}></div>
          </div>
          <div className="single-slider homa_page_banner" style={{minHeight: '100vh'}}>
            <div className="image-layer bg_cover" style={{
              backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <section className="service-one dark-black-bg p-130 pb-25 p-r z-1 mb-100" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                <span className="sub-title" style={{
                  fontSize: '18px',
                  color: '#ffc107',
                  fontWeight: '600',
                  marginBottom: '15px',
                  display: 'inline-block'
                }}>
Our Premium Products 
                </span>
                <h2 style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: '1.3'
                }}>
                  Premium Quality Edible Oils For Healthy Living
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#ccc',
                  marginTop: '20px',
                  maxWidth: '600px',
                  margin: '20px auto 0'
                }}>
                  Discover our range of pure, natural oils crafted with traditional methods and modern quality standards
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-100 g-4 mobile-gap-5">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="service-box text-center mb-30 wow fadeInUp" style={{
                padding: '30px 20px',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 193, 7, 0.3)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
                <div className="icon" style={{marginBottom: '20px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
                  }}>
                    <i className="fas fa-seedling" style={{fontSize: '28px', color: 'white'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 className="title" style={{fontSize: '16px', lineHeight: '1.4', color: 'white'}}>
                    <Link href="/products" style={{color: 'white', textDecoration: 'none'}}>
                      Mustard Oil<br />
                      <span style={{color: '#ffc107', fontSize: '14px'}}>Pure & Natural</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="service-box text-center mb-30 wow fadeInUp" style={{
                padding: '30px 20px',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 193, 7, 0.3)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
                <div className="icon" style={{marginBottom: '20px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
                  }}>
                    <i className="fas fa-heart" style={{fontSize: '28px', color: 'white'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 className="title" style={{fontSize: '16px', lineHeight: '1.4', color: 'white'}}>
                    <Link href="/products" style={{color: 'white', textDecoration: 'none'}}>
                      Soybean Oil<br />
                      <span style={{color: '#ffc107', fontSize: '14px'}}>Heart Healthy</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="service-box text-center mb-30 wow fadeInUp" style={{
                padding: '30px 20px',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 193, 7, 0.3)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
                <div className="icon" style={{marginBottom: '20px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
                  }}>
                    <i className="fas fa-sun" style={{fontSize: '28px', color: 'white'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 className="title" style={{fontSize: '16px', lineHeight: '1.4', color: 'white'}}>
                    <Link href="/products" style={{color: 'white', textDecoration: 'none'}}>
                      Sunflower Oil<br />
                      <span style={{color: '#ffc107', fontSize: '14px'}}>Light & Healthy</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="service-box text-center mb-30 wow fadeInUp" style={{
                padding: '30px 20px',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 193, 7, 0.3)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
                <div className="icon" style={{marginBottom: '20px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
                  }}>
                    <i className="fas fa-seedling" style={{fontSize: '28px', color: 'white'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 className="title" style={{fontSize: '16px', lineHeight: '1.4', color: 'white'}}>
                    <Link href="/products" style={{color: 'white', textDecoration: 'none'}}>
                      Groundnut Oil<br />
                      <span style={{color: '#ffc107', fontSize: '14px'}}>Rich Flavor</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="service-box text-center mb-30 wow fadeInUp" style={{
                padding: '30px 20px',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 193, 7, 0.3)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
                <div className="icon" style={{marginBottom: '20px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
                  }}>
                    <i className="fas fa-balance-scale" style={{fontSize: '28px', color: 'white'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 className="title" style={{fontSize: '16px', lineHeight: '1.4', color: 'white'}}>
                    <Link href="/products" style={{color: 'white', textDecoration: 'none'}}>
                      Blended Oils<br />
                      <span style={{color: '#ffc107', fontSize: '14px'}}>Perfect Balance</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="service-box text-center mb-30 wow fadeInUp" style={{
                padding: '30px 20px',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 193, 7, 0.3)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
                <div className="icon" style={{marginBottom: '20px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(255, 193, 7, 0.4)'
                  }}>
                    <i className="fas fa-boxes" style={{fontSize: '28px', color: 'white'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 className="title" style={{fontSize: '16px', lineHeight: '1.4', color: 'white'}}>
                    <Link href="/products" style={{color: 'white', textDecoration: 'none'}}>
                      All Products<br />
                      <span style={{color: '#ffc107', fontSize: '14px'}}>Complete Range</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="play-one_content-box bg_cover wow fadeInDown" style={{
                backgroundImage: "url('https://t4.ftcdn.net/jpg/01/04/09/67/360_F_104096754_n7JbqBjagQlM5RJ43YRftGTQ9s7D2evg.jpg')",
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
                  zIndex: 1
                }}></div>
                <a href="https://youtu.be/UTN60h5L5rc?si=3wLPaNwXeHiRdsO3" className="video-popup" style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(255, 193, 7, 0.5)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 193, 7, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 193, 7, 0.5)';
                }}>
                  <i className="fas fa-play" style={{fontSize: '24px', color: 'white', marginLeft: '4px'}}></i>
                </a>
                <div className="video-content" style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  marginLeft: '30px'
                }}>
                  <h4 style={{color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px'}}>Our Production Process</h4>
                  <p style={{color: 'white', fontSize: '16px', opacity: 0.9}}>See how we make pure, natural oils</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ProductGallery />

      {/* Counter Section */}
      <section className="fun-fact">
        <div className="big-text mb-105 wow fadeInUp"><h2>Our Achievements</h2></div>
        <div className="container">
          <div className="counter-wrap-one wow fadeInDown">
            <div className="counter-inner-box">
              <div className="row g-4 mobile-gap-5">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter-item">
                  <div className="counter-inner" style={{
                    padding: '25px 20px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    marginBottom: '25px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#fff'
                  }}>
                    <div className="text">
                      <h2 className="number" style={{fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '10px'}}>
                        <span className="count">46</span>+
                      </h2>
                      <p style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', marginBottom: '0'}}>Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter-item">
                  <div className="counter-inner" style={{
                    padding: '25px 20px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    marginBottom: '25px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#fff'
                  }}>
                    <div className="text">
                      <h2 className="number" style={{fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '10px'}}>
                        <span className="count">2000</span>+
                      </h2>
                      <p style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', marginBottom: '0', whiteSpace: 'nowrap'}}>MT Monthly Production</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter-item">
                  <div className="counter-inner" style={{
                    padding: '25px 20px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    marginBottom: '25px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#fff'
                  }}>
                    <div className="text">
                      <h2 className="number" style={{fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '10px'}}>
                        <span className="count">500</span>+
                      </h2>
                      <p style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', marginBottom: '0'}}>Happy Distributors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter-item">
                  <div className="counter-inner" style={{
                    padding: '25px 20px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    marginBottom: '25px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#fff'
                  }}>
                    <div className="text">
                      <h2 className="number" style={{fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '10px'}}>
                        <span className="count">5</span>+
                      </h2>
                      <p style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', marginBottom: '0'}}>States Coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="popular-service p-r z-1 pt-80 pb-80" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title" style={{fontSize: '16px', color: '#ffc107', fontWeight: '600'}}>
                  Why Choose Us 
                </span>
                <h2 style={{fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 'bold', color: '#333'}}>What Makes Our Edible Oils Special</h2>
                <p style={{fontSize: '16px', color: '#666', marginTop: '15px'}}>Discover the unique qualities that set our oils apart from the rest</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card wow fadeInUp" style={{
                background: 'linear-gradient(135deg, #fef7e0 0%, #ffffff 100%)',
                padding: '25px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(238, 206, 56, 0.15)',
                textAlign: 'center',
                height: 'auto',
                transition: 'all 0.3s ease',
                border: '2px solid #eece38',
                marginBottom: '25px'
              }}>
                <div className="icon mb-20" style={{marginBottom: '15px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #eece38, #d4af37)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(238, 206, 56, 0.3)'
                  }}>
                    <i className="fas fa-seedling" style={{fontSize: '28px', color: '#fff'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                    <Link href="/services" style={{color: '#333', textDecoration: 'none'}}>Traditional Process</Link>
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '0'}}>Using traditional Kolhu extraction for pure, natural oil that preserves authentic flavors and nutrients.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card wow fadeInUp" style={{
                background: 'linear-gradient(135deg, #fef7e0 0%, #ffffff 100%)',
                padding: '25px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(238, 206, 56, 0.15)',
                textAlign: 'center',
                height: 'auto',
                transition: 'all 0.3s ease',
                border: '2px solid #eece38',
                marginBottom: '25px'
              }}>
                <div className="icon mb-20" style={{marginBottom: '15px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #eece38, #d4af37)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(238, 206, 56, 0.3)'
                  }}>
                    <i className="fas fa-filter" style={{fontSize: '28px', color: '#fff'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                    <Link href="/services" style={{color: '#333', textDecoration: 'none'}}>Natural Filtration</Link>
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '0'}}>No chemical refining - naturally filtered for health and purity without compromising nutritional value.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card wow fadeInUp" style={{
                background: 'linear-gradient(135deg, #fef7e0 0%, #ffffff 100%)',
                padding: '25px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(238, 206, 56, 0.15)',
                textAlign: 'center',
                height: 'auto',
                transition: 'all 0.3s ease',
                border: '2px solid #eece38',
                marginBottom: '25px'
              }}>
                <div className="icon mb-20" style={{marginBottom: '15px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #eece38, #d4af37)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(238, 206, 56, 0.3)'
                  }}>
                    <i className="fas fa-award" style={{fontSize: '28px', color: '#fff'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                    <Link href="/services" style={{color: '#333', textDecoration: 'none'}}>Premium Quality</Link>
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '0'}}>FSSAI certified with highest quality standards ensuring every drop meets regulatory requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card wow fadeInUp" style={{
                background: 'linear-gradient(135deg, #fef7e0 0%, #ffffff 100%)',
                padding: '25px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(238, 206, 56, 0.15)',
                textAlign: 'center',
                height: 'auto',
                transition: 'all 0.3s ease',
                border: '2px solid #eece38',
                marginBottom: '25px'
              }}>
                <div className="icon mb-20" style={{marginBottom: '15px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #eece38, #d4af37)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(238, 206, 56, 0.3)'
                  }}>
                    <i className="fas fa-heart" style={{fontSize: '28px', color: '#fff'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                    <Link href="/recipes" style={{color: '#333', textDecoration: 'none'}}>Health Benefits</Link>
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '0'}}>Rich in nutrients and essential fatty acids that promote heart health and overall well-being.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card wow fadeInUp" style={{
                background: 'linear-gradient(135deg, #fef7e0 0%, #ffffff 100%)',
                padding: '25px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(238, 206, 56, 0.15)',
                textAlign: 'center',
                height: 'auto',
                transition: 'all 0.3s ease',
                border: '2px solid #eece38',
                marginBottom: '25px'
              }}>
                <div className="icon mb-20" style={{marginBottom: '15px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #eece38, #d4af37)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(238, 206, 56, 0.3)'
                  }}>
                    <i className="fas fa-box" style={{fontSize: '28px', color: '#fff'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                    <Link href="/products" style={{color: '#333', textDecoration: 'none'}}>Advanced Packaging</Link>
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '0'}}>Modern packaging technology to maintain freshness and extend shelf life of premium oils.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature-card wow fadeInUp" style={{
                background: 'linear-gradient(135deg, #fef7e0 0%, #ffffff 100%)',
                padding: '25px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(238, 206, 56, 0.15)',
                textAlign: 'center',
                height: 'auto',
                transition: 'all 0.3s ease',
                border: '2px solid #eece38',
                marginBottom: '25px'
              }}>
                <div className="icon mb-20" style={{marginBottom: '15px'}}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #eece38, #d4af37)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 5px 15px rgba(238, 206, 56, 0.3)'
                  }}>
                    <i className="fas fa-truck" style={{fontSize: '28px', color: '#fff'}}></i>
                  </div>
                </div>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#333'}}>
                    <Link href="/contact" style={{color: '#333', textDecoration: 'none'}}>Wide Distribution</Link>
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '0'}}>Available across multiple states and online platforms for convenient access to premium oils.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Section */}
      <section className="offer-section-one p-r z-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="offer-one_image-box bg_cover mb-50 wow fadeInRight" style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b6f3b58-0e49-41b3-b041-2a95c525b2b9.__CR0,0,970,600_PT0_SX970_V1___.jpg')"}}>
                <div className="experience-box">
                  Trusted Quality & Traditional Methods
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="offer-one_content-box content-box-gap mb-20">
                <div className="section-title text-center mb-20 wow fadeInUp">
                  <span className="sub-title">Our Capabilities</span>
                  <h2>State-of-the-Art Manufacturing Facility</h2>
                </div>
                <p>With a production capacity of 2000 MT per month, we combine traditional extraction methods with modern technology to deliver the finest quality edible oils.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-chart-item text-center mb-30 wow fadeInDown">
                      <div className="chart-circle">
                        <div className="circle" data-donutty data-thickness='5' data-padding='0' data-value='100' data-bg="rgba(255, 255, 255, 0.149)" data-round={false} data-color="#eece38"></div>
                        <h2 className="number">100<span className="sign">%</span></h2>
                      </div>
                      <div className="text">
                        <h5>Natural<br />Filtration</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-chart-item text-center mb-30 wow fadeInUp">
                      <div className="chart-circle">
                        <div className="circle" data-donutty data-thickness='5' data-padding='0' data-value='98' data-bg="rgba(255, 255, 255, 0.149)" data-round={false} data-color="#eece38"></div>
                        <h2 className="number">98<span className="sign">%</span></h2>
                      </div>
                      <div className="text">
                        <h5>Customer<br />Satisfaction</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

     {/* Contact Section - Yellow Theme */}
     <section className="contact-one p-r z-2 bg-white" style={{ padding: '20px 15px' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-md-12">
            <div className="contact-one_content-box wow fadeInLeft" style={{ padding: '30px 20px' }}>
              <div className="contact-wrapper">
                <div className="section-title text-center mb-20">
                  <span className="sub-title">Get In Touch</span>
                  <h2 style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)'}}>Interested in Our Products? Become a Distributor Today!</h2>
                </div>
                <div className="contact-form">
                  <form 
                    id="contactForm" 
                    name="contactForm" 
                    method="post"
                  >
                    <div className="form_group form-group" style={{ marginBottom: '15px' }}>
                      <input 
                        type="text" 
                        className="form_control" 
                        placeholder="Full Name" 
                        id="name" 
                        name="name" 
                        required 
                        style={{ padding: '12px 15px', width: '100%' }}
                      />
                    </div>
                    <div className="form_group form-group" style={{ marginBottom: '15px' }}>
                      <input 
                        type="email" 
                        className="form_control" 
                        placeholder="Email Address" 
                        id="email" 
                        name="email" 
                        required 
                        style={{ padding: '12px 15px', width: '100%' }}
                      />
                    </div>
                    <div className="form_group form-group" style={{ marginBottom: '15px' }}>
                      <input 
                        type="tel" 
                        className="form_control" 
                        placeholder="Phone Number" 
                        id="phone" 
                        name="phone" 
                        required 
                        style={{ padding: '12px 15px', width: '100%' }}
                      />
                    </div>
                    <div className="form_group form-group" style={{ marginBottom: '15px' }}>
                      <input 
                        type="text" 
                        className="form_control" 
                        placeholder="Business Location" 
                        id="location" 
                        name="location" 
                        required 
                        style={{ padding: '12px 15px', width: '100%' }}
                      />
                    </div>
                    <div className="form_group form-group" style={{ marginBottom: '15px' }}>
                      <textarea 
                        className="form_control" 
                        placeholder="Your Message or Business Inquiry" 
                        id="message" 
                        name="message" 
                        required 
                        style={{ padding: '12px 15px', height: '80px', width: '100%' }}
                      />
                    </div>
                    <div className="form_group form-group">
                      <button type="submit" className="main-btn btn-yellow" style={{width: '100%'}}>
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div 
              className="contact-one_information-box bg_cover wow fadeInRight" 
              style={{ backgroundImage: "url('https://companyformationindia.com/images/c.jpg')", padding: '30px 20px', minHeight: '400px' }}
            >
              <div className="information-box">
                <h3 style={{ marginBottom: '15px', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Contact Information</h3>
                <p style={{ marginBottom: '20px', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Get in touch with us for bulk orders, distribution inquiries, or any questions about our products.</p>
                
                <div className="information-item_one d-flex mb-15">
                  <div className="icon" style={{marginRight: '15px', flexShrink: 0}}>
                    <i className="flaticon-placeholder" style={{fontSize: '20px'}}></i>
                  </div>
                  <div className="info">
                    <span className="sub-title mb-1" style={{fontSize: '0.9rem'}}>Factory Address</span>
                    <h5 style={{fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', lineHeight: '1.4'}}>Khasra No. 118 & 120, Sikeda Road Industrial Area, Modinagar 201204, Distt. GZB, UP</h5>
                  </div>
                </div>
                
                <div className="information-item_one d-flex mb-15">
                  <div className="icon" style={{marginRight: '15px', flexShrink: 0}}>
                    <i className="flaticon-email" style={{fontSize: '20px'}}></i>
                  </div>
                  <div className="info">
                    <span className="sub-title mb-1" style={{fontSize: '0.9rem'}}>Email Address</span>
                    <h5 style={{fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'}}>
                      <a href="mailto:bharatagrooil@yahoo.in">bharatagrooil@yahoo.in</a>
                    </h5>
                  </div>
                </div>
                
                <div className="information-item_one d-flex mb-15">
                  <div className="icon" style={{marginRight: '15px', flexShrink: 0}}>
                    <i className="flaticon-phone-call" style={{fontSize: '20px'}}></i>
                  </div>
                  <div className="info">
                    <span className="sub-title mb-1" style={{fontSize: '0.9rem'}}>Phone Number</span>
                    <h5 style={{fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'}}>
                      <a href="tel:+919219450111">+91 9219450111</a>
                    </h5>
                  </div>
                </div>
                
                <div className="information-item_one d-flex mb-15">
                  <div className="icon" style={{marginRight: '15px', flexShrink: 0}}>
                    <i className="fab fa-whatsapp" style={{fontSize: '20px'}}></i>
                  </div>
                  <div className="info">
                    <span className="sub-title mb-1" style={{fontSize: '0.9rem'}}>WhatsApp</span>
                    <h5 style={{fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'}}>
                      <a href="https://wa.me/919219450111" target="_blank" rel="noopener noreferrer">
                        +91 9219450111
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Blog Section */}
      <section className="blog-section p-r z-1 pt-130 pb-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInLeft">
                <span className="sub-title">Health & Recipes</span>
                <h2>Latest Health Tips & Recipes With Our Oils</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="button-box float-lg-right mb-60 wow fadeInRight">
                <Link href="/recipes" className="main-btn bordered-btn bordered-yellow">View All Recipes</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-post-item-one mb-30 wow fadeInLeft">
                <div className="post-thumbnail">
                  <img src="https://asmitaorganicfarm.com/cdn/shop/articles/Feature-Image-2048x1229_6c4890b1-b8b6-420d-a5b2-8dd431f74712.jpg?v=1754292824&width=1100" alt="Health Benefits" />
                </div>
                <div className="entry-content">
                  <Link href="#" className="cat-btn">Health Benefits</Link>
                  <h3 className="title"><Link href="#">Benefits of Using Naturally Filtered Oils for Heart Health</Link></h3>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="far fa-calendar-alt"></i><Link href="#">25 March 2024</Link></span></li>
                      <li><span><i className="far fa-comments"></i><Link href="#">Comment (12)</Link></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-post-item-one mb-30 wow fadeInRight">
                <div className="post-thumbnail">
                  <img src="https://www.bhushanoils.com/wp-content/uploads/2024/12/Bhushan_Blog-Banner-oil-scaled.jpg" alt="Cooking Tips" />
                </div>
                <div className="entry-content">
                  <Link href="#" className="cat-btn">Cooking Tips</Link>
                  <h3 className="title"><Link href="#">Traditional Indian Cooking with Pure Mustard Oil</Link></h3>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="far fa-calendar-alt"></i><Link href="#">18 March 2024</Link></span></li>
                      <li><span><i className="far fa-comments"></i><Link href="#">Comment (8)</Link></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-post-item-one mb-30 wow fadeInLeft">
                <div className="post-thumbnail">
                  <img src="https://cdn.shopify.com/s/files/1/0623/7395/3675/files/Benefit_Image_9th_Aug_-_Sunflower_Oil_Blog.webp?v=1725277701" alt="Recipes" />
                </div>
                <div className="entry-content">
                  <Link href="#" className="cat-btn">Recipes</Link>
                  <h3 className="title"><Link href="#">Healthy Snack Recipes Using Sunflower Oil</Link></h3>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="far fa-calendar-alt"></i><Link href="#">10 March 2024</Link></span></li>
                      <li><span><i className="far fa-comments"></i><Link href="#">Comment (15)</Link></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      <Footer />
    </>
  )
}