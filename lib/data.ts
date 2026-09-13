import {
  Coffee,
  Hammer,
  Users,
  Repeat,
  Flame,
  Leaf,
  Truck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Build Your Blend', href: '#build-your-blend' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const heroImage =
  'https://images.pexels.com/photos/35518412/pexels-photo-35518412.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const aboutImage =
  'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const aboutImageSecondary =
  'https://images.pexels.com/photos/8059268/pexels-photo-8059268.jpeg?auto=compress&cs=tinysrgb&w=800';

export interface AboutFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    icon: Coffee,
    title: 'Quality Beans',
    description:
      "Single-origin beans sourced from the world's finest micro-lot farms.",
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description:
      'Every cup is hand-crafted by trained baristas with obsessive attention to detail.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'A warm, welcoming space where neighbors become friends over great coffee.',
  },
  {
    icon: Repeat,
    title: 'Consistency',
    description:
      'Precision-roasted in small batches so every visit tastes exactly like the last.',
  },
];

export const founderQuote = {
  quote:
    "We didn't set out to open a coffee shop. We set out to build a place where people slow down, connect, and taste what care really means.",
  name: 'Elena Redwood',
  role: 'Founder & Master Roaster',
};

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'espresso',
    label: 'Espresso',
    items: [
      {
        name: 'Classic Espresso',
        description: 'Rich, bold double shot with caramel notes and a velvety crema.',
        price: '3.50',
        image:
          'https://images.pexels.com/photos/15801008/pexels-photo-15801008.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and microfoam art.',
        price: '4.75',
        image:
          'https://images.pexels.com/photos/15480366/pexels-photo-15480366.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Flat White',
        description: 'Smooth ristretto shots with silky steamed milk.',
        price: '4.50',
        image:
          'https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Caramel Macchiato',
        description: 'Vanilla, steamed milk, espresso, and a caramel drizzle.',
        price: '5.25',
        image:
          'https://images.pexels.com/photos/5151354/pexels-photo-5151354.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'cold-brew',
    label: 'Cold Brew',
    items: [
      {
        name: 'Classic Cold Brew',
        description: '18-hour steeped, smooth and naturally sweet with low acidity.',
        price: '4.25',
        image:
          'https://images.pexels.com/photos/38028988/pexels-photo-38028988.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Iced Americano',
        description: 'Double espresso over ice and filtered water.',
        price: '3.75',
        image:
          'https://images.pexels.com/photos/5741238/pexels-photo-5741238.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Nitro Cold Brew',
        description: 'Cascading nitrogen pour with a creamy, Guinness-like head.',
        price: '5.00',
        image:
          'https://images.pexels.com/photos/38028984/pexels-photo-38028984.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Cold Brew Latte',
        description: 'Cold brew with cold-foam milk and a hint of vanilla.',
        price: '5.50',
        image:
          'https://images.pexels.com/photos/4790055/pexels-photo-4790055.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'specialty',
    label: 'Specialty',
    items: [
      {
        name: 'Pour Over Flight',
        description: 'Three single-origin pours served side by side.',
        price: '8.00',
        image:
          'https://images.pexels.com/photos/33094574/pexels-photo-33094574.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Spanish Latte',
        description: 'Espresso, condensed milk, and steamed milk — rich and decadent.',
        price: '5.75',
        image:
          'https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Affogato',
        description: 'Vanilla bean gelato drowned in a hot espresso shot.',
        price: '6.50',
        image:
          'https://images.pexels.com/photos/15801080/pexels-photo-15801080.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Espresso Tonic',
        description: 'Espresso, tonic water, and a citrus twist over ice.',
        price: '5.25',
        image:
          'https://images.pexels.com/photos/2159095/pexels-photo-2159095.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    items: [
      {
        name: 'Butter Croissant',
        description: 'Flaky, laminated 24-hour dough baked fresh each morning.',
        price: '3.95',
        image:
          'https://images.pexels.com/photos/7333002/pexels-photo-7333002.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Almond Croissant',
        description: 'Filled with frangipane and topped with toasted almonds.',
        price: '4.50',
        image:
          'https://images.pexels.com/photos/21207660/pexels-photo-21207660.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Pain au Chocolat',
        description: 'Buttery pastry wrapped around dark Belgian chocolate batons.',
        price: '4.25',
        image:
          'https://images.pexels.com/photos/20212456/pexels-photo-20212456.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name: 'Cinnamon Roll',
        description: 'Pillowy brioche roll with cream cheese frosting.',
        price: '4.75',
        image:
          'https://images.pexels.com/photos/8344699/pexels-photo-8344699.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
];

export interface RoastLevel {
  id: string;
  label: string;
  description: string;
  priceModifier: number;
}

export const roastLevels: RoastLevel[] = [
  {
    id: 'light',
    label: 'Light Roast',
    description: "Bright, fruity, and floral — preserves the bean's origin character.",
    priceModifier: 0,
  },
  {
    id: 'medium',
    label: 'Medium Roast',
    description: 'Balanced body with chocolate and caramel notes.',
    priceModifier: 0,
  },
  {
    id: 'dark',
    label: 'Dark Roast',
    description: 'Bold, smoky, and intense with a heavy body and low acidity.',
    priceModifier: 1,
  },
];

export interface CoffeeOrigin {
  id: string;
  country: string;
  region: string;
  elevation: string;
  tastingNotes: string;
  priceModifier: number;
}

export const coffeeOrigins: CoffeeOrigin[] = [
  {
    id: 'ethiopia',
    country: 'Ethiopia',
    region: 'Yirgacheffe',
    elevation: '1,900m',
    tastingNotes: 'Jasmine, bergamot, stone fruit',
    priceModifier: 0,
  },
  {
    id: 'colombia',
    country: 'Colombia',
    region: 'Huila',
    elevation: '1,800m',
    tastingNotes: 'Milk chocolate, caramel, walnut',
    priceModifier: 0,
  },
  {
    id: 'guatemala',
    country: 'Guatemala',
    region: 'Antigua',
    elevation: '1,600m',
    tastingNotes: 'Cocoa, brown sugar, orange peel',
    priceModifier: 0,
  },
  {
    id: 'kenya',
    country: 'Kenya',
    region: 'Nyeri',
    elevation: '2,000m',
    tastingNotes: 'Blackcurrant, tomato, savory sweetness',
    priceModifier: 2,
  },
  {
    id: 'brazil',
    country: 'Brazil',
    region: 'Cerrado Mineiro',
    elevation: '1,200m',
    tastingNotes: 'Hazelnut, milk chocolate, low acidity',
    priceModifier: 0,
  },
  {
    id: 'panama',
    country: 'Panama',
    region: 'Boquete',
    elevation: '1,700m',
    tastingNotes: 'Peach, honey, white grape',
    priceModifier: 3,
  },
];

export interface GrindType {
  id: string;
  label: string;
  description: string;
}

export const grindTypes: GrindType[] = [
  { id: 'whole', label: 'Whole Bean', description: 'No grind — maximum freshness.' },
  { id: 'coarse', label: 'Coarse', description: 'French press & cold brew.' },
  { id: 'medium', label: 'Medium', description: 'Drip & pour over brewers.' },
  { id: 'fine', label: 'Fine', description: 'Espresso machines.' },
  { id: 'extra-fine', label: 'Extra Fine', description: 'Turkish coffee.' },
];

export const baseBlendPrice = 16;

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featureCards: FeatureCard[] = [
  {
    icon: Flame,
    title: 'Freshly Roasted',
    description:
      'Beans are roasted within 48 hours of shipping so you taste coffee at its peak.',
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description:
      'Direct-trade relationships ensure farmers are paid fairly and land is treated with care.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Free shipping on orders over $35, delivered to your door in 2–3 business days.',
  },
  {
    icon: Coffee,
    title: 'Cozy Ambience',
    description:
      'Our shops are designed to be your third place — warm, unhurried, and welcoming.',
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/36791006/pexels-photo-36791006.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Two cups of heart-shaped latte art on marble table',
    span: 'md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/287975/pexels-photo-287975.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Espresso cup with sugar pot on wooden table',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6747870/pexels-photo-6747870.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cappuccino with latte art on black saucer',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2159095/pexels-photo-2159095.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Barista pouring brewed coffee into a glass',
    span: 'md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/29157536/pexels-photo-29157536.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Heart latte art in a classic Italian cafe',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4392068/pexels-photo-4392068.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Top-view cappuccino latte art in black cup',
    span: '',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The pour over flight completely changed how I think about coffee. Each cup tasted like a different world. Redwood is in a league of its own.',
    name: 'Marcus Chen',
    role: 'Regular since 2021',
    avatar:
      'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      "I built my own blend online and it arrived three days later, perfectly roasted. The Kenya Nyeri is the best coffee I've had at home, period.",
    name: 'Sophia Larsen',
    role: 'Home barista',
    avatar:
      'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      'This is my third place. I come to work, to read, to meet friends. The atmosphere is impossibly warm and the baristas remember your name.',
    name: 'James Okonkwo',
    role: 'Freelance designer',
    avatar:
      'https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    quote:
      'Their ethically sourced beans make me feel good about every cup. And the nitro cold brew? I dream about it between visits.',
    name: 'Aisha Patel',
    role: 'Sustainability advocate',
    avatar:
      'https://images.pexels.com/photos/35490806/pexels-photo-35490806.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
];

export const locationInfo = {
  address: '412 Redwood Avenue, Portland, OR 97209',
  phone: '(503) 555-0142',
  email: 'hello@redwoodcoffee.com',
  mapEmbedSrc:
    'https://www.google.com/maps?q=412+NW+23rd+Ave+Portland+OR&output=embed',
  hours: [
    { day: 'Monday', hours: '6:30 AM – 7:00 PM' },
    { day: 'Tuesday', hours: '6:30 AM – 7:00 PM' },
    { day: 'Wednesday', hours: '6:30 AM – 7:00 PM' },
    { day: 'Thursday', hours: '6:30 AM – 8:00 PM' },
    { day: 'Friday', hours: '6:30 AM – 9:00 PM' },
    { day: 'Saturday', hours: '7:30 AM – 9:00 PM' },
    { day: 'Sunday', hours: '8:00 AM – 5:00 PM' },
  ],
  events: [
    { day: 'Tue', title: 'Latte Art Workshop', time: '6:00 PM' },
    { day: 'Thu', title: 'Live Acoustic Music', time: '7:00 PM' },
    { day: 'Sat', title: 'Cupping & Tasting', time: '10:00 AM' },
    { day: 'Sun', title: 'Kids Story Hour', time: '11:00 AM' },
  ],
};

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Sparkles,
    href: '#',
    label: 'Instagram',
  },
];

export const footerLinks = {
  explore: [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Build Your Blend', href: '#build-your-blend' },
    { label: 'Gallery', href: '#gallery' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Beans', href: '#about' },
    { label: 'Sustainability', href: '#about' },
    { label: 'Careers', href: '#contact' },
  ],
  support: [
    { label: 'Contact', href: '#contact' },
    { label: 'Shipping Info', href: '#contact' },
    { label: 'FAQs', href: '#contact' },
    { label: 'Wholesale', href: '#contact' },
  ],
};

export const blendPreviewImage =
  'https://images.pexels.com/photos/14848712/pexels-photo-14848712.jpeg?auto=compress&cs=tinysrgb&w=800';
