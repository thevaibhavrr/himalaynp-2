'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PartnersSection from '@/components/PartnersSection'


export default function Services() {
  // Service data
  const services = [
    {
      id: 1,
      title: 'Traditional Oil Extraction',
      icon: 'fas fa-seedling',
      description: 'Using traditional Kolhu methods for pure, natural oil extraction',
      animation: 'wow fadeInUp'
    },
    {
      id: 2,
      title: 'Natural Filtration Process',
      icon: 'fas fa-filter',
      description: 'Chemical-free natural filtration for healthier oils',
      animation: 'wow fadeInDown'
    },
    {
      id: 3,
      title: 'Modern Manufacturing',
      icon: 'fas fa-industry',
      description: 'State-of-the-art facilities with 2000 MT monthly capacity',
      animation: 'wow fadeInUp'
    },
    {
      id: 4,
      title: 'Quality Assurance',
      icon: 'fas fa-award',
      description: 'Rigorous quality control and FSSAI certification',
      animation: 'wow fadeInDown'
    },
    {
      id: 5,
      title: 'Distribution Network',
      icon: 'fas fa-truck',
      description: 'Wide distribution across multiple states and online platforms',
      animation: 'wow fadeInUp'
    },
    {
      id: 6,
      title: 'Customer Support',
      icon: 'fas fa-headset',
      description: 'Dedicated support for distributors and bulk buyers',
      animation: 'wow fadeInDown'
    }
  ]

  const galleryImages = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg',
      title: 'Traditional Extraction',
      description: 'Time-tested Kolhu methods',
      animation: 'wow fadeInUp'
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg',
      title: 'Quality Control',
      description: 'Rigorous testing standards',
      animation: 'wow fadeInDown'
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png',
      title: 'Modern Manufacturing',
      description: 'State-of-the-art facilities',
      animation: 'wow fadeInUp'
    }
  ]

  const processSteps = [
    {
      id: 1,
      title: 'Traditional Extraction',
      description: 'Using time-tested Kolhu methods for pure oil extraction that preserves natural nutrients and flavors.',
      image: 'https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg',
      animation: 'wow fadeInUp'
    },
    {
      id: 2,
      title: 'Natural Filtration',
      description: 'Chemical-free filtration process ensuring oils retain their natural goodness and health benefits.',
      image: 'https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg',
      animation: 'wow fadeInDown'
    },
    {
      id: 3,
      title: 'Quality Control',
      description: 'Rigorous testing at every stage to maintain consistent quality and FSSAI standards.',
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png',
      animation: 'wow fadeInUp'
    },
    {
      id: 4,
      title: 'Advanced Packaging',
      description: 'Modern packaging solutions that maintain freshness and extend shelf life.',
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      animation: 'wow fadeInDown'
    },
    {
      id: 5,
      title: 'Distribution Network',
      description: 'Extensive network covering multiple states with reliable supply chain management.',
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b6f3b58-0e49-41b3-b041-2a95c525b2b9.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      animation: 'wow fadeInUp'
    },
    {
      id: 6,
      title: 'Customer Support',
      description: 'Dedicated support team for distributors, retailers, and bulk purchase customers.',
      image: 'https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg',
      animation: 'wow fadeInDown'
    }
  ]

  const products = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/71RvGpDW8PL._UF894,1000_QL80_.jpg',
      title: 'Sunflower Oil',
      description: 'Light & versatile'
    },
    {
      id: 2,
      image: 'https://www.jiomart.com/images/product/original/rvq91jjsaj/himalayan-yellow-mustard-oil-5l-tin-fortified-with-vitamin-a-d-product-images-orvq91jjsaj-p594025363-0-202209241256.jpg?im=Resize=(1000,1000)',
      title: 'Sesame Oil',
      description: 'Rich & aromatic'
    },
    {
      id: 3,
      image: 'https://www.jiomart.com/images/product/original/rvybydjull/himalayan-yellow-mustard-oil-2l-bottle-fortified-with-vitamin-a-d-2-pcs-product-images-orvybydjull-p606861253-2-202312221851.png?im=Resize=(420,420)',
      title: 'Mustard Oil',
      description: 'Traditional & bold'
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/B1PnQ54E-HL._UF894,1000_QL80_.jpg',
      title: 'Soybean Oil',
      description: 'Neutral & healthy'
    }
  ]

  const partners = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRUKDNec7DyjZ0vusRZIwpYfR6PrfZAAeRw&s',
      name: 'Amazon'
    },
    {
      id: 2,
      image: 'https://cdn.couponlap.in/coupons/JioMart-.jpg1709530100074',
      name: 'JioMart'
    },
    {
      id: 3,
      image: 'https://play-lh.googleusercontent.com/kXJYGrvy4pvHwzw6tMgf-KPthnPDg4RvvoOTgffwSuHCUL63WVxaj3ojX3ADBS0UiD0=s256-rw',
      name: 'Blinkit'
    },
    {
      id: 4,
      image: 'https://download.logo.wine/logo/Metro_AG/Metro_AG-Logo.wine.png',
      name: 'Metro Wholesale'
    },
    {
      id: 5,
      image: 'https://images.yourstory.com/cs/2/220356402d6d11e9aa979329348d4c3e/Flipkartimage1574850126217png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75',
      name: 'Flipkart'
    }
  ]

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner bg_cover position-relative z-1" style={{
        backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')",
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
      </section>

      {/* Service Section */}
      <section className="service-section pt-100 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Our Expertise</span>
                <h2>Premium Edible Oil Manufacturing & Distribution Services</h2>
              </div>
              {/* Service Hero Images */}
              <div className="service-hero-images mb-40 wow fadeInLeft">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-hero-img mb-20">
                      <img src="https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg" alt="Manufacturing Facility" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}} />
                      <div className="img-caption">
                        <h6>Modern Manufacturing</h6>
                        <p>State-of-the-art facilities</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-hero-img mb-20">
                      <img src="https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg" alt="Quality Control Lab" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}} />
                      <div className="img-caption">
                        <h6>Quality Control</h6>
                        <p>Rigorous testing standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-50">
              <p className="wow fadeInRight">With over 46 years of experience in edible oil manufacturing, Bharat Agro Oil provides comprehensive services from traditional extraction to modern distribution. Our commitment to quality ensures that every drop of oil meets the highest standards of purity and health.</p>
            </div>
          </div>
          <div className="row">
            {services.map(service => (
              <div key={service.id} className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className={`service-box text-center mb-70 ${service.animation}`}>
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="text">
                    <h3 className="title"><a href="#">{service.title}</a></h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery Section */}
      <section className="service-gallery-section p-r z-1 pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="tag-line">Our Service Gallery</span>
                <h2>Manufacturing Excellence in Action</h2>
                <p>Explore our state-of-the-art facilities and traditional processes that ensure the highest quality edible oils.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {galleryImages.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                <div className={`service-gallery-item mb-30 ${item.animation}`}>
                  <div className="gallery-img">
                    <img src={item.image} alt={item.title} style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} />
                    <div className="gallery-overlay">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section className="skill-section-two pt-lg-130">
        <div className="container-fluid">
          <div className="skill-wrapper-one pb-90 bg_cover" style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/4373772c-04dd-4b04-8170-8fcf659107bc.__CR0,0,970,600_PT0_SX970_V1___.jpg')"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="skill-two_content-box content-box-gap mb-40 wow fadeInUp">
                    <div className="section-title section-title-left mb-30">
                      <span className="sub-title">Our Experience</span>
                      <h2>46+ Years of Excellence in Edible Oil Manufacturing</h2>
                    </div>
                    <p>Since 1978, Bharat Agro Oil has been pioneering traditional oil extraction methods combined with modern technology. Our expertise ensures the highest quality standards in every batch of oil we produce.</p>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>Production Capacity<span>2000 MT/month</span></h5>
                      </div>
                      <div className="progress-bar wow slideInLeft" style={{width: '100%'}}></div>
                      <div className="progress"></div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>Quality Standards<span>FSSAI Certified</span></h5>
                      </div>
                      <div className="progress-bar wow slideInLeft" style={{width: '100%'}}></div>
                      <div className="progress"></div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>Customer Satisfaction<span>98%</span></h5>
                      </div>
                      <div className="progress-bar wow slideInLeft" style={{width: '98%'}}></div>
                      <div className="progress"></div>
                    </div>
                    <div className="skill-button">
                      <a href="/about" className="main-btn bordered-btn">Learn More About Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="popular-service pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Our Process</span>
                <h2>Traditional Methods Meet Modern Technology</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              {processSteps.slice(0, 3).map(step => (
                <div key={step.id} className={`single-service-item mb-50 ${step.animation}`}>
                  <div className="icon">
                    <img src={step.image} alt={step.title} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}} />
                  </div>
                  <div className="text">
                    <h3><a href="#">{step.title}</a></h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="img-holder mb-50 wow fadeInDown">
                <img src="https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg" alt="Oil Manufacturing Process" style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
              </div>
            </div>
            <div className="col-lg-4">
              {processSteps.slice(3, 6).map(step => (
                <div key={step.id} className={`single-service-item mb-50 card-rtl ${step.animation}`}>
                  <div className="icon">
                    <img src={step.image} alt={step.title} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}} />
                  </div>
                  <div className="text">
                    <h3><a href="#">{step.title}</a></h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase-section p-r z-1 pt-80 pb-80" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Products</span>
                <h2>Premium Quality Edible Oils</h2>
                <p>Manufactured with traditional methods and modern technology</p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-product-item mb-30 wow fadeInUp">
                  <div className="product-img-container">
                    <img src={product.image} alt={product.title} style={{width: '100%', height: '200px', objectFit: 'contain', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} />
                    <div className="product-overlay">
                      <h5>{product.title}</h5>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
       <PartnersSection/>
    
      

      {/* CTA Section */}
      <section className="cta-section yellow-bg pt-80 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="cta-content text-center text-lg-left wow fadeInLeft">
                <h3>Interested in Becoming a Distributor?</h3>
                <p>Join our growing network of distributors and offer premium quality edible oils to your customers.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta-button text-center text-lg-right wow fadeInRight">
                <a href="/contact" className="main-btn btn-dark text-white">Contact Us Today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
