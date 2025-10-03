import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'
import PartnersSection from '@/components/PartnersSection'
import ProductGallery from '@/components/ProductGallery'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="hero-area-one">
        <div className="hero-slider-one">
          <div className="single-slider homa_page_banner">
            <div className="image-layer bg_cover" style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')"}}></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span className="tag-line" data-animation="fadeInDown" data-delay=".4s"></span>
                    <h1 data-animation="fadeInUp" data-delay=".5s"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider homa_page_banner">
            <div className="image-layer bg_cover" style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b6f3b58-0e49-41b3-b041-2a95c525b2b9.__CR0,0,970,600_PT0_SX970_V1___.jpg')"}}></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span className="tag-line" data-animation="fadeInDown" data-delay=".4s"></span>
                    <h1 data-animation="fadeInUp" data-delay=".5s"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider homa_page_banner">
            <div className="image-layer bg_cover" style={{backgroundImage: "url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png')"}}></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span className="tag-line" data-animation="fadeInDown" data-delay=".4s"></span>
                    <h1 data-animation="fadeInUp" data-delay=".5s"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Arrows */}
          <button className="slick-arrow prev" type="button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slick-arrow next" type="button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <section className="service-one dark-black-bg p-130 pb-125 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                <span className="sub-title"><i className="fas fa-sun"></i> Our Products <i className="fas fa-sun ps-1"></i></span>
                <h2>Premium Quality Edible Oils For Healthy Living</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <div className="text">
                  <h3 className="title"><Link href="/products">Mustard Oil<br />Pure & Natural</Link></h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="text">
                  <h3 className="title"><Link href="/products">Soybean Oil<br />Heart Healthy</Link></h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i className="fas fa-sun"></i>
                </div>
                <div className="text">
                  <h3 className="title"><Link href="/products">Sunflower Oil<br />Light & Healthy</Link></h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <div className="text">
                  <h3 className="title"><Link href="/products">Groundnut Oil<br />Rich Flavor</Link></h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <div className="text">
                  <h3 className="title"><Link href="/products">Blended Oils<br />Perfect Balance</Link></h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i className="fas fa-boxes"></i>
                </div>
                <div className="text">
                  <h3 className="title"><Link href="/products">All Products<br />Complete Range</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="play-one_content-box bg_cover wow fadeInDown" style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/01/04/09/67/360_F_104096754_n7JbqBjagQlM5RJ43YRftGTQ9s7D2evg.jpg')"}}>
                <a href="https://youtu.be/UTN60h5L5rc?si=3wLPaNwXeHiRdsO3" className="video-popup"><i className="fas fa-play"></i></a>
                <div className="video-content">
                  <h4 style={{color: 'white'}}>Our Production Process</h4>
                  <p style={{color: 'white'}}>See how we make pure, natural oils</p>
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
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
                  <div className="counter-inner">
                    <div className="text">
                      <h2 className="number"><span className="count">46</span>+</h2>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
                  <div className="counter-inner">
                    <div className="text">
                      <h2 className="number"><span className="count">2000</span>+</h2>
                      <p>MT Monthly Production</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
                  <div className="counter-inner">
                    <div className="text">
                      <h2 className="number"><span className="count">500</span>+</h2>
                      <p>Happy Distributors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
                  <div className="counter-inner">
                    <div className="text">
                      <h2 className="number"><span className="count">5</span>+</h2>
                      <p>States Coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="popular-service p-r z-1 pt-130 pb-135">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title"><i className="fas fa-sun text-warning"></i> Why Choose Us <i className="fas fa-sun ps-1 text-warning"></i></span>
                <h2>What Makes Our Edible Oils Special</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <img src="/assets/images/icon/icon-1.png" alt="Traditional Icon" />
                </div>
                <div className="text">
                  <h3><Link href="/services">Traditional Process</Link></h3>
                  <p>Using traditional Kolhu extraction for pure, natural oil</p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <img src="/assets/images/icon/icon-2.png" alt="Natural Icon" />
                </div>
                <div className="text">
                  <h3><Link href="/services">Natural Filtration</Link></h3>
                  <p>No chemical refining - naturally filtered for health</p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <img src="/assets/images/icon/icon-3.png" alt="Quality Icon" />
                </div>
                <div className="text">
                  <h3><Link href="/services">Premium Quality</Link></h3>
                  <p>FSSAI certified with highest quality standards</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-holder mb-50 wow fadeInDown">
                <img src="https://healthybuddha.in/image/catalog/cat%20icon/new%20addition%20latest.jpg" alt="Oil Benefits" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <img src="/assets/images/icon/icon-4.png" alt="Healthy Icon" />
                </div>
                <div className="text">
                  <h3><Link href="/recipes">Health Benefits</Link></h3>
                  <p>Rich in nutrients and essential fatty acids</p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl fadeInUp">
                <div className="icon">
                  <img src="/assets/images/icon/icon-5.png" alt="Packaging Icon" />
                </div>
                <div className="text">
                  <h3><Link href="/products">Advanced Packaging</Link></h3>
                  <p>Modern packaging to maintain freshness</p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <img src="/assets/images/icon/icon-6.png" alt="Distribution Icon" />
                </div>
                <div className="text">
                  <h3><Link href="/contact">Wide Distribution</Link></h3>
                  <p>Available across multiple states and online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Section */}
      <section className="offer-section-one p-r z-2">
        <div className="container-fluid">
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
                <div className="section-title section-title-left mb-20 wow fadeInUp">
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

      {/* Contact Section */}
      <section className="contact-one p-r z-2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', position: 'relative'}}>
        <div className="contact-overlay" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)', zIndex: 1}}></div>
        <div className="container-fluid" style={{width: '100%', padding: 0, position: 'relative', zIndex: 2}}>
          <div className="row no-gutters" style={{width: '100%', margin: 0}}>
            <div className="col-lg-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '60px 40px', backdropFilter: 'blur(10px)'}}>
              <div className="contact-one_content-box wow fadeInLeft">
                <div className="contact-wrapper">
                  <div className="section-title section-title-left mb-40">
                    <span className="sub-title">Get In Touch</span>
                    <h2>Interested in Our Products? Become a Distributor Today!</h2>
                  </div>
                  <div className="contact-form">
                    <form id="contactForm" action="/api/contact" name="contactForm" method="post">
                      <div className="form_group form-group">
                        <input type="text" className="form_control" placeholder="Full Name" id="name" name="name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form_group form-group">
                        <input type="email" className="form_control" placeholder="Email Address" id="email" name="email" required data-error="Please enter your Email Address" />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form_group form-group">
                        <input type="tel" className="form_control" placeholder="Phone Number" id="phone" name="phone" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form_group form-group">
                        <input type="text" className="form_control" placeholder="Business Location" id="location" name="location" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form_group form-group">
                        <textarea className="form_control" placeholder="Your Message or Business Inquiry" id="message" name="message" required data-error="Please enter your Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form_group form-group">
                        <button type="submit" className="main-btn btn-yellow">Send Inquiry</button>
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '60px 40px', backdropFilter: 'blur(10px)'}}>
              <div className="contact-one_information-box wow fadeInRight" style={{background: 'transparent', boxShadow: 'none'}}>
                <div className="information-box">
                  <h3>Contact Information</h3>
                  <p>Get in touch with us for bulk orders, distribution inquiries, or any questions about our products.</p>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Factory Address</span>
                      <h5>Khasra No. 118 & 120, Sikeda Road Industrial Area, Modinagar 201204, Distt. GZB, UP</h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-email"></i>
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Email Address</span>
                      <h5><a href="mailto:bharatagrooil@yahoo.in">bharatagrooil@yahoo.in</a></h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Phone Number</span>
                      <h5><a href="tel:+919219450111">+91 9219450111</a></h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">WhatsApp</span>
                      <h5><a href="https://wa.me/919219450111">+91 9219450111</a></h5>
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
              <div className="section-title section-title-left mb-60 wow fadeInLeft">
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSI-IIgSmtkTTWVkaMh8IbFn7sxSRuYJl7g&s" alt="Health Benefits" />
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
                  <img src="https://pbs.twimg.com/media/FnPwQgVWAAArqle.jpg" alt="Cooking Tips" />
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVuGs0mGSbOtExm_szLMCHqfZSR-3ZJF4WcW2hjTI9o7UhgwPigQ0WUEx4XUOqD9yqi0&usqp=CAU" alt="Recipes" />
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