import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
  const { items, subtotal, itemCount, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1500px] w-full mx-auto px-4 py-8">
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Cart Items List */}
            <div className="lg:col-span-3 bg-white p-6 shadow-sm">
               <div className="flex items-end justify-between border-b border-gray-200 pb-4 mb-4">
                  <h1 className="text-2xl font-medium">Shopping Cart</h1>
                  <span className="text-sm text-[#565959]">Price</span>
               </div>

               {items.length === 0 ? (
                 <div className="py-8">
                    <p className="mb-4">Your Nile Cart is empty.</p>
                    <Link href="/">
                       <a className="text-[#007185] hover:text-[#C7511F] hover:underline">
                         Check your Saved for later items below or continue shopping.
                       </a>
                    </Link>
                 </div>
               ) : (
                 <div className="flex flex-col gap-6">
                    {items.map(item => (
                       <div key={item.id} className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-6 last:border-0">
                          <Link href={`/product/${item.id}`}>
                             <div className="cursor-pointer">
                                <img src={item.image} alt={item.title} className="w-[180px] h-[180px] object-contain" />
                             </div>
                          </Link>
                          
                          <div className="flex-1">
                             <div className="flex justify-between mb-2">
                                <Link href={`/product/${item.id}`}>
                                   <a className="text-lg font-medium text-[#007185] hover:text-[#C7511F] hover:underline line-clamp-2">
                                      {item.title}
                                   </a>
                                </Link>
                                <span className="font-bold text-lg md:hidden">${item.price.toFixed(2)}</span>
                             </div>
                             
                             <div className="text-xs text-[#007600] mb-1">In Stock</div>
                             {item.isPrime && (
                                <div className="text-xs text-[#565959] mb-2">
                                   <span className="font-bold text-[#565959]">Prime</span> FREE Delivery
                                </div>
                             )}
                             <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center bg-[#F0F2F2] border border-gray-300 rounded-md shadow-sm h-8">
                                   <button 
                                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                     className="px-2 h-full hover:bg-gray-200 rounded-l-md"
                                   >
                                     <Minus className="w-3 h-3" />
                                   </button>
                                   <div className="px-3 text-sm font-medium border-x border-gray-300 bg-white h-full flex items-center">
                                      {item.quantity}
                                   </div>
                                   <button 
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="px-2 h-full hover:bg-gray-200 rounded-r-md"
                                   >
                                     <Plus className="w-3 h-3" />
                                   </button>
                                </div>
                                <span className="text-gray-300 mx-2">|</span>
                                <button 
                                   onClick={() => removeFromCart(item.id)}
                                   className="text-xs text-[#007185] hover:underline"
                                >
                                   Delete
                                </button>
                                <span className="text-gray-300 mx-2">|</span>
                                <button className="text-xs text-[#007185] hover:underline">
                                   Save for later
                                </button>
                             </div>
                          </div>

                          <div className="hidden md:block font-bold text-lg text-right min-w-[100px]">
                             ${item.price.toFixed(2)}
                          </div>
                       </div>
                    ))}
                 </div>
               )}

               {items.length > 0 && (
                  <div className="flex justify-end pt-4">
                     <span className="text-lg">Subtotal ({itemCount} items): <span className="font-bold">${subtotal.toFixed(2)}</span></span>
                  </div>
               )}
            </div>

            {/* Sidebar Summary */}
            {items.length > 0 && (
               <div className="lg:col-span-1">
                  <div className="bg-white p-6 shadow-sm sticky top-4">
                     {subtotal > 35 && (
                        <div className="flex items-center gap-2 text-xs text-[#067D62] mb-4">
                           <CheckCircle2 className="w-4 h-4" />
                           <span>Your order qualifies for FREE Shipping.</span>
                        </div>
                     )}
                     
                     <div className="text-lg mb-4">
                        Subtotal ({itemCount} items): <span className="font-bold">${subtotal.toFixed(2)}</span>
                     </div>
                     
                     <div className="flex items-center gap-2 mb-4">
                        <input type="checkbox" id="gift" className="rounded-sm border-gray-300 text-accent focus:ring-accent" />
                        <label htmlFor="gift" className="text-sm">This order contains a gift</label>
                     </div>

                     <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black border border-[#FCD200] rounded-lg shadow-sm">
                        Proceed to checkout
                     </Button>
                  </div>
                  
                  {/* Recommendations below sidebar */}
                  <div className="bg-white p-4 shadow-sm mt-4 rounded-lg">
                     <h3 className="font-bold text-sm mb-2">Recommended based on your shopping trends</h3>
                     {/* Placeholder for recommendations */}
                  </div>
               </div>
            )}

         </div>
      </main>
      
      <Footer />
    </div>
  );
}
