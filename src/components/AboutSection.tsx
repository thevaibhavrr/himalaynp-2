import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-one pt-130 pb-100 p-r z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="about-one_content-box mb-50">
              <div className="section-title section-title-left mb-30 wow fadeInUp">
                <span className="sub-title">About Us</span>
                <h2>Trusted Name in Edible Oil Industry Since 1978</h2>
              </div>
              <div className="quote-text mb-35 wow fadeInDown" data-wow-delay=".3s">
                <p>We are a trusted name in the edible oil industry, dedicated to delivering purity, quality, and health in every drop. With our brand, we strive to bring premium-grade oils to households, hotels, and businesses.</p>
              </div>
              <div className="tab-content-box wow fadeInUp">
                <ul className="nav nav-tabs mb-20">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#mission">Our Mission</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#vision">Our Vision</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="mission">
                    <div className="content-box-gap">
                      <p>Our mission is to produce and deliver superior-quality edible oils that meet the highest standards of purity, health, and safety. We aim to delight customers through excellent packaging, reliable service, and consistent commitment to their nutritional needs.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="vision">
                    <div className="content-box-gap">
                      <p>Our vision is to be a leading edible oil brand recognized globally for quality, trust, and innovation. We aspire to set new benchmarks in customer satisfaction and health-focused products while continuously enhancing our processes, packaging, and services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="about-one_image-box p-r mb-50 pl-100">
              <div className="about-img_one wow" style={{maxWidth: '250px', height: 'auto', borderRadius: '10px'}}>
                <img src="https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg" alt="Mustard Oil" style={{width: '100%', height: 'auto', borderRadius: '10px'}} />
              </div>
              <div className="about-img_two wow fadeInRight">
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png" alt="Soybean Oil" style={{width: '100%', height: 'auto', borderRadius: '10px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
