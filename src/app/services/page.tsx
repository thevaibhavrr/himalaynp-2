'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('')

  // Service data
  const services = [
    {
      id: 1,
      title: 'Bulk Oil Supply',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Large quantity supply for restaurants, hotels, and commercial establishments with competitive pricing and reliable delivery.',
      link: '/bulk-supply'
    },
    {
      id: 2,
      title: 'Distribution Network',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Wide distribution network across multiple states with reliable delivery and excellent customer service.',
      link: '/distribution'
    },
    {
      id: 3,
      title: 'Quality Assurance',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Rigorous quality control and FSSAI certification for all products ensuring the highest standards.',
      link: '/quality-assurance'
    },
    {
      id: 4,
      title: 'Partnership Program',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Become our distributor and grow your business with us through our comprehensive partnership program.',
      link: '/partnership'
    }
  ]

  const categories = [
    { name: 'Bulk Supply', link: '/bulk-supply' },
    { name: 'Distribution Network', link: '/distribution' },
    { name: 'Quality Control', link: '/quality-control' },
    { name: 'Partnership Program', link: '/partnership' },
    { name: 'Custom Solutions', link: '/custom-solutions' }
  ]

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner bg_cover position-relative z-1"
        style={{
          backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div className="brand-card text-center">
          <img src="/assets/images/logo/new-logo.png" alt="Bharat Agro Oil Logo" style={{maxWidth: '120px'}} />
          <h3>Bharat Agro Oil</h3>
          <p>Premium Edible Oils Since 1978</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="page-title">
                <h1>Our Services</h1>
                <ul className="breadcrumbs-link">
                  <li><a href="/">Home</a></li>
                  <li className="active">Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-details-section pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details-wrapper">
                <div className="img-holder">
                  <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Bharat Agro Oil Services" style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px'}} />
                </div>
                <div className="content text-center">
                  <h3 className="title">Premium Edible Oil Solutions</h3>
                  <p>Bharat Agro Oil has been providing comprehensive edible oil solutions since 1978. Our services encompass everything from bulk supply to quality assurance, ensuring that our clients receive the best products and support.</p>
                </div>
                <div className="service-content">
                  <p>With over 46 years of experience in the edible oil industry, Bharat Agro Oil has established itself as a trusted name in quality and reliability. We offer a complete range of services designed to meet the diverse needs of our customers, from individual households to large commercial establishments.</p>
                  <p>Our commitment to excellence is reflected in every aspect of our service delivery. From the initial consultation to the final delivery, we ensure that our clients receive personalized attention and solutions that perfectly match their requirements.</p>
                  
                  <div className="choose-item-list mb-50">
                    <div className="single-choose-item mb-30">
                      <div className="text">
                        <h5>100% Natural Oils</h5>
                        <p>All our oils are extracted using traditional methods without any chemical processing, ensuring natural purity and health benefits.</p>
                      </div>
                    </div>
                    <div className="single-choose-item mb-30">
                      <div className="text">
                        <h5>Modern Quality Control</h5>
                        <p>State-of-the-art quality control systems ensure that every batch meets the highest standards of purity and safety.</p>
                      </div>
                    </div>
                    <div className="single-choose-item mb-30">
                      <div className="text">
                        <h5>FSSAI Certified Products</h5>
                        <p>All our products are FSSAI certified, guaranteeing compliance with food safety standards and regulations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="content-img">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Oil Manufacturing Process" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px'}} />
                  </div>
                  
                  <h4>Comprehensive Service Benefits</h4>
                  <p>Our comprehensive service approach ensures that every client receives the best possible experience. From bulk supply solutions for commercial establishments to personalized service for individual customers, we tailor our offerings to meet specific needs.</p>
                  
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40">
                        <div className="icon">
                          <i className="flaticon-tractor"></i>
                        </div>
                        <div className="text">
                          <h5>Traditional Manufacturing Process</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40">
                        <div className="icon">
                          <i className="flaticon-tractor"></i>
                        </div>
                        <div className="text">
                          <h5>Premium Quality Oil Extraction</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40">
                        <div className="icon">
                          <i className="flaticon-tractor"></i>
                        </div>
                        <div className="text">
                          <h5>Expert Quality Control Team</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40">
                        <div className="icon">
                          <i className="flaticon-tractor"></i>
                        </div>
                        <div className="text">
                          <h5>Natural Goodness Guaranteed</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-40">
                  <form>
                    <div className="form_group">
                      <input 
                        type="text" 
                        className="form_control" 
                        placeholder="Search services..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required 
                      />
                      <button className="search-btn" type="button">
                        <i className="far fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="widget category-widget mb-40">
                  <h4 className="widget-title">Service Categories</h4>
                  <ul className="category-nav">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href={category.link}>
                          {category.name}
                          <span><i className="far fa-arrow-right"></i></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="widget contact-info-widget bg_cover mb-40" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '30px', borderRadius: '15px'}}>
                  <div className="contact-info-box text-center">
                    <div className="icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="info">
                      <h4><a href="tel:+919219450111">+91 9219450111</a></h4>
                      <h5><a href="mailto:bharatagrooil@yahoo.in">bharatagrooil@yahoo.in</a></h5>
                      <a href="/contact" className="main-btn bordered-btn bordered-black">Contact us</a>
                    </div>
                  </div>
                </div>
                
                <div className="widget download-widget mb-40">
                  <a href="#" style={{display: 'block', marginBottom: '10px', padding: '10px', background: '#f8f9fa', borderRadius: '5px', textDecoration: 'none', color: '#333'}}>
                    <i className="far fa-file-pdf"></i> Download Product Catalog
                  </a>
                  <a href="#" style={{display: 'block', padding: '10px', background: '#f8f9fa', borderRadius: '5px', textDecoration: 'none', color: '#333'}}>
                    <i className="far fa-file-word"></i> Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="service-section light-gray-bg pt-130 pb-130" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Our Services</span>
                <h2>What We Provide For Your Better Health</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map(service => (
              <div key={service.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-service-item-two text-center mb-30">
                  <div className="img-holder">
                    <img src={service.image} alt={service.title} style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px'}} />
                  </div>
                  <div className="text">
                    <h3 className="title"><a href={service.link}>{service.title}</a></h3>
                    <p>{service.description}</p>
                    <a href={service.link} className="main-btn btn-yellow">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
