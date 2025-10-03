import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function About() {
  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner bg_cover position-relative z-1"
        style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="brand-card text-center">
          <img src="/assets/images/logo/new-logo.png" alt="Bharat Agro Oil Logo"   style={{maxWidth: '120px'}} />
          <h3>Bharat Agro Oil</h3>
          <p>Premium Edible Oils Since 1978</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section p-r z-1 pt-100 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
                  <span className="sub-title">Our Legacy</span>
                  <h2>India's Trusted Edible Oil Manufacturer Since 1978</h2>
                </div>
                <p>For over four decades, Bharat Agro Oil has been a pioneer in the edible oil industry, dedicated to delivering purity, quality, and health in every drop. We are committed to providing premium quality, pure, and healthy edible oils to Indian families through our traditional extraction methods combined with modern technology.</p>

                <div className="choose-item-list wow fadeInDown">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Traditional Kolhu Extraction</h5>
                      <p>Using traditional methods combined with modern technology to ensure maximum purity and nutritional value.</p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Natural Filtration Process</h5>
                      <p>No chemical refining - our oils are naturally filtered to preserve their natural goodness and health benefits.</p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Quality Certified</h5>
                      <p>FSSAI certified with highest quality standards and rigorous quality control in every batch.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInRight">
                <img 
                  src="https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg"
                  className="about-img_one" 
                  alt="Our Manufacturing Facility"
                  
                  
                  style={{maxWidth: '100%', height: 'auto', borderRadius: '10px'}}
                />
                <div className="about-img_two"
                  style={{position: 'absolute', bottom: '-30px', left: '40px', width: '300px', height: '250px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
                  <img 
                    src="https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg"
                    alt="Quality Control Process" 
                    
                    
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="features-section dark-black-bg pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="features-item text-center mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="text">
                  <h4 className="text-warning">Our Mission</h4>
                  <p>To produce and deliver superior-quality edible oils that meet the highest standards of purity, health, and safety. We aim to delight customers through excellent packaging, reliable service, and consistent commitment to their nutritional needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item text-center mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="text">
                  <h4 className="text-warning">Our Vision</h4>
                  <p>To be a leading edible oil brand recognized globally for quality, trust, and innovation. We aspire to set new benchmarks in customer satisfaction and health-focused products while continuously enhancing our processes, packaging, and services.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item text-center mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="text">
                  <h4 className="text-warning">Our Values</h4>
                  <p>Quality, Purity, Trust, and Innovation. We believe in maintaining traditional values while embracing modern technology to deliver the best products to our customers. Every decision we make is guided by our commitment to health and wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery-section p-r z-1 pt-80 pb-80" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Products</span>
                <h2>Premium Quality Edible Oils</h2>
                <p>Explore our wide range of pure, natural, and healthy cooking oils</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Mustard Oil */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <a href="/products">
                    <img src="https://www.jiomart.com/images/product/original/rvybydjull/himalayan-yellow-mustard-oil-2l-bottle-fortified-with-vitamin-a-d-2-pcs-product-images-orvybydjull-p606861253-2-202312221851.png?im=Resize=(420,420)"
                      alt="Mustard Oil"
                      style={{width: '100%', minWidth: '300px', height: '250px', objectFit: 'contain', borderRadius: '10px', display: 'block', margin: '0 auto'}} />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h5>Mustard Oil</h5>
                        <p>Pure cold-pressed mustard oil</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Soybean Oil */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <a href="/products">
                    <img src="https://m.media-amazon.com/images/I/B1PnQ54E-HL._UF894,1000_QL80_.jpg"
                      alt="Soybean Oil"
                      style={{width: '100%', minWidth: '300px', height: '250px', objectFit: 'contain', borderRadius: '10px', display: 'block', margin: '0 auto'}} />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h5>Soybean Oil</h5>
                        <p>Premium quality soybean oil</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Sunflower Oil */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <a href="/products">
                    <img src="https://m.media-amazon.com/images/I/71RvGpDW8PL._UF894,1000_QL80_.jpg"
                      alt="Sunflower Oil"
                      style={{width: '100%', minWidth: '300px', height: '250px', objectFit: 'contain', borderRadius: '10px', display: 'block', margin: '0 auto'}} />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h5>Sunflower Oil</h5>
                        <p>Nutrient-rich cooking oil</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Groundnut Oil */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <a href="/products">
                    <img src="https://m.media-amazon.com/images/I/615O5Zi1NtL._UF894,1000_QL80_.jpg"
                      alt="Groundnut Oil"
                      style={{width: '100%', minWidth: '300px', height: '250px', objectFit: 'contain', borderRadius: '10px', display: 'block', margin: '0 auto'}} />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h5>Groundnut Oil</h5>
                        <p>Pure groundnut oil for cooking</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Blended Oils */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <a href="/products">
                    <img src="https://www.jiomart.com/images/product/original/rvq91jjsaj/himalayan-yellow-mustard-oil-5l-tin-fortified-with-vitamin-a-d-product-images-orvq91jjsaj-p594025363-0-202209241256.jpg?im=Resize=(1000,1000)"
                      alt="Blended Oil"
                      style={{width: '100%', minWidth: '300px', height: '250px', objectFit: 'contain', borderRadius: '10px', display: 'block', margin: '0 auto'}} />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h5>Blended Oils</h5>
                        <p>Special blended oil combinations</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Health Benefits */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-gallery-item mb-30 wow fadeInUp">
                <div className="gallery-img">
                  <a href="/recipes">
                    <img src="https://rukminim2.flixcart.com/image/480/480/k73nlow0/edible-oil/j/y/t/1-yellow-mustard-oil-1-litre-pet-bottle-pet-bottle-mustard-oil-original-imafpf7zjtrpu5fn.jpeg?q=90"
                      alt="Health Benefits"
                      style={{width: '100%', minWidth: '300px', height: '250px', objectFit: 'contain', borderRadius: '10px', display: 'block', margin: '0 auto'}} />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h5>Health Benefits</h5>
                        <p>Discover the health benefits of our oils</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="manufacturing-process-section p-r z-1 pt-80 pb-80"
        style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Process</span>
                <h2>From Seed to Oil - Our Manufacturing Journey</h2>
                <p>Discover how we transform premium seeds into pure, healthy cooking oils</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="process-item text-center mb-40 wow fadeInUp">
                <div className="process-img">
                  <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Seed Selection"
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="process-content">
                  <h5>Premium Seed Selection</h5>
                  <p>Carefully selected high-quality seeds from trusted farmers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="process-item text-center mb-40 wow fadeInUp">
                <div className="process-img">
                  <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Traditional Extraction"
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="process-content">
                  <h5>Traditional Kolhu Extraction</h5>
                  <p>Cold-pressed extraction using traditional methods</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="process-item text-center mb-40 wow fadeInUp">
                <div className="process-img">
                  <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Quality Testing"
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="process-content">
                  <h5>Quality Testing</h5>
                  <p>Rigorous testing for purity and nutritional value</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="process-item text-center mb-40 wow fadeInUp">
                <div className="process-img">
                  <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Packaging"
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="process-content">
                  <h5>Safe Packaging</h5>
                  <p>Hygienic packaging to preserve freshness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section p-r z-1 pt-80 pb-80" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Team</span>
                <h2>Meet Our Expert Team</h2>
                <p>Dedicated professionals committed to quality and excellence</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item text-center mb-40 wow fadeInUp">
                <div className="team-img">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team Member"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="team-content">
                  <h5>Rajesh Kumar</h5>
                  <p>Production Manager</p>
                  <p>25+ years of experience in oil manufacturing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item text-center mb-40 wow fadeInUp">
                <div className="team-img">
                  <img src="https://media.istockphoto.com/id/640071044/photo/ill-find-the-cure.jpg?s=612x612&w=0&k=20&c=wJuZO-_-Yfs39KkEn4Ekd6fG8xqZi7DFcxuWHzflxR8="
                    alt="Team Member"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="team-content">
                  <h5>Priya Sharma</h5>
                  <p>Quality Control Head</p>
                  <p>Ensuring highest quality standards</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item text-center mb-40 wow fadeInUp">
                <div className="team-img">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team Member"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="team-content">
                  <h5>Amit Singh</h5>
                  <p>Technical Director</p>
                  <p>Innovation and process improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-two p-r z-1 pt-50 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-12">
              <div className="choose-two_content-box">
                <div className="section-title section-title-left mb-40 wow fadeInLeft">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>What Makes Bharat Agro Oil Different</h2>
                </div>
                <p className="wow fadeInUp">With 46+ years of experience and state-of-the-art manufacturing facilities, we combine traditional wisdom with modern technology to deliver the purest edible oils.</p>

                <div className="choose-item-list wow fadeInDown pt-30">
                  <div className="single-choose-item mb-20">
                    <div className="text">
                      <h5>Traditional Kolhu Extraction</h5>
                      <p>Pure oil extraction using time-tested methods</p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-20">
                    <div className="text">
                      <h5>Natural Filtration</h5>
                      <p>No chemical refining - naturally filtered oils</p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-20">
                    <div className="text">
                      <h5>FSSAI Certified</h5>
                      <p>Highest quality standards and certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="row pl-lg-70">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInUp">
                    <div className="chart-circle" style={{
                      position: 'relative',
                      width: '120px',
                      height: '120px',
                      margin: '0 auto 20px'
                    }}>
                      <svg width="120" height="120" style={{transform: 'rotate(-90deg)'}}>
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.149)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#eece38"
                          strokeWidth="8"
                          strokeDasharray={`${2 * Math.PI * 50}`}
                          strokeDashoffset={`${2 * Math.PI * 50 * (1 - 1)}`}
                          style={{
                            transition: 'stroke-dashoffset 1s ease-in-out'
                          }}
                        />
                      </svg>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#eece38'
                      }}>
                        100<span style={{fontSize: '16px'}}>%</span>
                      </div>
                    </div>
                    <div className="text">
                      <h5>Natural Filtration</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInDown">
                    <div className="chart-circle" style={{
                      position: 'relative',
                      width: '120px',
                      height: '120px',
                      margin: '0 auto 20px'
                    }}>
                      <svg width="120" height="120" style={{transform: 'rotate(-90deg)'}}>
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.149)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#eece38"
                          strokeWidth="8"
                          strokeDasharray={`${2 * Math.PI * 50}`}
                          strokeDashoffset={`${2 * Math.PI * 50 * (1 - 0.98)}`}
                          style={{
                            transition: 'stroke-dashoffset 1s ease-in-out'
                          }}
                        />
                      </svg>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#eece38'
                      }}>
                        98<span style={{fontSize: '16px'}}>%</span>
                      </div>
                    </div>
                    <div className="text">
                      <h5>Customer Satisfaction</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInUp">
                    <div className="chart-circle" style={{
                      position: 'relative',
                      width: '120px',
                      height: '120px',
                      margin: '0 auto 20px'
                    }}>
                      <svg width="120" height="120" style={{transform: 'rotate(-90deg)'}}>
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.149)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#eece38"
                          strokeWidth="8"
                          strokeDasharray={`${2 * Math.PI * 50}`}
                          strokeDashoffset={`${2 * Math.PI * 50 * (1 - 0.95)}`}
                          style={{
                            transition: 'stroke-dashoffset 1s ease-in-out'
                          }}
                        />
                      </svg>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#eece38'
                      }}>
                        95<span style={{fontSize: '16px'}}>%</span>
                      </div>
                    </div>
                    <div className="text">
                      <h5>Quality Standards</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase Section */}
      <section className="facilities-showcase-section p-r z-1 pt-80 pb-80"
        style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Facilities</span>
                <h2>State-of-the-Art Manufacturing Infrastructure</h2>
                <p>Modern facilities equipped with advanced technology for superior quality</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="facility-item mb-40 wow fadeInLeft">
                <div className="facility-img">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Manufacturing Plant"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="facility-content">
                  <h4>Modern Manufacturing Plant</h4>
                  <p>Our 50,000 sq ft manufacturing facility is equipped with the latest machinery and technology to ensure consistent quality and efficiency.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="facility-item mb-40 wow fadeInRight">
                <div className="facility-img">
                  <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Quality Lab"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="facility-content">
                  <h4>Advanced Quality Laboratory</h4>
                  <p>Our in-house laboratory conducts rigorous testing for purity, nutritional content, and safety standards to ensure every batch meets our high standards.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="facility-item mb-40 wow fadeInLeft">
                <div className="facility-img">
                  <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Storage Facility"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="facility-content">
                  <h4>Climate-Controlled Storage</h4>
                  <p>Temperature and humidity-controlled storage facilities ensure optimal conditions for seed storage and oil preservation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="facility-item mb-40 wow fadeInRight">
                <div className="facility-img">
                  <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Packaging Unit"
                    style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)'}} />
                </div>
                <div className="facility-content">
                  <h4>Automated Packaging Unit</h4>
                  <p>Fully automated packaging lines ensure hygienic and efficient bottling of our premium oils in various sizes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="about-section p-r z-1 pt-80 pb-80 dark-black-bg text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInLeft">
                <img src="https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg"
                  alt="Our Manufacturing Facility"
                  style={{maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title text-white">Our Facility</span>
                  <h2>State-of-the-Art Manufacturing</h2>
                </div>
                <p className="wow fadeInDown">Located in Modinagar, Ghaziabad, our manufacturing plant spans across modern facilities with a production capacity of 2000 MT per month. We combine traditional extraction methods with advanced technology to ensure the highest quality standards.</p>

                <div className="facility-features wow fadeInUp">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4">
                      <div className="feature-card" style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(238, 206, 56, 0.3)',
                        borderRadius: '15px',
                        padding: '25px',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div className="feature-icon" style={{
                          fontSize: '32px',
                          color: '#eece38',
                          marginBottom: '15px',
                          display: 'block'
                        }}>
                          <i className="fas fa-industry"></i>
                        </div>
                        <div className="feature-content">
                          <h5 style={{
                            color: '#eece38',
                            fontWeight: '600',
                            fontSize: '18px',
                            marginBottom: '8px'
                          }}>Production Capacity</h5>
                          <p style={{
                            color: '#ffffff',
                            fontSize: '16px',
                            margin: '0',
                            opacity: '0.9'
                          }}>2000 MT/month</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                      <div className="feature-card" style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(238, 206, 56, 0.3)',
                        borderRadius: '15px',
                        padding: '25px',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div className="feature-icon" style={{
                          fontSize: '32px',
                          color: '#eece38',
                          marginBottom: '15px',
                          display: 'block'
                        }}>
                          <i className="fas fa-cogs"></i>
                        </div>
                        <div className="feature-content">
                          <h5 style={{
                            color: '#eece38',
                            fontWeight: '600',
                            fontSize: '18px',
                            marginBottom: '8px'
                          }}>Traditional Kolhu</h5>
                          <p style={{
                            color: '#ffffff',
                            fontSize: '16px',
                            margin: '0',
                            opacity: '0.9'
                          }}>Pure extraction</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                      <div className="feature-card" style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(238, 206, 56, 0.3)',
                        borderRadius: '15px',
                        padding: '25px',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div className="feature-icon" style={{
                          fontSize: '32px',
                          color: '#eece38',
                          marginBottom: '15px',
                          display: 'block'
                        }}>
                          <i className="fas fa-filter"></i>
                        </div>
                        <div className="feature-content">
                          <h5 style={{
                            color: '#eece38',
                            fontWeight: '600',
                            fontSize: '18px',
                            marginBottom: '8px'
                          }}>Natural Filtration</h5>
                          <p style={{
                            color: '#ffffff',
                            fontSize: '16px',
                            margin: '0',
                            opacity: '0.9'
                          }}>No chemical refining</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                      <div className="feature-card" style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(238, 206, 56, 0.3)',
                        borderRadius: '15px',
                        padding: '25px',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div className="feature-icon" style={{
                          fontSize: '32px',
                          color: '#eece38',
                          marginBottom: '15px',
                          display: 'block'
                        }}>
                          <i className="fas fa-award"></i>
                        </div>
                        <div className="feature-content">
                          <h5 style={{
                            color: '#eece38',
                            fontWeight: '600',
                            fontSize: '18px',
                            marginBottom: '8px'
                          }}>Certification</h5>
                          <p style={{
                            color: '#ffffff',
                            fontSize: '16px',
                            margin: '0',
                            opacity: '0.9'
                          }}>FSSAI Licensed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="farmers-team_two light-gray-bg pb-90 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Our Expertise</span>
                <h2>Dedicated Team Ensuring Quality</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="https://media.istockphoto.com/id/640071044/photo/ill-find-the-cure.jpg?s=612x612&w=0&k=20&c=wJuZO-_-Yfs39KkEn4Ekd6fG8xqZi7DFcxuWHzflxR8="
                    alt="Quality Manager" />
                </div>
                <div className="member-info">
                  <h3 className="title"><a href="#">Quality Control Team</a></h3>
                  <p className="position">Ensuring Purity & Standards</p>
                  <p>Dedicated professionals maintaining highest quality standards in every batch</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="https://www.shutterstock.com/image-photo/engineer-team-full-skill-quality-260nw-2111911970.jpg"
                    alt="Production Team" />
                </div>
                <div className="member-info">
                  <h3 className="title"><a href="#">Production Experts</a></h3>
                  <p className="position">Traditional + Modern Methods</p>
                  <p>Skilled team combining traditional knowledge with modern technology</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n8VUVHAYGpSQRDdCRPSsjISnLOtPS-T7OQ&s"
                    alt="R&D Team" />
                </div>
                <div className="member-info">
                  <h3 className="title"><a href="#">R&D Department</a></h3>
                  <p className="position">Innovation & Development</p>
                  <p>Continuous research for better products and improved processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
