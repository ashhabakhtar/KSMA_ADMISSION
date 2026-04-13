import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import CallCTA from '@/components/CallCTA'
import InstagramCTA from '@/components/InstagramCTA'
import MobileAppMenu from '@/components/MobileAppMenu'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'] })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'KSMA Admission | I.K. Akhunbaev Kyrgyz State Medical Academy',
  description: 'Secure Your MBBS Seat at KSMA Bishkek. WHO/NMC Approved. FMGE Pass Rate: 31.56%. Government Protected Tuition 2025.',
  keywords: 'KSMA MBBS, Kyrgyz State Medical Academy, MBBS abroad, NMC approved, FMGE coaching',
  openGraph: {
    title: 'KSMA Admission Consultancy',
    description: 'Premium MBBS Program in Bishkek. July 2025 Regulatory Compliance Verified.',
    images: '/og-image.jpg',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-jakarta antialiased`}>
        {/* High visibility blurred background globally */}
        <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden bg-slate-100">
          <img src="/BACK.png" alt="KSMA Background" className="absolute inset-0 w-full h-full object-cover blur-[6px] scale-105 opacity-100" />
          <div className="absolute inset-0 bg-brand-blue/5"></div>
        </div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <MobileAppMenu />
        <WhatsAppCTA />
        <CallCTA />
        <InstagramCTA />
      </body>
    </html>
  )
}
