'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Recipes() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Recipe data
  const recipes = [
    // Mustard Oil Recipes
    {
      id: 1,
      category: 'mustard',
      name: 'Bengali Mustard Fish Curry',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '45 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'A traditional Bengali fish curry where mustard oil enhances the flavors of fish and spices.',
      tags: ['Non-Veg', 'Traditional', 'Spicy']
    },
    {
      id: 2,
      category: 'mustard',
      name: 'Aloo Posto - Potato in Poppy Seed Paste',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '30 mins',
      servings: '4 servings',
      difficulty: 'Easy',
      description: 'A classic Bengali vegetarian dish where potatoes are cooked with poppy seed paste in mustard oil.',
      tags: ['Vegetarian', 'Traditional', 'Mild']
    },
    {
      id: 3,
      category: 'mustard',
      name: 'Chicken Kasha - Bengali Style',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '50 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'A dry chicken preparation where mustard oil brings out the robust flavors of spices.',
      tags: ['Non-Veg', 'Traditional', 'Spicy']
    },
    // Sunflower Oil Recipes
    {
      id: 4,
      category: 'sunflower',
      name: 'Healthy Stir-Fry Vegetables',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '20 mins',
      servings: '2 servings',
      difficulty: 'Easy',
      description: 'A quick and nutritious vegetable stir-fry using light sunflower oil that doesn\'t overpower the natural flavors.',
      tags: ['Vegetarian', 'Healthy', 'Quick']
    },
    {
      id: 5,
      category: 'sunflower',
      name: 'Lemon Herb Grilled Chicken',
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '40 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'Juicy grilled chicken marinated with lemon and herbs, cooked in sunflower oil for a light, healthy meal.',
      tags: ['Non-Veg', 'Healthy', 'Grilled']
    },
    {
      id: 6,
      category: 'sunflower',
      name: 'Homemade Salad Dressing',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '5 mins',
      servings: '6 servings',
      difficulty: 'Easy',
      description: 'A light and healthy salad dressing made with sunflower oil, lemon juice, and herbs.',
      tags: ['Vegetarian', 'Healthy', 'Quick']
    },
    // Soybean Oil Recipes
    {
      id: 7,
      category: 'soybean',
      name: 'Paneer Butter Masala',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '35 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'A rich and creamy North Indian delicacy where soybean oil helps create the perfect texture.',
      tags: ['Vegetarian', 'North Indian', 'Creamy']
    },
    {
      id: 8,
      category: 'soybean',
      name: 'Vegetable Fried Rice',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '25 mins',
      servings: '3 servings',
      difficulty: 'Easy',
      description: 'A quick and tasty fried rice preparation where soybean oil adds a neutral base for all flavors.',
      tags: ['Vegetarian', 'Asian', 'Quick']
    },
    {
      id: 9,
      category: 'soybean',
      name: 'Crispy Vegetable Pakoras',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '30 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'Perfectly fried vegetable fritters using soybean oil for a light, crispy texture.',
      tags: ['Vegetarian', 'Snack', 'Fried']
    },
    // Groundnut Oil Recipes
    {
      id: 10,
      category: 'groundnut',
      name: 'Hyderabadi Chicken Biryani',
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '60 mins',
      servings: '6 servings',
      difficulty: 'Hard',
      description: 'A fragrant and flavorful biryani where groundnut oil enhances the richness of spices.',
      tags: ['Non-Veg', 'Traditional', 'Festive']
    },
    {
      id: 11,
      category: 'groundnut',
      name: 'South Indian Vegetable Kurma',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '40 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'A creamy coconut-based vegetable curry where groundnut oil adds a nutty flavor.',
      tags: ['Vegetarian', 'South Indian', 'Creamy']
    },
    {
      id: 12,
      category: 'groundnut',
      name: 'Crispy Murukku',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '45 mins',
      servings: '8 servings',
      difficulty: 'Medium',
      description: 'Traditional South Indian snack made with rice flour and fried in groundnut oil for perfect crispiness.',
      tags: ['Vegetarian', 'Snack', 'Traditional']
    },
    // Blended Oil Recipes
    {
      id: 13,
      category: 'blended',
      name: 'Mediterranean Quinoa Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '20 mins',
      servings: '2 servings',
      difficulty: 'Easy',
      description: 'A healthy and refreshing salad with a blended oil dressing that balances flavors perfectly.',
      tags: ['Vegetarian', 'Healthy', 'International']
    },
    {
      id: 14,
      category: 'blended',
      name: 'Healthy Stuffed Paratha',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '40 mins',
      servings: '4 servings',
      difficulty: 'Medium',
      description: 'Whole wheat parathas stuffed with vegetables and cooked with blended oil for balanced nutrition.',
      tags: ['Vegetarian', 'Healthy', 'Breakfast']
    },
    {
      id: 15,
      category: 'blended',
      name: 'Herb Grilled Vegetables',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '25 mins',
      servings: '4 servings',
      difficulty: 'Easy',
      description: 'Seasonal vegetables grilled to perfection with a blended oil and herb marinade.',
      tags: ['Vegetarian', 'Healthy', 'Grilled']
    }
  ]

  const categories = [
    { key: 'all', label: 'All Recipes' },
    { key: 'mustard', label: 'Mustard Oil' },
    { key: 'sunflower', label: 'Sunflower Oil' },
    { key: 'soybean', label: 'Soybean Oil' },
    { key: 'groundnut', label: 'Groundnut Oil' },
    { key: 'blended', label: 'Blended Oil' }
  ]

  // Filter recipes based on active filter
  const filteredRecipes = recipes.filter(recipe => 
    activeFilter === 'all' || recipe.category === activeFilter
  )

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner bg_cover position-relative z-1"
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
          <img src="/assets/images/logo/new-logo.png" alt="Bharat Agro Oil Logo" style={{maxWidth: '120px'}} />
          <h3>Bharat Agro Oil</h3>
          <p>Premium Edible Oils Since 1978</p>
        </div>
      </section>

      {/* Recipes Introduction Section */}
      <section className="about-section position-relative z-1 pt-100 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content-box mb-50">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Healthy Cooking</span>
                  <h2>Delicious Recipes with Our Premium Oils</h2>
                </div>
                <p>Discover the art of healthy cooking with Bharat Agro Oil's premium edible oils. Our naturally filtered oils enhance the flavor and nutritional value of your favorite dishes while promoting heart health and overall wellness.</p>
                <p>From traditional Indian recipes to modern fusion dishes, our oils are perfect for every cooking style - frying, sautéing, dressing, and more.</p>
                <div className="about-button mt-4">
                  <a href="#recipe-categories" className="main-btn btn-yellow">Explore Recipes</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one_image-box position-relative mb-50 pl-100">
                <div className="about-img_one">
                  <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Healthy Cooking with Bharat Agro Oil" style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px'}} />
                </div>
                <div className="experience-box" style={{position: 'absolute', bottom: '-20px', right: 0, background: '#eece38', color: '#000', padding: '15px', borderRadius: '10px', textAlign: 'center'}}>
                  <h4>46+ Years</h4>
                  <p>Of Quality & Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories Section */}
      <section id="recipe-categories" className="recipe-categories position-relative z-1 pt-50 mt-50 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Recipe Collection</span>
                <h2>Explore Recipes by Oil Type</h2>
                <p>Discover delicious recipes optimized for each of our premium edible oils</p>
              </div>
            </div>
          </div>
          
          {/* Recipe Filter Buttons */}
          <div className="recipe-filter mb-40" style={{textAlign: 'center'}}>
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                onClick={() => handleFilterChange(category.key)}
                style={{
                  background: activeFilter === category.key ? '#eece38' : 'transparent',
                  border: '2px solid #eece38',
                  color: activeFilter === category.key ? '#000' : '#333',
                  padding: '8px 20px',
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
          
          {/* Recipe Cards */}
          <div className="row" style={{gap: '30px 0'}}>
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="col-lg-4 col-md-6" data-category={recipe.category} style={{marginBottom: '30px'}}>
                <div className="recipe-card" style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: 'white',
                  height: '100%'
                }}>
                  <div className="recipe-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img 
                      src={recipe.image}
                      alt={recipe.name}
                      style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease'}}
                    />
                  </div>
                  <div className="recipe-content" style={{padding: '25px'}}>
                    <div className="recipe-meta" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '14px', color: '#666'}}>
                      <span style={{display: 'flex', alignItems: 'center'}}>
                        <i className="far fa-clock" style={{marginRight: '5px', color: '#eece38'}}></i>
                        {recipe.time}
                      </span>
                      <span style={{display: 'flex', alignItems: 'center'}}>
                        <i className="far fa-user" style={{marginRight: '5px', color: '#eece38'}}></i>
                        {recipe.servings}
                      </span>
                      <span style={{display: 'flex', alignItems: 'center'}}>
                        <i className="far fa-fire" style={{marginRight: '5px', color: '#eece38'}}></i>
                        {recipe.difficulty}
                      </span>
                    </div>
                    <h4 className="recipe-title" style={{fontSize: '20px', fontWeight: 600, marginBottom: '15px', lineHeight: 1.4}}>{recipe.name}</h4>
                    <p className="recipe-desc" style={{color: '#666', marginBottom: '20px', lineHeight: 1.6}}>{recipe.description}</p>
                    <div className="recipe-tags" style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px'}}>
                      {recipe.tags.map((tag, index) => (
                        <span key={index} className="recipe-tag" style={{
                          background: '#f8f9fa',
                          padding: '5px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          color: '#555'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="recipe-btn" style={{
                      background: '#eece38',
                      color: '#000',
                      border: 'none',
                      padding: '10px 25px',
                      borderRadius: '5px',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>View Recipe</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase-section position-relative z-1 pt-80 pb-80" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Our Premium Oils</span>
                <h2>Perfect for Every Recipe</h2>
                <p>Discover the oils that make our recipes exceptional</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="oil-showcase-item mb-30">
                <div className="oil-img-container" style={{position: 'relative', overflow: 'hidden', borderRadius: '15px', transition: 'transform 0.3s ease'}}>
                  <img src="https://m.media-amazon.com/images/I/71RvGpDW8PL._UF894,1000_QL80_.jpg" alt="Sunflower Oil" style={{width: '100%', height: '200px', objectFit: 'contain', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} />
                  <div className="oil-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(238, 206, 56, 0.9), rgba(238, 206, 56, 0.7))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '15px'
                  }}>
                    <h5 style={{color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '10px', textAlign: 'center'}}>Sunflower Oil</h5>
                    <p style={{color: 'white', fontSize: '14px', textAlign: 'center', margin: 0}}>Light & versatile</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="oil-showcase-item mb-30">
                <div className="oil-img-container" style={{position: 'relative', overflow: 'hidden', borderRadius: '15px', transition: 'transform 0.3s ease'}}>
                  <img src="https://www.jiomart.com/images/product/original/rvq91jjsaj/himalayan-yellow-mustard-oil-5l-tin-fortified-with-vitamin-a-d-product-images-orvq91jjsaj-p594025363-0-202209241256.jpg?im=Resize=(1000,1000)" alt="Sesame Oil" style={{width: '100%', height: '200px', objectFit: 'contain', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} />
                  <div className="oil-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(238, 206, 56, 0.9), rgba(238, 206, 56, 0.7))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '15px'
                  }}>
                    <h5 style={{color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '10px', textAlign: 'center'}}>Sesame Oil</h5>
                    <p style={{color: 'white', fontSize: '14px', textAlign: 'center', margin: 0}}>Rich & aromatic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="oil-showcase-item mb-30">
                <div className="oil-img-container" style={{position: 'relative', overflow: 'hidden', borderRadius: '15px', transition: 'transform 0.3s ease'}}>
                  <img src="https://www.jiomart.com/images/product/original/rvybydjull/himalayan-yellow-mustard-oil-2l-bottle-fortified-with-vitamin-a-d-2-pcs-product-images-orvybydjull-p606861253-2-202312221851.png?im=Resize=(420,420)" alt="Mustard Oil" style={{width: '100%', height: '200px', objectFit: 'contain', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} />
                  <div className="oil-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(238, 206, 56, 0.9), rgba(238, 206, 56, 0.7))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '15px'
                  }}>
                    <h5 style={{color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '10px', textAlign: 'center'}}>Mustard Oil</h5>
                    <p style={{color: 'white', fontSize: '14px', textAlign: 'center', margin: 0}}>Traditional & bold</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="oil-showcase-item mb-30">
                <div className="oil-img-container" style={{position: 'relative', overflow: 'hidden', borderRadius: '15px', transition: 'transform 0.3s ease'}}>
                  {/* <img src="https://m.media-amazon.com/images/I/B1PnQ54E-HL._UF894,1000_QL80_.jpg" alt="Soybean Oil" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}} /> */}
                  <div className="oil-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(238, 206, 56, 0.9), rgba(238, 206, 56, 0.7))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '15px'
                  }}>
                    <h5 style={{color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '10px', textAlign: 'center'}}>Soybean Oil</h5>
                    <p style={{color: 'white', fontSize: '14px', textAlign: 'center', margin: 0}}>Neutral & healthy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="features-section dark-black-bg pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title section-title-white text-center mb-60">
                <span className="sub-title">Cooking Tips</span>
                <h2>Healthy Cooking with Bharat Agro Oils</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="features-item text-center mb-30">
                <div className="icon">
                  <i className="fas fa-thermometer-half"></i>
                </div>
                <div className="text">
                  <h4 className="text-white">Right Temperature</h4>
                  <p>Heat oils to the right temperature before adding ingredients. Each oil has a different smoke point.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item text-center mb-30">
                <div className="icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <div className="text">
                  <h4 className="text-white">Moderate Usage</h4>
                  <p>Use oils in moderation. Even healthy oils should be consumed in appropriate quantities.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item text-center mb-30">
                <div className="icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div className="text">
                  <h4 className="text-white">Oil Rotation</h4>
                  <p>Rotate between different oils to get a balance of various fatty acids and nutrients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section yellow-bg pt-80 pb-80" style={{background: '#eece38'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h3>Get New Recipes Every Week!</h3>
                <p>Subscribe to our newsletter and receive healthy recipes, cooking tips, and special offers directly in your inbox.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-form">
                <form>
                  <div className="form_group">
                    <div className="input-with-icon" style={{position: 'relative', display: 'inline-block', width: '100%'}}>
                      <i className="far fa-envelope input-icon" style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#666',
                        fontSize: '16px',
                        zIndex: 2,
                        pointerEvents: 'none'
                      }}></i>
                      <input type="email" className="form_control" placeholder="Enter your email address" name="email" required style={{
                        paddingLeft: '45px',
                        width: '100%',
                        padding: '12px 45px 12px 45px',
                        border: '2px solid #e9ecef',
                        borderRadius: '25px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }} />
                    </div>
                    <button type="submit" className="newsletter-btn mt-1" style={{
                      background: 'linear-gradient(135deg, #eece38, #ff8f00)',
                      color: '#000',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '25px',
                      fontWeight: 600,
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(238, 206, 56, 0.3)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <i className="far fa-paper-plane"></i>
                      <span>Subscribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="health-benefits" style={{background: '#f8f9fa', padding: '80px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span className="sub-title">Health Benefits</span>
                <h2>Why Our Oils Are Good for You</h2>
                <p>Discover the nutritional advantages of our pure edible oils</p>
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

      <Footer />
    </>
  )
}
