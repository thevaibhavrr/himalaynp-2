import Image from 'next/image'

interface PageBannerProps {
  backgroundImage: string
  title?: string
  subtitle?: string
  showBrandCard?: boolean
  height?: string
}

export default function PageBanner({ 
  backgroundImage, 
  title, 
  subtitle, 
  showBrandCard = true,
  height = '600px'
}: PageBannerProps) {
  return (
    <section 
      className="page-banner bg_cover position-relative z-1"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {showBrandCard && (
        <div className="brand-card text-center">
          <Image 
            src="/assets/images/logo/new-logo.png" 
            alt="Bharat Agro Oil Logo" 
            width={120} 
            height={120} 
            style={{maxWidth: '120px'}} 
          />
          <h3>Bharat Agro Oil</h3>
          <p>Premium Edible Oils Since 1978</p>
        </div>
      )}
      
      
    </section>
  )
}
