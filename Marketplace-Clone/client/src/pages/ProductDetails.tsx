import { useRoute, Link } from "wouter";
import { PRODUCTS } from "@/lib/mockData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Lock, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const product = PRODUCTS.find(p => p.id === params?.id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState("1");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    for(let i=0; i<parseInt(qty); i++) {
        addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-[1500px] w-full mx-auto px-4 py-8">
        
        {/* Breadcrumb - Mock */}
        <div className="text-xs text-[#565959] mb-4">
           <span className="hover:underline cursor-pointer">Electronics</span>
           <span className="mx-1">›</span>
           <span className="hover:underline cursor-pointer">Headphones</span>
           <span className="mx-1">›</span>
           <span className="font-bold text-[#C7511F]">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Image Gallery (Left) */}
          <div className="md:col-span-5 lg:col-span-4 sticky top-4 self-start">
             <div className="flex">
                <div className="w-12 flex flex-col gap-2 mr-4">
                   {[product.image, product.image, product.image].map((img, i) => (
                     <div key={i} className="border border-gray-300 rounded-sm p-1 cursor-pointer hover:shadow-md hover:border-[#e77600]">
                       <img src={img} className="w-full object-contain" />
                     </div>
                   ))}
                </div>
                <div className="flex-1">
                   <img src={product.image} className="w-full max-h-[500px] object-contain" />
                </div>
             </div>
          </div>

          {/* Product Info (Center) */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-gray-900 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-2 text-sm border-b border-gray-200 pb-4 mb-2">
               <div className="flex text-[#F4A41C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"}`} />
                  ))}
               </div>
               <span className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">
                 {product.reviewCount.toLocaleString()} ratings
               </span>
               <span className="text-gray-300">|</span>
               <span className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">
                 Search this page
               </span>
            </div>

            <div className="flex flex-col gap-1 mb-4">
               {product.isBestSeller && (
                  <div className="bg-[#232F3E] text-white text-xs font-bold px-2 py-1 w-fit rounded-sm mb-2">
                     Amazon's Choice
                  </div>
               )}
               <div className="flex items-baseline gap-2">
                 <span className="text-2xl text-[#CC0C39]">-13%</span>
                 <div className="flex items-start">
                   <span className="text-xs mt-1">$</span>
                   <span className="text-3xl font-medium">{Math.floor(product.price)}</span>
                   <span className="text-xs mt-1">{(product.price % 1).toFixed(2).substring(1)}</span>
                 </div>
               </div>
               {product.originalPrice && (
                 <span className="text-xs text-[#565959]">
                   List Price: <span className="line-through">${product.originalPrice}</span>
                 </span>
               )}
            </div>

            {/* Product Details Table */}
            <div className="grid grid-cols-2 gap-y-2 text-sm max-w-md mb-6">
               {product.specs && Object.entries(product.specs).map(([key, value]) => (
                 <div key={key} className="contents">
                    <span className="font-bold text-gray-900">{key}</span>
                    <span className="text-gray-700">{value}</span>
                 </div>
               ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-bold mb-2">About this item</h3>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>{product.description}</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
              </ul>
            </div>
          </div>

          {/* Buy Box (Right) */}
          <div className="md:col-span-3 lg:col-span-3">
             <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
                <div className="flex items-start">
                   <span className="text-xs mt-1">$</span>
                   <span className="text-xl font-medium">{Math.floor(product.price)}</span>
                   <span className="text-xs mt-1">{(product.price % 1).toFixed(2).substring(1)}</span>
                </div>
                
                <div className="text-sm text-[#007185] mt-2 mb-4">
                   Free Returns
                </div>

                <div className="text-sm mb-4">
                   FREE delivery <span className="font-bold">Thursday, Feb 8</span> on orders shipped by Nile over $35
                </div>

                <div className="text-sm text-[#007600] font-medium mb-4">
                   In Stock
                </div>
                
                <div className="mb-4">
                  <Select value={qty} onValueChange={setQty}>
                    <SelectTrigger className="w-full h-8 bg-[#F0F2F2] border-gray-300 shadow-sm focus:ring-[#e77600] text-xs">
                       <span className="mr-1">Qty:</span>
                       <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => (
                        <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                   <Button 
                     onClick={handleAddToCart}
                     className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black border border-[#FCD200] rounded-full h-8 text-sm"
                   >
                     Add to Cart
                   </Button>
                   <Button className="w-full bg-[#FA8900] hover:bg-[#EF7D00] text-black border border-[#FCD200] rounded-full h-8 text-sm">
                     Buy Now
                   </Button>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#565959] mt-4 pt-4 border-t border-gray-200">
                   <Lock className="w-3 h-3" />
                   <span className="text-[#007185] hover:underline cursor-pointer">Secure transaction</span>
                </div>
                
                <div className="text-xs text-[#565959] mt-2 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
                   <span>Ships from</span> <span>Nile</span>
                   <span>Sold by</span> <span>Nile</span>
                </div>
             </div>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}
