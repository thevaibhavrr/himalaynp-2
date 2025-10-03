import React from 'react';
import Link from 'next/link';

const ProductGallery = () => {
  return (
    <section className="projects-section pt-130 pb-95 p-r z-1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-9">
            <div className="section-title section-title-left mb-60 wow fadeInLeft">
              <span className="sub-title">Product Gallery</span>
              <h2>Explore Our Premium Range of Edible Oils</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-3">
            <div className="project-arrows mb-60 float-md-right wow fadeInRight"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img src="https://www.jiomart.com/images/product/original/rvybydjull/himalayan-yellow-mustard-oil-2l-bottle-fortified-with-vitamin-a-d-2-pcs-product-images-orvybydjull-p606861253-2-202312221851.png?im=Resize=(420,420)" alt="Mustard Oil" style={{width: '100%', height: '300px', objectFit: 'contain'}} />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title"><Link href="/products">Pure Mustard Oil</Link></h3>
                    <p><Link href="#">Traditional</Link>,<Link href="#">Healthy</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img src="https://m.media-amazon.com/images/I/B1PnQ54E-HL._UF894,1000_QL80_.jpg" alt="Soybean Oil" style={{width: '100%', height: '300px', objectFit: 'contain'}} />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title"><Link href="/products">Soybean Oil</Link></h3>
                    <p><Link href="#">Heart Healthy</Link>,<Link href="#">Light</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img src="https://m.media-amazon.com/images/I/71RvGpDW8PL._UF894,1000_QL80_.jpg" alt="Sunflower Oil" style={{width: '100%', height: '300px', objectFit: 'contain'}} />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title"><Link href="/products">Sunflower Oil</Link></h3>
                    <p><Link href="#">Light</Link>,<Link href="#">Healthy</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img src="https://m.media-amazon.com/images/I/615O5Zi1NtL._UF894,1000_QL80_.jpg" alt="Groundnut Oil" style={{width: '100%', height: '300px', objectFit: 'contain'}} />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title"><Link href="/products">Groundnut Oil</Link></h3>
                    <p><Link href="#">Rich Flavor</Link>,<Link href="#">Natural</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img src="https://www.jiomart.com/images/product/original/rvq91jjsaj/himalayan-yellow-mustard-oil-5l-tin-fortified-with-vitamin-a-d-product-images-orvq91jjsaj-p594025363-0-202209241256.jpg?im=Resize=(1000,1000)" alt="Blended Oil" style={{width: '100%', height: '300px', objectFit: 'contain'}} />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title"><Link href="/products">Blended Oil</Link></h3>
                    <p><Link href="#">Balanced</Link>,<Link href="#">Healthy</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img src="https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg" alt="Premium Oil" style={{width: '100%', height: '300px', objectFit: 'contain'}} />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title"><Link href="/products">Premium Oil Collection</Link></h3>
                    <p><Link href="#">Premium</Link>,<Link href="#">Quality</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
