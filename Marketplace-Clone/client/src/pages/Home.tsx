import { PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { ProductCard } from "@/components/product/ProductCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-[1500px] w-full mx-auto relative">
        {/* Hero Section */}
        <div className="relative w-full z-0">
          <div className="absolute w-full h-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10 h-1/2" />
          <img 
            src={heroBanner} 
            alt="Hero Banner" 
            className="w-full object-cover h-[250px] md:h-[400px] mask-image-b"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 px-4 -mt-20 md:-mt-60 pb-8">
          
          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {CATEGORIES.slice(0, 4).map((category, idx) => (
              <div key={idx} className="bg-white p-4 z-30 shadow-sm flex flex-col gap-4 h-[350px]">
                <h2 className="text-xl font-bold">{category}</h2>
                <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-hidden">
                   {/* Using first product image from this category if available, else placeholder */}
                   <img 
                      src={PRODUCTS.find(p => p.category === category)?.image || PRODUCTS[0].image} 
                      className="object-cover w-full h-full mix-blend-multiply opacity-80"
                      alt={category}
                   />
                </div>
                <span className="text-xs text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">
                  Shop now
                </span>
              </div>
            ))}
          </div>

          {/* Product Grid - "Recommended for you" */}
          <div className="bg-white p-6 shadow-sm mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="text-2xl font-bold">Recommended for you</h2>
              <a href="#" className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline">See more</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

           {/* Second Row of Category Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow-sm flex flex-col gap-4">
               <h2 className="text-xl font-bold">Sign in for the best experience</h2>
               <button className="bg-accent hover:bg-[#F3A847] w-full py-2 rounded-md text-sm font-medium shadow-sm">
                 Sign in securely
               </button>
            </div>
            {CATEGORIES.slice(4).map((category, idx) => (
              <div key={idx} className="bg-white p-4 z-30 shadow-sm flex flex-col gap-4 h-[350px]">
                <h2 className="text-xl font-bold">{category}</h2>
                 <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-hidden">
                   <img 
                      src={PRODUCTS.find(p => p.category === category)?.image || PRODUCTS[1].image} 
                      className="object-cover w-full h-full mix-blend-multiply opacity-80"
                      alt={category}
                   />
                </div>
                <span className="text-xs text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">
                  See more
                </span>
              </div>
            ))}
             <div className="bg-white p-4 shadow-sm flex flex-col gap-4">
               <h2 className="text-xl font-bold">Easy Returns</h2>
               <div className="flex-1 flex items-center justify-center bg-gray-50">
                 <span className="text-4xl">📦</span>
               </div>
                 <span className="text-xs text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">
                  Learn more
                </span>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
