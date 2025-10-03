import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bharat Agro Oil - Premium Edible Oil Manufacturer Since 1978',
  description: 'Bharat Agro Oil - Premium quality edible oils manufacturer since 1978. Natural, pure, and healthy cooking oils.',
  keywords: 'edible oil, mustard oil, sunflower oil, soybean oil, cooking oil, premium oil, Bharat Agro Oil',
  authors: [{ name: 'Bharat Agro Oil' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo/new-logo.png" type="image/png" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/magnific-popup/dist/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendor/slick/slick.css" />
        <link rel="stylesheet" href="/assets/vendor/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendor/animate.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Scripts */}
        <Script src="/assets/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/popper/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/slick/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/isotope.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/imagesloaded.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/nice-select/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/jquery-ui/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/contact-form/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/contact-form/form-validator.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/contact-form/contact-form-script.js" strategy="afterInteractive" />
        <Script src="/assets/js/theme.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}