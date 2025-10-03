import React from 'react';

const PartnersSection = () => {
  return (
    <section className="partners-section yellow-bg pt-50 pb-60 p-r z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            <div className="section-title text-center mb-30 wow fadeInUp">
              <h4>Available On Leading Platforms</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-30">
            <div className="partner-item wow fadeInDown">
              <div className="partner-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRUKDNec7DyjZ0vusRZIwpYfR6PrfZAAeRw&s" alt="Amazon" style={{width: '100%', height: '60px', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-30">
            <div className="partner-item wow fadeInUp">
              <div className="partner-img">
                <img src="https://cdn.couponlap.in/coupons/JioMart-.jpg1709530100074" alt="JioMart" style={{width: '100%', height: '60px', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-30">
            <div className="partner-item wow fadeInDown">
              <div className="partner-img">
                <img src="https://images.yourstory.com/cs/2/220356402d6d11e9aa979329348d4c3e/Flipkartimage1574850126217png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" alt="Flipkart" style={{width: '100%', height: '60px', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-30">
            <div className="partner-item wow fadeInUp">
              <div className="partner-img">
                <img src="https://play-lh.googleusercontent.com/kXJYGrvy4pvHwzw6tMgf-KPthnPDg4RvvoOTgffwSuHCUL63WVxaj3ojX3ADBS0UiD0=s256-rw" alt="Blinkit" style={{width: '100%', height: '60px', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-30">
            <div className="partner-item wow fadeInDown">
              <div className="partner-img">
                <img src="https://download.logo.wine/logo/Metro_AG/Metro_AG-Logo.wine.png" alt="Metro Wholesale" style={{width: '100%', height: '60px', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
