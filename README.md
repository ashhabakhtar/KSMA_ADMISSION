<div align="center">

# 🎓 KSMA Admission Portal 2026

**A high-conversion, beautifully designed landing page built for medical student recruitment at the Kyrgyz State Medical Academy (KSMA).**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-V3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

</div>

## 📖 Overview

The **KSMA Admission Portal** is a cutting-edge web application originally built to replace standard, text-heavy admission sites. It utilizes a highly tailored **"Light Blue" design system**, rich graphical frames, and buttery-smooth GSAP animations to provide a premium and trustworthy user experience for incoming medical students and their parents.

The interface is engineered to maximize conversion rates, featuring sticky CTAs, interactive aesthetic elements, and seamless WhatsApp & direct call integrations.

## ✨ Key Features

- **🎨 Modern "Light Blue" Framing System**: Completely overhauled bespoke Tailwind CSS configuration built around vibrant sky blues, heavy component framing (`border-brand-frame`), and elevated premium shadows to instill institutional trust.
- **⚡ Blazing Fast Architecture**: Server-Side Rendering (SSR) powered by Next.js App Router for optimal SEO and instantaneous loading speeds.
- **✉️ Serverless Form Integration**: The "Secure Your Seat" hero form is natively wired through `FormSubmit.co` for instant, backend-free email notifications.
- **🖼️ Authentic KSMA Gallery**: Dynamic masonry-style grid featuring 33 real campus, lab, and hospital photos scraped securely from the central KSMA university domain. Includes a seamless "Show All" React state toggle.
- **📊 Impactful Trust Signals**: Highly legible comparison tables, 5,000+ alumni success stories, and ROI breakdowns to convert leads fast.
- **📱 True Responsive Design**: Mobile-first architecture guaranteeing a perfect layout across all devices, complete with bottom fixed action bars for instant mobile contact.

## 🚀 Quick Start

Getting the project up and running locally is incredibly simple.

**1. Clone the repository**
```bash
git clone https://github.com/ashhabakhtar/KSMA_ADMISSION.git
cd KSMA_ADMISSION
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

> The application will automatically compile. Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the site.

## 📁 Project Structure

```text
KSMA_ADMISSION/
├── app/
│   ├── globals.css        # Global CSS, Custom CSS Variables, and bespoke scrollbars
│   ├── layout.tsx         # Root Next.js Layout defining fonts (Inter, Jakarta Sans)
│   └── page.tsx           # Main Landing Page composition
├── components/            # Reusable React components
│   ├── Hero.tsx           # Split-panel hero with functional FormSubmit.co integration
│   ├── TrustSignals.tsx   # ROI breakdowns and comparative advantages
│   ├── KSMAGallery.tsx    # 33-image dynamic React gallery
│   ├── AlumniReviews.tsx  # Testimonial matrix
│   └── ...
├── public/                # Static assets (Hero imagery, Instagram avatars)
└── tailwind.config.js     # Master styling theme containing `brand-blue`, `brand-frame`
```

## 🛠️ Configuration & Customization

### Form Integration
To change the email address that receives the admission inquiries:
1. Open up `/components/Hero.tsx`.
2. Locate the `<form>` element on `line ~60`.
3. Change the `action="https://formsubmit.co/your-new-email@gmail.com"` attribute.
4. *Remember to click the auto-generated activation link sent to your email on your first test submission!*

### Theming
All major colors are controlled via CSS Variables defined in `app/globals.css` and mapped out seamlessly in `tailwind.config.js`. Change the `brand-blue` or `brand-accent` hex codes in `tailwind.config.js` to immediately apply a new color system across the entire portal.

---
<div align="center">
  <i>Developed for KSMA Edutech India.</i>
</div>

