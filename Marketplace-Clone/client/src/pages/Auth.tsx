import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Auth() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      {/* Logo */}
      <Link href="/">
        <a className="mb-6 flex items-center">
            <span className="font-display font-bold text-3xl tracking-tighter">nile</span>
            <span className="text-sm mb-4 text-accent">.com</span>
        </a>
      </Link>

      {/* Auth Card */}
      <div className="w-full max-w-[350px] border border-gray-300 rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-normal mb-4">Sign in</h1>
        
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <div className="space-y-1">
            <Label htmlFor="email" className="font-bold text-xs">Email or mobile phone number</Label>
            <Input 
               id="email" 
               type="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="h-8 border-gray-400 focus:border-[#e77600] focus:ring-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)]"
            />
          </div>

          <Button type="submit" className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black border border-[#FCD200] h-8 text-sm shadow-sm">
            Continue
          </Button>

          <p className="text-xs leading-4 mt-2">
            By continuing, you agree to Nile's <a href="#" className="text-[#007185] hover:underline">Conditions of Use</a> and <a href="#" className="text-[#007185] hover:underline">Privacy Notice</a>.
          </p>

          <div className="flex items-center gap-1 text-xs mt-4 group cursor-pointer">
             <span className="text-gray-500">►</span>
             <span className="text-[#007185] group-hover:underline group-hover:text-[#C7511F]">Need help?</span>
          </div>
        </form>
      </div>

      {/* New to Nile */}
      <div className="w-full max-w-[350px] flex flex-col items-center relative">
        <div className="w-full border-t border-gray-300 absolute top-1/2 -z-10"></div>
        <span className="bg-white px-2 text-xs text-gray-500 z-0">New to Nile?</span>
      </div>

      <Button variant="outline" className="w-full max-w-[350px] mt-4 h-8 text-sm bg-gray-50 hover:bg-gray-100 border-gray-300 shadow-sm">
        Create your Nile account
      </Button>

      {/* Footer Links */}
      <div className="mt-8 pt-8 border-t border-gray-200 w-full max-w-[350px] flex flex-col items-center gap-2">
         <div className="flex gap-8 text-xs text-[#007185]">
            <a href="#" className="hover:underline hover:text-[#C7511F]">Conditions of Use</a>
            <a href="#" className="hover:underline hover:text-[#C7511F]">Privacy Notice</a>
            <a href="#" className="hover:underline hover:text-[#C7511F]">Help</a>
         </div>
         <span className="text-xs text-gray-500">© 1996-2024, Nile.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}
