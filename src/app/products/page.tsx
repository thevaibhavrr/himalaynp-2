'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [productCount, setProductCount] = useState(16)

  // Product data
  const products = [
    {
      id: 1,
      category: 'mustard',
      name: 'Pure Mustard Oil',
      image: 'https://www.jiomart.com/images/product/original/rvybydjull/himalayan-yellow-mustard-oil-2l-bottle-fortified-with-vitamin-a-d-2-pcs-product-images-orvybydjull-p606861253-2-202312221851.png?im=Resize=(420,420)',
      badge: 'Best Seller',
      description: 'Traditional cold-pressed mustard oil with authentic flavor and aroma. Perfect for Indian cooking and traditional recipes.',
      features: ['Cold Pressed Extraction', 'Rich in Monounsaturated Fats', 'High Smoke Point', 'Natural Preservative Properties'],
      price: '₹220',
      size: '1 Liter'
    },
    {
      id: 2,
      category: 'sunflower',
      name: 'Premium Sunflower Oil',
      image: 'https://m.media-amazon.com/images/I/71RvGpDW8PL._UF894,1000_QL80_.jpg',
      badge: 'Popular',
      description: 'Light and versatile cooking oil perfect for all types of cooking. Rich in vitamin E and low in saturated fats.',
      features: ['High in Vitamin E', 'Low Saturated Fat', 'Neutral Flavor', 'High Smoke Point'],
      price: '₹180',
      size: '1 Liter'
    },
    {
      id: 3,
      category: 'soybean',
      name: 'Pure Soybean Oil',
      image: 'https://m.media-amazon.com/images/I/B1PnQ54E-HL._UF894,1000_QL80_.jpg',
      badge: 'Healthy',
      description: 'Neutral-tasting oil ideal for frying and cooking. Contains omega-3 fatty acids and is cholesterol-free.',
      features: ['Omega-3 Fatty Acids', 'Cholesterol Free', 'Neutral Taste', 'Versatile Cooking'],
      price: '₹160',
      size: '1 Liter'
    },
    {
      id: 4,
      category: 'groundnut',
      name: 'Premium Groundnut Oil',
      image: 'https://m.media-amazon.com/images/I/615O5Zi1NtL._UF894,1000_QL80_.jpg',
      badge: 'Traditional',
      description: 'Traditional groundnut oil with rich flavor and aroma. Perfect for Indian cooking and traditional recipes.',
      features: ['Rich Flavor', 'High Smoke Point', 'Traditional Taste', 'Natural Aroma'],
      price: '₹200',
      size: '1 Liter'
    },
    {
      id: 5,
      category: 'sesame',
      name: 'Pure Sesame Oil',
      image: 'https://www.jiomart.com/images/product/original/rvq91jjsaj/himalayan-yellow-mustard-oil-5l-tin-fortified-with-vitamin-a-d-product-images-orvq91jjsaj-p594025363-0-202209241256.jpg?im=Resize=(1000,1000)',
      badge: 'Premium',
      description: 'Cold-pressed sesame oil with rich aroma and flavor. Perfect for seasoning and traditional cooking.',
      features: ['Cold Pressed', 'Rich Aroma', 'Antioxidant Rich', 'Traditional Method'],
      price: '₹250',
      size: '500ml'
    },
    {
      id: 6,
      category: 'blended',
      name: 'Premium Blended Oils',
      image: 'https://pansari.co.in/wp-content/uploads/2025/06/Cold-pressed-vs-refined-oils-Whats-better-1024x536.jpg',
      badge: 'Special',
      description: 'Carefully crafted blend of multiple oils for balanced nutrition and enhanced cooking experience.',
      features: ['Balanced Nutrition', 'Multiple Oil Blend', 'Enhanced Flavor', 'Health Benefits'],
      price: '₹190',
      size: '1 Liter'
    },
    {
      id: 7,
      category: 'coconut',
      name: 'Virgin Coconut Oil',
      image: 'https://m.media-amazon.com/images/I/81ZDJN2sMgL._UF350,350_QL80_.jpg',
      badge: 'Organic',
      description: 'Pure virgin coconut oil with natural aroma and health benefits. Perfect for cooking and beauty applications.',
      features: ['Virgin Quality', 'Natural Aroma', 'Health Benefits', 'Multi-purpose Use'],
      price: '₹280',
      size: '500ml'
    },
    {
      id: 8,
      category: 'olive',
      name: 'Extra Virgin Olive Oil',
      image: 'https://m.media-amazon.com/images/I/81Kvxhuu5qL._UF350,350_QL80_.jpg',
      badge: 'Premium',
      description: 'Premium quality extra virgin olive oil from Mediterranean region. Perfect for salads and light cooking.',
      features: ['First Cold Press', 'Mediterranean Quality', 'Rich in Antioxidants', 'Perfect for Salads'],
      price: '₹450',
      size: '500ml'
    },
    {
      id: 9,
      category: 'ricebran',
      name: 'Rice Bran Oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308418319/CC/BQ/UC/62947621/100-pure-cold-pressed-white-sesame-seed-oil-500x500.jpg',
      badge: 'Healthy',
      description: 'Light and healthy rice bran oil with high smoke point. Ideal for deep frying and high-temperature cooking.',
      features: ['High Smoke Point', 'Heart Healthy', 'Light & Neutral', 'Perfect for Frying'],
      price: '₹190',
      size: '1 Liter'
    },
    {
      id: 10,
      category: 'corn',
      name: 'Corn Oil',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/007/681/376/small/sesame-oil-poster-vector.jpg',
      badge: 'Versatile',
      description: 'Versatile corn oil with light flavor and high smoke point. Perfect for all types of cooking applications.',
      features: ['Light Flavor', 'High Smoke Point', 'Versatile Cooking', 'Budget Friendly'],
      price: '₹120',
      size: '1 Liter'
    },
    {
      id: 11,
      category: 'palm',
      name: 'Palm Oil',
      image: 'https://c8.alamy.com/comp/2AK7099/sunflower-oil-cooking-oils-bottles-background-2AK7099.jpg',
      badge: 'Industrial',
      description: 'High-quality palm oil with excellent stability and long shelf life. Ideal for commercial and industrial use.',
      features: ['High Stability', 'Long Shelf Life', 'Industrial Grade', 'Bulk Packaging'],
      price: '₹85',
      size: '5 Liter'
    },
    {
      id: 12,
      category: 'cottonseed',
      name: 'Cottonseed Oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/532500801/YE/YN/ED/43229989/sesame-seed-oil-500x500.jpeg',
      badge: 'Commercial',
      description: 'Neutral-tasting cottonseed oil perfect for commercial cooking and food processing applications.',
      features: ['Neutral Taste', 'High Stability', 'Commercial Use', 'Bulk Supply'],
      price: '₹95',
      size: '5 Liter'
    },
    {
      id: 13,
      category: 'mustard',
      name: 'Premium Mustard Oil',
      image: 'https://rukminim2.flixcart.com/image/480/480/k73nlow0/edible-oil/j/y/t/1-yellow-mustard-oil-1-litre-pet-bottle-pet-bottle-mustard-oil-original-imafpf7zjtrpu5fn.jpeg?q=90',
      badge: 'Premium',
      description: 'Extra virgin mustard oil with traditional kolhu extraction method. Rich aroma and authentic taste.',
      features: ['Extra Virgin', 'Traditional Kolhu', 'Rich Aroma', 'Premium Quality'],
      price: '₹250',
      size: '1 Liter'
    },
    {
      id: 14,
      category: 'sunflower',
      name: 'Refined Sunflower Oil',
      image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/edible-oil/i/f/s/10-sunflower-oil-5-ltr-x-2-pack-pure-nutrient-rich-cooking-oil-original-imah9gsdz5tz7huf.jpeg?q=90',
      badge: 'Refined',
      description: 'Light and clear refined sunflower oil perfect for daily cooking. Neutral flavor and high smoke point.',
      features: ['Light & Clear', 'Neutral Flavor', 'High Smoke Point', 'Daily Cooking'],
      price: '₹140',
      size: '1 Liter'
    },
    {
      id: 15,
      category: 'soybean',
      name: 'Organic Soybean Oil',
      image: 'https://pansari.co.in/wp-content/uploads/2025/06/Cold-pressed-vs-refined-oils-Whats-better-1024x536.jpg',
      badge: 'Organic',
      description: 'Certified organic soybean oil with non-GMO ingredients. Heart-healthy and perfect for health-conscious consumers.',
      features: ['Organic Certified', 'Non-GMO', 'Heart Healthy', 'Premium Quality'],
      price: '₹180',
      size: '1 Liter'
    },
    {
      id: 16,
      category: 'groundnut',
      name: 'Cold Pressed Groundnut Oil',
      image: 'https://m.media-amazon.com/images/I/81ZDJN2sMgL._UF350,350_QL80_.jpg',
      badge: 'Cold Pressed',
      description: 'Traditional cold-pressed groundnut oil with natural flavor and rich nutrients. Perfect for authentic cooking.',
      features: ['Cold Pressed', 'Natural Flavor', 'Rich Nutrients', 'Traditional Method'],
      price: '₹220',
      size: '1 Liter'
    },
    {
      id: 17,
      category: 'blended',
      name: 'Health Mix Oil',
      image: 'https://m.media-amazon.com/images/I/81Kvxhuu5qL._UF350,350_QL80_.jpg',
      badge: 'Health Mix',
      description: 'Specially blended multi-oil combination for balanced nutrition. Perfect blend of different healthy oils.',
      features: ['Multi-Oil Blend', 'Balanced Nutrition', 'Heart Healthy', 'Daily Use'],
      price: '₹170',
      size: '1 Liter'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'mustard', label: 'Mustard Oil' },
    { key: 'sunflower', label: 'Sunflower Oil' },
    { key: 'soybean', label: 'Soybean Oil' },
    { key: 'groundnut', label: 'Groundnut Oil' },
    { key: 'blended', label: 'Blended Oils' },
    { key: 'coconut', label: 'Coconut Oil' },
    { key: 'olive', label: 'Olive Oil' },
    { key: 'ricebran', label: 'Rice Bran Oil' },
    { key: 'corn', label: 'Corn Oil' },
    { key: 'palm', label: 'Palm Oil' },
    { key: 'cottonseed', label: 'Cottonseed Oil' },
    { key: 'sesame', label: 'Sesame Oil' }
  ]

  // Filter products based on active filter and search term
  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  // Update product count when filter or search changes
  useEffect(() => {
    setProductCount(filteredProducts.length)
  }, [activeFilter, searchTerm])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setSearchTerm('') // Clear search when filter changes
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <>
      <Header />
      
      {/* Product Hero Section */}
      <section className="product-hero" style={{
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '120px 0 80px',
        textAlign: 'center',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <h1>Our Premium Products</h1> */}
              {/* <p>Pure, natural, and healthy cooking oils for your family</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="category-filter" style={{background: '#f8f9fa', padding: '40px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-categories" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
                {categories.map(category => (
                  <button
                    key={category.key}
                    className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                    onClick={() => handleFilterChange(category.key)}
                    style={{
                      background: activeFilter === category.key ? '#eece38' : 'transparent',
                      border: '2px solid #eece38',
                      color: activeFilter === category.key ? '#000' : '#333',
                      padding: '10px 25px',
                      borderRadius: '25px',
                      margin: '0 5px 10px',
                      transition: 'all 0.3s ease',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="search-box" style={{position: 'relative', maxWidth: '400px'}}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="form-control"
                  placeholder="Search products..."
                  style={{
                    padding: '12px 45px 12px 15px',
                    border: '2px solid #e9ecef',
                    borderRadius: '25px',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                />
                <i className="fas fa-search" style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6c757d',
                  fontSize: '16px'
                }}></i>
                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    style={{
                      position: 'absolute',
                      right: '45px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-count" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%'}}>
                <span className="badge" style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #eece38, #ff8f00)',
                  color: '#000',
                  borderRadius: '20px'
                }}>
                  {productCount} products found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span className="sub-title">Premium Quality</span>
                <h2>Our Edible Oil Collection</h2>
                <p>Pure, natural oils for healthy cooking and better living</p>
              </div>
            </div>
          </div>
          <div className="row" id="product-grid" style={{gap: '30px 0'}}>
            {filteredProducts.map(product => (
              <div key={product.id} className="col-lg-4 col-md-6" data-category={product.category} style={{marginBottom: '30px'}}>
                <div className="product-card" style={{
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'white'
                }}>
                  <div className="product-image" style={{height: '250px', overflow: 'hidden', borderRadius: '15px 15px 0 0'}}>
                    <img 
                      src={product.image}
                      alt={product.name}
                      style={{width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease'}}
                    />
                  </div>
                  <div className="product-content" style={{padding: '25px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <span className="product-badge" style={{background: '#eece38', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, display: 'inline-block', marginBottom: '15px'}}>{product.badge}</span>
                    <h3 className="product-title" style={{fontSize: '22px', fontWeight: 600, marginBottom: '15px', color: '#333'}}>{product.name}</h3>
                    <p>{product.description}</p>
                    <ul className="product-features" style={{listStyle: 'none', padding: 0, margin: '0 0 20px'}}>
                      {product.features.map((feature, index) => (
                        <li key={index} style={{padding: '5px 0', color: '#666', position: 'relative', paddingLeft: '20px'}}>
                          <span style={{color: '#eece38', fontWeight: 'bold', position: 'absolute', left: 0}}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="product-meta" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingTop: '15px', borderTop: '1px solid #eee'}}>
                      <div>
                        <div className="product-price" style={{fontSize: '24px', fontWeight: 700, color: '#333'}}>{product.price}</div>
                        <div className="product-size" style={{color: '#666', fontSize: '14px'}}>{product.size}</div>
                      </div>
                    </div>
                    <a href="/contact" className="product-btn" style={{background: '#eece38', color: '#000', border: 'none', padding: '12px 30px', borderRadius: '5px', fontWeight: 600, transition: 'all 0.3s ease', width: '100%', textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: 'auto'}}>Inquire Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="health-benefits" style={{background: '#f8f9fa', padding: '80px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title" style={{position: 'relative', marginBottom: '50px', textAlign: 'center'}}>
                <span className="sub-title">Why Choose Our Oils</span>
                <h2>Health Benefits</h2>
                <p>Discover the nutritional advantages of our pure edible oils</p>
                <div style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  background: '#eece38'
                }}></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card" style={{
                textAlign: 'center',
                padding: '30px',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}>
                <div className="benefit-icon" style={{fontSize: '40px', color: '#eece38', marginBottom: '20px'}}>
                  <i className="flaticon-heart"></i>
                </div>
                <h4>Heart Healthy</h4>
                <p>Our oils are rich in monounsaturated fats that support cardiovascular health and help maintain healthy cholesterol levels.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card" style={{
                textAlign: 'center',
                padding: '30px',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}>
                <div className="benefit-icon" style={{fontSize: '40px', color: '#eece38', marginBottom: '20px'}}>
                  <i className="flaticon-immunity"></i>
                </div>
                <h4>Rich in Antioxidants</h4>
                <p>Packed with natural antioxidants that help combat free radicals and support overall immune system function.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card" style={{
                textAlign: 'center',
                padding: '30px',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}>
                <div className="benefit-icon" style={{fontSize: '40px', color: '#eece38', marginBottom: '20px'}}>
                  <i className="flaticon-digestion"></i>
                </div>
                <h4>Easy Digestion</h4>
                <p>Light and easily digestible oils that don't burden your digestive system while providing essential nutrients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="manufacturing-process" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title" style={{position: 'relative', marginBottom: '50px', textAlign: 'center'}}>
                <span className="sub-title">Our Process</span>
                <h2>Traditional Manufacturing</h2>
                <p>Combining traditional methods with modern technology for the purest oils</p>
                <div style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  background: '#eece38'
                }}></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="process-step" style={{textAlign: 'center', padding: '30px'}}>
                <div className="step-number" style={{
                  width: '60px',
                  height: '60px',
                  background: '#eece38',
                  color: '#000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>1</div>
                <h4>Seed Selection</h4>
                <p>Carefully selected premium quality seeds from trusted farmers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step" style={{textAlign: 'center', padding: '30px'}}>
                <div className="step-number" style={{
                  width: '60px',
                  height: '60px',
                  background: '#eece38',
                  color: '#000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>2</div>
                <h4>Traditional Extraction</h4>
                <p>Using traditional Kolhu method for cold-pressed extraction</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step" style={{textAlign: 'center', padding: '30px'}}>
                <div className="step-number" style={{
                  width: '60px',
                  height: '60px',
                  background: '#eece38',
                  color: '#000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>3</div>
                <h4>Natural Filtration</h4>
                <p>No chemical refining - naturally filtered for purity</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="process-step" style={{textAlign: 'center', padding: '30px'}}>
                <div className="step-number" style={{
                  width: '60px',
                  height: '60px',
                  background: '#eece38',
                  color: '#000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>4</div>
                <h4>Quality Testing</h4>
                <p>Rigorous quality control and FSSAI certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
