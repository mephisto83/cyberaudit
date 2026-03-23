export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  scans: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface DashboardStats {
  securityScore: number;
  vulnerabilitiesCritical: number;
  vulnerabilitiesHigh: number;
  vulnerabilitiesMedium: number;
  vulnerabilitiesLow: number;
  scansThisMonth: number;
  lastScanDate: Date;
}

export interface Vulnerability {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  cve?: string;
  detectedAt: Date;
}

export interface Scan {
  id: string;
  name: string;
  status: 'completed' | 'running' | 'failed';
  findingsCount: number;
  vulnerabilities: Vulnerability[];
  completedAt: Date;
  duration: number;
}

export interface NISTFunction {
  name: 'Identify' | 'Protect' | 'Detect' | 'Respond' | 'Recover';
  score: number;
}

export interface ScanUsage {
  used: number;
  limit: number;
}

export interface BillingInfo {
  currentPlan: 'free' | 'pro' | 'enterprise';
  scanUsage: ScanUsage;
  renewalDate: Date;
  nextInvoiceAmount: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';
