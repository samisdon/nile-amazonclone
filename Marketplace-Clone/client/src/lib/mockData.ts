import headphoneImg from '@/assets/products/headphones.jpg';
import smartwatchImg from '@/assets/products/smartwatch.jpg';
import laptopImg from '@/assets/products/laptop.jpg';
import coffeeImg from '@/assets/products/coffeemaker.jpg';
import shoesImg from '@/assets/products/shoes.jpg';

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isBestSeller?: boolean;
  isPrime?: boolean;
  description: string;
  specs?: Record<string, string>;
}

export const CATEGORIES = [
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Computers",
  "Books",
  "Beauty"
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones, 30 Hour Battery Life - Black",
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.5,
    reviewCount: 12453,
    image: headphoneImg,
    category: "Electronics",
    isBestSeller: true,
    isPrime: true,
    description: "Industry-leading noise cancellation optimized to you. Magnificent Sound, engineered to perfection. Crystal clear hands-free calling. Up to 30-hour battery life with quick charging.",
    specs: {
      "Brand": "Sony",
      "Color": "Black",
      "Connectivity": "Wireless",
      "Form Factor": "Over Ear"
    }
  },
  {
    id: "2",
    title: "Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band M/L",
    price: 359.00,
    originalPrice: 429.00,
    rating: 4.8,
    reviewCount: 8902,
    image: smartwatchImg,
    category: "Electronics",
    isPrime: true,
    description: "Your essential companion for a healthy life is now even more powerful. S9 chip enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen.",
    specs: {
      "Brand": "Apple",
      "Color": "Midnight",
      "Special Feature": "Sleep Monitor, ECG",
      "Screen Size": "45mm"
    }
  },
  {
    id: "3",
    title: "MacBook Air 15-inch Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage",
    price: 1049.00,
    originalPrice: 1299.00,
    rating: 4.7,
    reviewCount: 3421,
    image: laptopImg,
    category: "Computers",
    isPrime: true,
    description: "Impossibly thin and incredibly fast. The redesigned MacBook Air is more portable than ever and weighs just 3.3 pounds. It's the ultra-capable laptop that lets you work, play, or create just about anything — anywhere.",
    specs: {
      "Brand": "Apple",
      "Screen Size": "15.3 Inches",
      "Hard Disk Size": "256 GB",
      "Ram Memory": "8 GB"
    }
  },
  {
    id: "4",
    title: "Keurig K-Elite Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, With Iced Coffee Capability, Brushed Slate",
    price: 119.00,
    originalPrice: 189.99,
    rating: 4.6,
    reviewCount: 67890,
    image: coffeeImg,
    category: "Home & Kitchen",
    isBestSeller: true,
    isPrime: true,
    description: "The Keurig K-Elite brewer blends a premium finish and programmable features to deliver both modern design and the ultimate in beverage customization.",
    specs: {
      "Brand": "Keurig",
      "Color": "Brushed Slate",
      "Capacity": "75 Fluid Ounces",
      "Material": "Plastic"
    }
  },
  {
    id: "5",
    title: "Brooks Ghost 15 Men's Neutral Running Shoe",
    price: 99.95,
    originalPrice: 140.00,
    rating: 4.4,
    reviewCount: 5678,
    image: shoesImg,
    category: "Fashion",
    isPrime: true,
    description: "The new Ghost 15 features the soft, lighter-weight DNA LOFT v2 cushioning. It offers a distraction-free ride so you can focus on what matters most: your run.",
    specs: {
      "Brand": "Brooks",
      "Color": "Black/Grey/Blue",
      "Outer Material": "Mesh",
      "Sole Material": "Rubber"
    }
  }
];
