import React from 'react';
import Link from 'next/link';

const ProductGallery = () => {
  return (
    <section className="projects-section pt-10 pb-95 p-r z-1" style={{
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.05) 0%, transparent 50%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInUp">
              <span className="sub-title" style={{
                fontSize: '18px',
                color: '#ffc107',
                fontWeight: '600',
                marginBottom: '15px',
                display: 'inline-block'
              }}>
                Product Gallery
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bold',
                color: '#333',
                lineHeight: '1.3'
              }}>
                Explore Our Premium Range of Edible Oils
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                marginTop: '20px',
                maxWidth: '600px',
                margin: '20px auto 0'
              }}>
                Discover our complete collection of pure, natural oils crafted with traditional methods
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4" style={{gap: '30px 0'}}>
          <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: '30px'}}>
            <div className="project-item wow fadeInUp" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
              <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://www.jiomart.com/images/product/original/rvybydjull/himalayan-yellow-mustard-oil-2l-bottle-fortified-with-vitamin-a-d-2-pcs-product-images-orvybydjull-p606861253-2-202312221851.png?im=Resize=(420,420)"
                  alt="Mustard Oil"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    padding: '20px',
                    backgroundColor: '#fef7e0'
                  }}
                />
                <div className="hover-portfolio" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 143, 0, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                  <div className="hover-content" style={{ textAlign: 'center', color: 'white' }}>
                    <h3 className="title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Pure Mustard Oil</Link>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Traditional</Link>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Healthy</Link>
                    </p>
                    <Link href="/products" className="main-btn" style={{
                      padding: '8px 20px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#ff8f00',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: '30px'}}>
            <div className="project-item wow fadeInDown" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
              <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://m.media-amazon.com/images/I/B1PnQ54E-HL._UF894,1000_QL80_.jpg"
                  alt="Soybean Oil"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    padding: '20px',
                    backgroundColor: '#fef7e0'
                  }}
                />
                <div className="hover-portfolio" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 143, 0, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                  <div className="hover-content" style={{ textAlign: 'center', color: 'white' }}>
                    <h3 className="title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Soybean Oil</Link>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Heart Healthy</Link>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Light</Link>
                    </p>
                    <Link href="/products" className="main-btn" style={{
                      padding: '8px 20px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#ff8f00',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: '30px'}}>
            <div className="project-item wow fadeInUp" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
              <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://m.media-amazon.com/images/I/71RvGpDW8PL._UF894,1000_QL80_.jpg"
                  alt="Sunflower Oil"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    padding: '20px',
                    backgroundColor: '#fef7e0'
                  }}
                />
                <div className="hover-portfolio" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 143, 0, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                  <div className="hover-content" style={{ textAlign: 'center', color: 'white' }}>
                    <h3 className="title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Sunflower Oil</Link>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Light</Link>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Healthy</Link>
                    </p>
                    <Link href="/products" className="main-btn" style={{
                      padding: '8px 20px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#ff8f00',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: '30px'}}>
            <div className="project-item wow fadeInDown" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
              <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://m.media-amazon.com/images/I/615O5Zi1NtL._UF894,1000_QL80_.jpg"
                  alt="Groundnut Oil"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    padding: '20px',
                    backgroundColor: '#fef7e0'
                  }}
                />
                <div className="hover-portfolio" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 143, 0, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                  <div className="hover-content" style={{ textAlign: 'center', color: 'white' }}>
                    <h3 className="title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Groundnut Oil</Link>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Rich Flavor</Link>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Natural</Link>
                    </p>
                    <Link href="/products" className="main-btn" style={{
                      padding: '8px 20px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#ff8f00',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: '30px'}}>
            <div className="project-item wow fadeInUp" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
              <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://www.jiomart.com/images/product/original/rvq91jjsaj/himalayan-yellow-mustard-oil-5l-tin-fortified-with-vitamin-a-d-product-images-orvq91jjsaj-p594025363-0-202209241256.jpg?im=Resize=(1000,1000)"
                  alt="Blended Oil"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    padding: '20px',
                    backgroundColor: '#fef7e0'
                  }}
                />
                <div className="hover-portfolio" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 143, 0, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                  <div className="hover-content" style={{ textAlign: 'center', color: 'white' }}>
                    <h3 className="title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Blended Oil</Link>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Balanced</Link>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Healthy</Link>
                    </p>
                    <Link href="/products" className="main-btn" style={{
                      padding: '8px 20px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#ff8f00',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: '30px'}}>
            <div className="project-item wow fadeInDown" style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.2)';
                e.currentTarget.style.borderColor = '#ffc107';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.2)';
              }}>
              <div className="img-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg"
                  alt="Premium Oil"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    padding: '20px',
                    backgroundColor: '#fef7e0'
                  }}
                />
                <div className="hover-portfolio" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 143, 0, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                  <div className="hover-content" style={{ textAlign: 'center', color: 'white' }}>
                    <h3 className="title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Premium Oil Collection</Link>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Premium</Link>
                      <Link href="#" style={{ color: 'white', textDecoration: 'none' }}>Quality</Link>
                    </p>
                    <Link href="/products" className="main-btn" style={{
                      padding: '8px 20px',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#ff8f00',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      View Details
                    </Link>
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
