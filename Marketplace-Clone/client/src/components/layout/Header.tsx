import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, MapPin } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  const { itemCount } = useCart();
  const [location, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter results
  };

  return (
    <header className="flex flex-col w-full">
      {/* Top Bar - Main Navigation */}
      <div className="bg-primary text-white h-[60px] flex items-center px-4 gap-4 w-full z-50">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center pt-2 mr-2 hover:outline-1 hover:outline-white rounded-sm p-1 cursor-pointer">
            <span className="font-display font-bold text-2xl tracking-tighter">nile</span>
            <span className="text-xs mb-3 text-accent">.com</span>
          </a>
        </Link>

        {/* Deliver To */}
        <div className="hidden md:flex flex-col leading-tight text-sm hover:outline-1 hover:outline-white p-2 rounded-sm cursor-pointer min-w-[100px]">
          <span className="text-gray-300 text-xs ml-4">Deliver to</span>
          <div className="flex items-center font-bold">
            <MapPin className="h-4 w-4 mr-1" />
            <span>New York 10001</span>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 flex h-10 max-w-3xl mx-4">
          <div className="bg-gray-100 text-gray-600 px-3 flex items-center rounded-l-md border-r border-gray-300 hover:bg-gray-200 cursor-pointer text-xs">
            All
          </div>
          <Input 
            className="flex-1 rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-full bg-white text-black" 
            placeholder="Search Nile" 
          />
          <Button type="submit" className="bg-accent hover:bg-[hsl(38,95%,60%)] text-primary-foreground rounded-l-none rounded-r-md h-full w-12 p-0 border-none">
            <Search className="h-5 w-5 text-gray-800" />
          </Button>
        </form>

        {/* Right Nav Items */}
        <div className="flex items-center gap-1 md:gap-4 text-sm">
          {/* Sign In */}
          <Link href="/auth">
            <a className="hidden md:flex flex-col leading-tight hover:outline-1 hover:outline-white p-2 rounded-sm cursor-pointer">
              <span className="text-xs">Hello, sign in</span>
              <span className="font-bold">Account & Lists</span>
            </a>
          </Link>

          {/* Returns & Orders */}
          <div className="hidden md:flex flex-col leading-tight hover:outline-1 hover:outline-white p-2 rounded-sm cursor-pointer">
            <span className="text-xs">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>

          {/* Cart */}
          <Link href="/cart">
            <a className="flex items-end hover:outline-1 hover:outline-white p-2 rounded-sm cursor-pointer relative">
              <div className="relative">
                <ShoppingCart className="h-8 w-8 mb-[-2px]" />
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-accent font-bold text-base">
                  {itemCount}
                </span>
              </div>
              <span className="font-bold hidden md:inline mb-1">Cart</span>
            </a>
          </Link>
        </div>
      </div>

      {/* Sub Header - Secondary Navigation */}
      <div className="bg-secondary text-white h-[40px] flex items-center px-4 gap-4 text-sm overflow-x-auto w-full">
        <div className="flex items-center gap-1 font-bold cursor-pointer hover:outline-1 hover:outline-white p-1 rounded-sm whitespace-nowrap">
          <Menu className="h-5 w-5" />
          <span>All</span>
        </div>
        
        {["Today's Deals", "Customer Service", "Registry", "Gift Cards", "Sell"].map((item) => (
          <div key={item} className="cursor-pointer hover:outline-1 hover:outline-white p-1 rounded-sm whitespace-nowrap">
            {item}
          </div>
        ))}
      </div>
    </header>
  );
}
