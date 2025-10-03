import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonial-one light-gray-bg p-r z-1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInUp">
              <span className="sub-title">Customer Reviews</span>
              <h2>What Our Customers Say About Our Quality Oils</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80" alt="Customer Image" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
              </div>
              <div className="testimonial-content">
                <p>"The purity of Bharat Agro's mustard oil is unmatched. Traditional taste with modern packaging. Our family has been using it for generations!" </p>
                <div className="quote"><i className="fas fa-quote-right"></i></div>
                <div className="author-title">
                  <h4>Rajesh Kumar</h4>
                  <p className="position">Regular Customer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img src="https://img.freepik.com/premium-photo/shouting-triumphantly-laughing-feeling-happy-excited-while-celebrating-success_1194-493374.jpg?semt=ais_incoming&w=740&q=80" alt="Customer Image" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
              </div>
              <div className="testimonial-content">
                <p>"As a distributor, I appreciate their consistent quality and reliable supply. The products are always fresh and well-packaged." </p>
                <div className="quote"><i className="fas fa-quote-right"></i></div>
                <div className="author-title">
                  <h4>Sanjay Verma</h4>
                  <p className="position">Distributor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img src="https://img.freepik.com/premium-photo/hispanic-young-man-standing-blue-background-smiling-with-open-mouth-fingers-pointing-forcing-cheerful-smile_839833-7529.jpg?semt=ais_hybrid&w=740&q=80" alt="Customer Image" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
              </div>
              <div className="testimonial-content">
                <p>"The sunflower oil is light and perfect for daily cooking. Love that it's naturally filtered without chemical processing." </p>
                <div className="quote"><i className="fas fa-quote-right"></i></div>
                <div className="author-title">
                  <h4>Priya Sharma</h4>
                  <p className="position">Home Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
