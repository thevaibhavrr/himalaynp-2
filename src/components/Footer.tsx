import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="footer-default footer-white dark-black-bg">
        <div className="container">
          <div className="footer-widget" style={{paddingTop: '40px', paddingBottom: '20px'}}>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                <div className="footer-widget about-widget mb-30 wow fadeInDown">
                  <div className="footer-logo mb-20 ps-3 " style={{marginBottom: '20px' ,paddingLeft: '60px'}}>
                    <div style={{
                      backgroundColor: '#fff',
                      padding: '15px 20px',
                      borderRadius: '10px',
                      display: 'inline-block',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                      <img 
                        src="/assets/images/logo/new-logo.png" 
                        alt="Bharat Agro Oil Logo" 
                        style={{
                          height: '50px',
                          width: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>
                  <div className="footer-about-content">
                    <p style={{fontSize: '14px', lineHeight: '1.5', marginBottom: '15px'}}>Since 1978, we have been dedicated to delivering purity, quality, and health in every drop. We strive to bring premium-grade edible oils to households, hotels, and businesses across India.</p>
                    <div className="social-box">
                      <h4 className="mb-10" style={{fontSize: '16px'}}>Follow Us</h4>
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
              <div className="col-lg-4 col-lg-4 col-md-7 col-sm-12">
                <div className="footer-widget footer-nav-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title" style={{fontSize: '18px', marginBottom: '15px'}}>Quick Links</h4>
                  <div className="footer-widget-nav">
                    <ul style={{fontSize: '14px', lineHeight: '1.6'}}>
                      <li style={{marginBottom: '8px'}}><Link href="/mustard-oil">Mustard Oil</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/soybean-oil">Soybean Oil</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/sunflower-oil">Sunflower Oil</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/groundnut-oil">Groundnut Oil</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/blended-oils">Blended Oils</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/health-benefits">Health Benefits</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/recipes">Recipes</Link></li>
                    </ul>
                    <ul style={{fontSize: '14px', lineHeight: '1.6'}}>
                      <li style={{marginBottom: '8px'}}><Link href="/about">About Us</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/quality-control">Quality Control</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/services">Service page</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/contact">Contact Us</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/distribution">Become Distributor</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/privacy-policy">Privacy Policy</Link></li>
                      <li style={{marginBottom: '8px'}}><Link href="/terms-conditions">Terms & Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget recent-post-widget mb-30 wow fadeInDown">
                  <h4 className="widget-title" style={{fontSize: '18px', marginBottom: '15px'}}>Distribution Areas</h4>
                  <div className="distribution-areas">
                    <h5 style={{fontSize: '16px', marginBottom: '10px'}}>We Serve In:</h5>
                    <ul className='' style={{fontSize: '14px', lineHeight: '1.6', marginBottom: '15px'}}>
                      <li style={{marginBottom: '6px'}}>Uttar Pradesh</li>
                      <li style={{marginBottom: '6px'}}>Bihar</li>
                      <li style={{marginBottom: '6px'}}>Delhi</li>
                      <li style={{marginBottom: '6px'}}>Haryana</li>
                      <li style={{marginBottom: '6px'}}>Online Pan India</li>
                    </ul>
                    <div className="certification">
                      <h5 style={{fontSize: '16px', marginBottom: '8px'}}>Certifications:</h5>
                      <p style={{fontSize: '14px', marginBottom: '0'}}>FSSAI License: 10017051002014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-newsletter footer-newsletter-one text-white wow fadeInUp" style={{padding: '20px 0'}}>
            <div className="row">
              <div className="col-xl-3">
                <div className="footer-text">
                  <h5 style={{fontSize: '16px', marginBottom: '10px'}}>Subscribe for Updates & Offers</h5>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="newsletter-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="form_group">
                          <input type="email" className="form_control" placeholder="Email Address" name="email" required style={{padding: '8px 12px', fontSize: '14px'}} />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input type="text" className="form_control" placeholder="Phone Number" name="phone" required style={{padding: '8px 12px', fontSize: '14px'}} />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form_group">
                          <button className="main-btn btn-yellow" style={{padding: '8px 16px', fontSize: '14px'}}>Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright" style={{padding: '15px 0'}}>
            <div className="col-lg-12">
              <div className="copyright-text text-center">
                <p style={{fontSize: '14px', marginBottom: '0'}}>&copy; 2024 Bharat Agro Oil. All Rights Reserved | Since 1978</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to top */}
      <a href="#" className="back-to-top"><i className="far fa-angle-up"></i></a>
    </>
  )
}
