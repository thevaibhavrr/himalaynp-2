import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="footer-default footer-white dark-black-bg">
        <div className="container">
          <div className="footer-top wow fadeInUp">
            <div className="row">
              <div className="col-lg-4 col-md-12 footer-contact-item">
                <div className="contact-info d-flex justify-content-center">
                  <div className="site-logo text-center">
                    <Link href="/" className="brand-logo">
                      <img 
                        src="/assets/images/logo/new-logo.png" 
                        alt="Bharat Agro Oil Logo"
                        style={{maxWidth: '120px', height: 'auto'}}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 footer-contact-item">
                <div className="contact-info d-flex">
                  <div className="icon">
                    <i className="flaticon-placeholder"></i>
                  </div>
                  <div className="text">
                    <h5>Our Factory</h5>
                    <h6>Modinagar, Ghaziabad, UP</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 footer-contact-item">
                <div className="contact-info d-flex">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="text">
                    <h5>Email Us</h5>
                    <h6><a href="mailto:bharatagrooil@yahoo.in">bharatagrooil@yahoo.in</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget pt-70 pb-25">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                <div className="footer-widget about-widget mb-40 wow fadeInDown">
                  <h4 className="widget-title">About Bharat Agro Oil</h4>
                  <div className="footer-about-content">
                    <p>Since 1978, we have been dedicated to delivering purity, quality, and health in every drop. We strive to bring premium-grade edible oils to households, hotels, and businesses across India.</p>
                    <div className="social-box">
                      <h4 className="mb-15">Follow Us</h4>
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
                <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="footer-widget-nav">
                    <ul>
                      <li><Link href="/mustard-oil">Mustard Oil</Link></li>
                      <li><Link href="/soybean-oil">Soybean Oil</Link></li>
                      <li><Link href="/sunflower-oil">Sunflower Oil</Link></li>
                      <li><Link href="/groundnut-oil">Groundnut Oil</Link></li>
                      <li><Link href="/blended-oils">Blended Oils</Link></li>
                      <li><Link href="/health-benefits">Health Benefits</Link></li>
                      <li><Link href="/recipes">Recipes</Link></li>
                    </ul>
                    <ul>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/quality-control">Quality Control</Link></li>
                      <li><Link href="/services">Service page</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/distribution">Become Distributor</Link></li>
                      <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                      <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget recent-post-widget mb-40 wow fadeInDown">
                  <h4 className="widget-title">Distribution Areas</h4>
                  <div className="distribution-areas">
                    <h5>We Serve In:</h5>
                    <ul>
                      <li>Uttar Pradesh</li>
                      <li>Bihar</li>
                      <li>Delhi</li>
                      <li>Haryana</li>
                      <li>Online Pan India</li>
                    </ul>
                    <div className="certification">
                      <h5>Certifications:</h5>
                      <p>FSSAI License: 10017051002014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-newsletter footer-newsletter-one text-white wow fadeInUp">
            <div className="row">
              <div className="col-xl-3">
                <div className="footer-text">
                  <h5>Subscribe for Updates & Offers</h5>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="newsletter-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="form_group">
                          <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input type="text" className="form_control" placeholder="Phone Number" name="phone" required />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form_group">
                          <button className="main-btn btn-yellow">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="col-lg-12">
              <div className="copyright-text text-center">
                <p>&copy; 2024 Bharat Agro Oil. All Rights Reserved | Since 1978</p>
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
