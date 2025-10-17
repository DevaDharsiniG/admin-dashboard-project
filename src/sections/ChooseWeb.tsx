

// src/sections/ServiceOfferings.tsx

import Image, { StaticImageData } from 'next/image';
import { CheckCircle } from 'lucide-react';

// --- IMPORT YOUR IMAGES HERE (No changes needed) ---
import shopify1Img from '@/assets/shopify1.png';
import shopify2Img from '@/assets/shopify2.png';
import shopify3Img from '@/assets/shopify3.png';
import shopify4Img from '@/assets/shopify4.png';
import shopify5Img from '@/assets/shopify5.png';
import shopify6Img from '@/assets/shopify6.png';
import shopify7Img from '@/assets/shopify7.png';
import shopify8Img from '@/assets/shopify8.png';

// --- YOUR DATA ---
// originalPrice is the higher, crossed-out price.
const services: { title: string; features: string[]; price: number; originalPrice: number; image: StaticImageData }[] = [
    {
        title: "YouTube Integration with Shopify",
        features: [
          "Seamless YouTube video integration into product pages",
          "Auto-display of product demo or review videos",
          "Boost engagement with video based shopping",
        ],
        price: 1499,
        originalPrice: 2500,
        image: shopify1Img,
      },
      {
        title: "Auto Updating YT Shorts to Website",
        features: [
          "Auto video sync – New Shorts appear instantly",
          "Fresh content – Keeps your pages lively",
          "No manual work – Fully automated updates",
        ],
        price: 499,
        originalPrice: 1000, 
        image: shopify2Img,
      },
      {
        title: "Shopify Carousel & Brand Slider",
        features: [
          "Showcase partners or logos in a seamless infinite loop",
          "Hide sale badges for a cleaner look",
          "Fully automated and easy to manage",
        ],
        price: 299,
        originalPrice: 450,
        image: shopify3Img,
      },
      {
        title: "Optimize Header & Footer Layout",
        features: [
          "Neat & balanced design for a professional look",
          "Easy navigation to help users find info quickly",
          "Mobile-friendly layout that looks perfect on all devices",
        ],
        price: 499,
        originalPrice: 800,
        image: shopify4Img,
      },
      {
        title: "Discover by Category & Shipping Bar",
        features: [
          "Encourages higher orders to meet free shipping threshold",
          "Better engagement keeps visitors exploring more",
          "Visual progress adds a fun shopping experience",
        ],
        price: 599,
        originalPrice: 1200,
        image: shopify5Img,
      },
      {
        title: "Animated Masonry & Video Carousel",
        features: [
          "Modern, interactive layout increases brand credibility",
          "Perfect for product demos, stories, or testimonials",
          "Fully responsive and touch-friendly for mobile",
        ],
        price: 699,
        originalPrice: 1500,
        image: shopify6Img,
      },
      {
        title: "Custom Accordion & Sale Badges",
        features: [
          "Increases visibility of promotions to boost conversions",
          "Enhances user experience and improves SEO",
          "Compatible with all Shopify themes",
        ],
        price: 299,
        originalPrice: 777,
        image: shopify7Img,
      },
      {
        title: "Custom 'About Page' & Marquee",
        features: [
          "Defines your brand story and identity",
          "Shows your team or founder’s personality",
          "Displays important announcements attractively",
        ],
        price: 999,
        originalPrice: 2300,
        image: shopify8Img,
      },
];

export default function ServiceOfferings() {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shopify Customization
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enhancing your Shopify store for better performance and higher sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              <div className="bg-white border-b">
                 <Image
                    src={service.image}
                    alt={service.title}
                    placeholder="blur"
                 />
              </div>

              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">{service.title}</h3>
                
                <ul className="space-y-2.5 mb-5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto text-center pt-5 border-t border-gray-200">
                  <div className="flex justify-center items-baseline gap-2">
                    <p className="text-3xl font-extrabold text-green-600">
                      ₹{service.price.toLocaleString('en-IN')}
                    </p>
                    <p className="text-lg text-gray-400 line-through">
                      ₹{service.originalPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}