import { Link } from "wouter";
import { Star, Check } from "lucide-react";
import { Product } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white border border-gray-200 rounded-sm p-4 flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow group relative">
        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <div className="absolute top-0 left-0 bg-[#C7511F] text-white text-xs font-bold px-2 py-1 rounded-br-sm z-10">
            Best Seller
          </div>
        )}

        {/* Image Area */}
        <div className="flex-1 flex items-center justify-center p-4 mb-2 bg-gray-50/50">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[180px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Info Area */}
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium leading-tight text-gray-900 line-clamp-3 group-hover:text-[#C7511F]">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"}`} 
                />
              ))}
            </div>
            <span className="text-xs text-blue-700 hover:text-[#C7511F] hover:underline cursor-pointer">
              {product.reviewCount.toLocaleString()}
            </span>
          </div>

          {/* Price */}
          <div className="mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xs align-top mt-1">$</span>
              <span className="text-2xl font-medium text-gray-900">{Math.floor(product.price)}</span>
              <span className="text-xs align-top mt-1">{(product.price % 1).toFixed(2).substring(1)}</span>
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-500">
                List: <span className="line-through">${product.originalPrice}</span>
              </div>
            )}
          </div>

          {/* Prime & Delivery */}
          {product.isPrime && (
            <div className="flex items-center gap-1 mt-1">
              <div className="flex items-center text-[#00A8E1] font-bold text-xs italic">
                <Check className="w-3 h-3 stroke-[4]" />
                <span>prime</span>
              </div>
              <span className="text-xs text-gray-500">Two-Day</span>
            </div>
          )}
          <div className="text-xs text-gray-500 mt-1">
            FREE Delivery by Nile
          </div>

          {/* Add to Cart Button (Hover Only or Mobile) */}
          <div className="mt-3">
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-accent text-primary-foreground hover:bg-[#F3A847] font-normal text-sm h-8 rounded-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
