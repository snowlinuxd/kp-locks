import { 
  Lock, 
  Key, 
  DoorClosed, 
  Flame, 
  CheckCircle2, 
  Settings, 
  Wrench, 
  Activity, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  technicalTerm: string;
}

export interface TrustPoint {
  title: string;
  description: string;
  iconName: string;
}

export const WORKSHOP_LOCATION = {
  address: "27, Kuyavar 2nd Street, Nagal Nagar",
  city: "Dindigul",
  pincode: "624003",
  state: "Tamil Nadu, India",
  coords: { lat: 10.3667, lng: 77.9667 } // Dindigul coordinates
};

export const CONTACT_NUMBERS = [
  { label: "Primary Partner", phone: "7373895801" },
  { label: "Emergency Lock Service", phone: "9942861337" }
];

export const WORKING_HOURS = "24/7 Security & Lock Out Support Available";

export const SERVICES: Service[] = [
  {
    id: "lock-manufacturing",
    title: "Handmade Dindigul Lock Manufacturing",
    description: "The pride of Tamil Nadu. Heavy-duty solid brass and iron locks, manually forged and hand-milled. Virtually indestructible design using ancient internal lever combinations.",
    details: [
      "Traditional 'Manga' (Mango) lock structure",
      "Multi-lever alignment-based lock mechanisms (up to 12 levers)",
      "High grade copper-alloy brass internal bodies",
      "Tamper-proof dual shroud shackles"
    ],
    iconName: "Lock"
  },
  {
    id: "all-kind-services",
    title: "All Kind of Lock Services",
    description: "Full-scale locksmith service for modern homes, offices, temples, and industrial structures. From sleek keyless entry to ancestral gate locks.",
    details: [
      "Mortise & rim lock installation",
      "Key duplication & re-keying",
      "Smart electronic lock configuration",
      "Classic lock restoration"
    ],
    iconName: "Key"
  },
  {
    id: "door-opening",
    title: "Door Lock Missing Opening",
    description: "Lost your keys or locked out? Dynamic non-destructive lock manipulation, safe bypasses, and on-site instant key casting.",
    details: [
      "Non-destructive opening methodologies",
      "Lost key recreation from scratch",
      "Commercial safe/cabinet cracking",
      "Residential deadlock bypasses"
    ],
    iconName: "DoorClosed"
  },
  {
    id: "emergency-service",
    title: "Emergency Lock Service",
    description: "Available 24 hours a day, 7 days a week. Rapid local response vehicle equipped with machinery to resolve locksmith deadlocks instantly.",
    details: [
      "24/7 lightning response",
      "Residential entry post-break-ins",
      "Vehicle gate override",
      "Broken key extraction from inside cylinders"
    ],
    iconName: "Zap"
  },
  {
    id: "custom-solutions",
    title: "Custom Lock Solutions",
    description: "Bespoke security engineering. We manufacture locks with custom weight ratios, uniquely carved master keys (1 key opens 3 locks), and extra long security cylinders.",
    details: [
      "Master-key family suites",
      "Bespoke physical security consulting",
      "Extreme-weather outdoor padlocks",
      "Extra-long 12-inch security solid shafts"
    ],
    iconName: "Settings"
  },
  {
    id: "repair-maintenance",
    title: "Lock Repair & Maintenance",
    description: "Extend the life of your heirloom locks. We repair worn levers, align pins, lubricate antique castings, and service traditional Dindigul puzzle locks.",
    details: [
      "Lever re-tuning and reset",
      "Authentic brass polishing and oxide treatment",
      "Pin-cylinder deep chemical cleaning",
      "Lock spring reinforcing"
    ],
    iconName: "Wrench"
  }
];

export const MANUFACTURING_STEPS: Step[] = [
  {
    number: "01",
    title: "Metal Selection",
    description: "We pick top-tier raw red-brass (copper/zinc alloy) and structural steel plates. Each sheet is measured for critical density to ensure it withstands over 2 tons of impact force.",
    technicalTerm: "Alloy Hardness Testing"
  },
  {
    number: "02",
    title: "Handmade Shaping",
    description: "Blazing temperature forging. The lock outer shell is beaten manual-stroke-by stroke. Each lock inherits an organic texture, marking its individuality and manual-forged origin.",
    technicalTerm: "Anvil Craft Shaping"
  },
  {
    number: "03",
    title: "Lock Mechanism Setting",
    description: "This is where Dindigul magic happens. Levers are hand-filed to micro-tolerances. Each brass keyway is manually slotted, creating one-of-a-kind security combinations.",
    technicalTerm: "Precision Lever Configuration"
  },
  {
    number: "04",
    title: "Polishing & Buffing",
    description: "Locks go through premium high-speed wheel buffs. We use traditional compounds to unleash the natural brushed satin-gold tone of traditional brass and high gloss steel.",
    technicalTerm: "Satin Buff Finish"
  },
  {
    number: "05",
    title: "Final Quality Check",
    description: "Every lock is subjected to extreme cycle toggles, manual pick tests, tensioner impacts, and structural checks. We sign off only when the dual click is flawlessly deep.",
    technicalTerm: "Tensile & Security Clearance"
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Handmade Quality",
    description: "No two keys or locks are identical. Individually forged, machined, and calibrated for ultra-secure resistance to standard pick tools.",
    iconName: "Sparkles"
  },
  {
    title: "Dindigul Lock Tradition",
    description: "Preserving a 100-year legacy of prestigious lock artistry. Famous for extreme strength, trusted by temples, treasuries, and historic complexes.",
    iconName: "ShieldCheck"
  },
  {
    title: "Strong Metal Build",
    description: "Made with thick solid brass plates and hard steel shackle-guards. Resistant to cutting, drilling, sawing, and environmental rusting.",
    iconName: "Flame"
  },
  {
    title: "24/7 Local Support",
    description: "Day or night, our expert locksmiths are on stand-by with fully stocked mobile units to assist in lockouts.",
    iconName: "Clock"
  },
  {
    title: "Fast Local Response",
    description: "Operating natively from Kuyavar Street, Dindigul. We arrive in Nagal Nagar and surrounding zones in record time.",
    iconName: "Zap"
  },
  {
    title: "Trusted Craftsmanship",
    description: "Passed down through generations of lock artisans. Handcrafted in Dindigul with rigorous quality and lifetime security stability.",
    iconName: "CheckCircle2"
  }
];
