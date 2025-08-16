// Extended mock data with sellers for buyer-facing views
import avatar2 from "../assets/avatar-2.png";

export type MockBuyer = {
  id: string;
  name: string;
  headline?: string;
  avatar?: string;
  isVerified?: boolean;
  about?: string;
  type?: string;
  capitalRange?: string;
  industries: string[];
};

export const mockBuyers: MockBuyer[] = [
  {
    id: "b1",
    name: "Acme Growth Fund",
    headline: "Private equity — growth-stage",
    avatar: avatar2,
    isVerified: true,
    about: "Looking for profitable SaaS companies in North America.",
    type: "PE",
    capitalRange: "$5M–$50M",
    industries: ["SaaS", "B2B", "Fintech"],
  },
  {
    id: "b2",
    name: "Sierra Ventures",
    headline: "Strategic acquirer",
    avatar: undefined,
    isVerified: false,
    about: "Interested in platform plays with strong retention.",
    type: "Corporate",
    capitalRange: "$1M–$10M",
    industries: ["SaaS", "Marketplace"],
  },
  {
    id: "b3",
    name: "Harbor Capital",
    headline: "Sector-focused investor",
    avatar: undefined,
    isVerified: false,
    about: "Focused on B2B software with recurring revenue.",
    type: "VC",
    capitalRange: "$2M–$25M",
    industries: ["SaaS", "Data", "Healthcare"],
  },
];

export type Seller = {
  id: string;
  businessName: string;
  industry: string;
  location: string; // city/region
  yearsInOperation?: number;
  businessModel?: string;
  shortPitch?: string;
  keyHighlights?: string[]; // major clients, market position
  revenueRange?: string; // e.g., "$1M–$2M"
  profitabilityStatus?: string; // profitable, break-even, etc.
  growthTrend?: "positive" | "stable" | "declining";
  employeesCount?: number;
  keyAssets?: string[]; // equipment, patents, IP
  customerBaseType?: string; // B2B/B2C
  askingPrice?: string;
  dealType?: string; // asset sale, share sale, merger
  reasonForSelling?: string;
  logo?: string; // asset path
  images?: string[]; // asset paths
  // Post-NDA details (sensitive)
  financials?: {
    revenue: string;
    ebitda?: string;
    notes?: string;
  };
  customerListSummary?: string;
  operationalNotes?: string;
  legalDocsSummary?: string;
};

export const mockSellers: Seller[] = [
  {
    id: "s1",
    businessName: "BrightApps, Inc.",
    industry: "SaaS — B2B",
    location: "Austin, TX",
    yearsInOperation: 7,
    businessModel: "SaaS (subscription)",
    shortPitch: "High-retention SaaS for sales teams with integrated analytics.",
    keyHighlights: ["50+ enterprise customers", "80% gross margin", "Proprietary recommendation engine"],
    revenueRange: "$3M–$4M",
    profitabilityStatus: "profitable",
    growthTrend: "positive",
    employeesCount: 28,
    keyAssets: ["Proprietary ML IP", "Customer dashboards and integrations", "Trademarked brand"],
    customerBaseType: "B2B (Sales & CRM)",
    askingPrice: "$18M (or POA)",
    dealType: "share sale",
    reasonForSelling: "Founders seeking liquidity and strategic partner",
    logo: avatar2,
    images: [],
    financials: {
      revenue: "$3.6M (TTM)",
      ebitda: "$900k",
      notes: "Strong recurring revenues; AR growth 22% YoY",
    },
    customerListSummary: "50 enterprise customers across fintech and adtech verticals (redacted pre-NDA).",
    operationalNotes: "Cloud-hosted, SOC2 compliant, 24/7 support SLA.",
    legalDocsSummary: "Standard customer contracts, IP assignment agreements available post-NDA.",
  },
  {
    id: "s2",
    businessName: "Cornerstone Retail Ltd.",
    industry: "Retail — Niche consumer goods",
    location: "Portland, OR",
    yearsInOperation: 12,
    businessModel: "Ecommerce + wholesale",
    shortPitch: "Niche brand with loyal subscriber base and proprietary product lines.",
    keyHighlights: ["20k active subscribers", "Long-standing wholesale partnerships"],
    revenueRange: "$1.2M–$1.6M",
    profitabilityStatus: "break-even",
    growthTrend: "stable",
    employeesCount: 14,
    keyAssets: ["Manufacturing relationships", "Trademarked product designs"],
    customerBaseType: "B2C (direct + wholesale)",
    askingPrice: "Price on request",
    dealType: "asset sale or asset + stock mix",
    reasonForSelling: "Owner retirement",
    logo: undefined,
    images: [],
    financials: {
      revenue: "$1.4M (TTM)",
      ebitda: "$50k",
      notes: "Seasonal sales peaks; wholesale margins stronger than D2C",
    },
    customerListSummary: "Subscriber list segmented by product category (available post-NDA).",
    operationalNotes: "Manufacturing contracts and supplier agreements available post-NDA.",
    legalDocsSummary: "Lease and distribution agreements to be provided post-NDA.",
  },
];