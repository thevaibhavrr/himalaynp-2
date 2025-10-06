import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'


export default function Contact() {
  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner bg_cover p-r z-1" 
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
          <Image src="/assets/images/logo/new-logo.png" alt="Bharat Agro Oil Logo" width={120} height={120} style={{maxWidth: '120px'}} />
          <h3>Bharat Agro Oil</h3>
          <p>Premium Edible Oils Since 1978</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-information-one p-r z-1 pt-80 pb-60" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center mb-60">
            <div className="col-xl-8 col-lg-10 text-center">
              <div className="section-title wow fadeInUp">
                <span className="sub-title" style={{color: '#eece38', textDecoration: 'none', fontSize: '18px', fontWeight: '600'}}>Get In Touch</span>
                <h2 style={{color: '#333', fontSize: '36px', lineHeight: '1.3', marginTop: '15px'}}>We&apos;re Here to Help You! Need Premium Quality Edible Oils or Distribution Partnership?</h2>
              </div>
            </div>
          </div>

          {/* Main Content Row */}
          <div className="row">
            {/* Contact Cards */}
            <div className="col-xl-8 col-lg-12">
              <div className="row g-4 mb-5">
                <div className="col-lg-4 col-md-6">
                  <div className="information-item-two info-one wow fadeInDown" style={{
                    background: 'white', 
                    padding: '30px', 
                    borderRadius: '15px', 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)', 
                    borderLeft: '4px solid #eece38', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div className="icon" style={{
                      color: '#eece38',
                      background: 'rgba(238, 206, 56, 0.1)', 
                      border: "2px solid #eece38",
                      fontSize: '28px', 
                      marginBottom: '20px', 
                      textAlign: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <i className="far fa-map-marker-alt"></i>
                    </div>
                    <div className="info" style={{textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <h5 style={{color: '#333', fontWeight: 600, marginBottom: '15px', fontSize: '18px'}}>Factory Address</h5>
                      <p style={{color: '#666', lineHeight: '1.6', margin: 0, fontSize: '15px'}}>Khasra No. 118 & 120, Sikeda Road Industrial Area, Modinagar 201204, Distt. GZB, UP</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                  <div className="information-item-two info-two wow fadeInUp" style={{
                    background: 'white', 
                    padding: '30px', 
                    borderRadius: '15px', 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)', 
                    borderLeft: '4px solid #eece38', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div className="icon" style={{
                      color: '#eece38',
                      background: 'rgba(238, 206, 56, 0.1)', 
                      border: "2px solid #eece38",
                      fontSize: '28px', 
                      marginBottom: '20px', 
                      textAlign: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <i className="far fa-envelope-open-text"></i>
                    </div>
                    <div className="info" style={{textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <h5 style={{color: '#333', fontWeight: 600, marginBottom: '15px', fontSize: '18px'}}>Email Address</h5>
                      <div style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>
                        <p style={{marginBottom: '8px'}}>
                          <a href="mailto:bharatagrooil@yahoo.in" style={{color: '#eece38', textDecoration: 'none', fontSize: '15px', fontWeight: '500'}}>
                            bharatagrooil@yahoo.in
                          </a>
                        </p>
                        <p style={{margin: 0}}>
                          <a href="mailto:sales@bharatagrooil.com" style={{color: '#eece38', textDecoration: 'none', fontSize: '15px', fontWeight: '500'}}>
                            sales@bharatagrooil.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6">
                  <div className="information-item-two info-three wow fadeInDown" style={{
                    background: 'white', 
                    padding: '30px', 
                    borderRadius: '15px', 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)', 
                    borderLeft: '4px solid #eece38', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div className="icon" style={{
                      color: '#eece38',
                      background: 'rgba(238, 206, 56, 0.1)', 
                      border: "2px solid #eece38",
                      fontSize: '28px', 
                      marginBottom: '20px', 
                      textAlign: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="info" style={{textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <h5 style={{color: '#333', fontWeight: 600, marginBottom: '15px', fontSize: '18px'}}>Phone Number</h5>
                      <div style={{wordWrap: 'break-word', overflowWrap: 'break-word'}}>
                        <p style={{marginBottom: '8px'}}>
                          <a href="tel:+919219450111" style={{color: '#eece38', textDecoration: 'none', fontWeight: '600', fontSize: '15px'}}>
                            +91 9219450111
                          </a>
                        </p>
                        <p style={{margin: 0}}>
                          <a href="tel:+911232456789" style={{color: '#eece38', textDecoration: 'none', fontWeight: '600', fontSize: '15px'}}>
                            +91 1232456789
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="row">
                <div className="col-lg-8">
                  <div className="company-info wow fadeInUp" style={{
                    background: 'white', 
                    padding: '40px', 
                    borderRadius: '15px', 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}>
                    <p style={{color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '25px'}}>
                      With 46+ years of experience in edible oil manufacturing, we are committed to providing the highest quality products and excellent customer service. Contact us for bulk orders, distribution inquiries, or any questions about our premium oils.
                    </p>
                    <div className="business-hours">
                      <h5 style={{color: '#333', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', fontSize: '18px'}}>
                        <i className="far fa-clock" style={{color: '#eece38', marginRight: '12px', fontSize: '20px'}}></i>
                        Business Hours:
                      </h5>
                      <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
                        <div>
                          <p style={{marginBottom: '8px', color: '#666', fontSize: '15px'}}>
                            <strong style={{color: '#333'}}>Monday - Saturday:</strong> 8:00 AM - 6:00 PM
                          </p>
                        </div>
                        <div>
                          <p style={{marginBottom: '8px', color: '#666', fontSize: '15px'}}>
                            <strong style={{color: '#333'}}>Sunday:</strong> Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory Image */}
            <div className="col-xl-4 col-lg-12">
              <div className="factory-image wow fadeInRight" style={{position: 'relative', marginTop: '0'}}>
                <div style={{position: 'relative', overflow: 'hidden', borderRadius: '15px'}}>
                  <img 
                    src="https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg" 
                    alt="Bharat Agro Oil Factory" 
                    style={{
                      width: '100%', 
                      height: '500px', 
                      objectFit: 'cover', 
                      borderRadius: '15px', 
                      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute', 
                    bottom: '0', 
                    left: '0', 
                    right: '0', 
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', 
                    color: 'white', 
                    padding: '30px 25px 25px', 
                    borderRadius: '0 0 15px 15px'
                  }}>
                    <h6 style={{color: '#eece38', marginBottom: '8px', fontSize: '18px', fontWeight: '600'}}>Our Manufacturing Facility</h6>
                    <p style={{margin: 0, fontSize: '15px', lineHeight: '1.5'}}>State-of-the-art equipment for premium quality oils</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-page-map">
        <div className="map-box">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.456789012345!2d77.56789012345678!3d28.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7a8a8a8a8a8a%3A0x8a8a8a8a8a8a8a8a!2sModinagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-three pt-60 pb-50 wow fadeInUp" style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative'}}>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.6)', zIndex: 1}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-10">
              <div className="contact-three_content-box">
                <div className="section-title section-title-left mb-40" style={{color: 'white'}}>
                  <span className="sub-title" style={{color: '#eece38' , textDecoration: 'none'}}>Send Us a Message</span>
                  <h2 style={{color: 'black'}}>Interested in Our Premium Edible Oils? Get In Touch!</h2>
                </div>
                <div className="contact-form">
                  <form id="contactForm" action="/api/contact" name="contactForm" method="post">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form_group form-group">
                          <input type="text" className="form_control" placeholder="Full Name" id="name" name="name" required data-error="Please enter your name" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form_group form-group">
                          <input type="email" className="form_control" placeholder="Email Address" id="email" name="email" required data-error="Please enter your Email Address" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form_group form-group">
                          <input type="tel" className="form_control" placeholder="Phone Number" id="phone" name="phone" required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form_group form-group">
                          <select className="form_control" id="inquiry_type" name="inquiry_type" required>
                            <option value="">Select Inquiry Type</option>
                            <option value="distribution">Distribution Inquiry</option>
                            <option value="bulk_order">Bulk Order</option>
                            <option value="product_info">Product Information</option>
                            <option value="partnership">Business Partnership</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <div className="form_group form-group">
                      <input type="text" className="form_control" placeholder="Company/Organization (if applicable)" id="company" name="company" />
                    </div>
                    <div className="form_group form-group">
                      <textarea className="form_control" placeholder="Your Message or Business Inquiry" id="message" name="message" required data-error="Please enter your Message" rows={5}></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form_group form-group">
                      <button type="submit" className="main-btn btn-yellow">Send Message</button>
                      <div id="msgSubmit" className="hidden"></div>
                    </div>
                  </form>
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
