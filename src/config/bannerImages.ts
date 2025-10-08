// Banner image configuration for different pages
export const bannerImages = {
  // Default banner image
  default: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  
  // Page-specific banner images
  about: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  contact: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b6f3b58-0e49-41b3-b041-2a95c525b2b9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  products: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png",
  services: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/04e43dda-759c-472b-8759-b77a082fd5fd.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  recipes: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b6f3b58-0e49-41b3-b041-2a95c525b2b9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  
  // Additional banner images for variety
  manufacturing: "https://m.media-amazon.com/images/I/81Q5EIg1a5L.jpg",
  quality: "https://m.media-amazon.com/images/I/81Q5EIg1a5L._UF350,350_QL80_.jpg",
  traditional: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0ba4c099-476a-4401-b9a4-b377a1d688f2.__CR0,0,970,600_PT0_SX970_V1___.png"
}

// Helper function to get banner image for a specific page
export const getBannerImage = (page: keyof typeof bannerImages): string => {
  return bannerImages[page] || bannerImages.default
}
