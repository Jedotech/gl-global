'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  Scale, 
  FileText, 
  Ship, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ClipboardList, 
  Sparkles, 
  Activity,
  Layers,
  ArrowDown
} from 'lucide-react';

export default function OurServicesPage() {
  const SERVICES = [
    {
      step: '01',
      phase: 'Origination & Due Diligence',
      badge: 'Upstream Verification',
      title: 'Sourcing Agent Representation & Mill Vetting',
      subtitle: 'Acting as your on-the-ground purchasing department in India',
      desc: 'We identify and physically audit agro-processing facilities directly in the primary producing belts. We inspect equipment, deshelling units, color sorters, and clean storage warehouses to verify physical production capacity and quality compliance before purchase commitments.',
      points: [
        'Direct mill price discovery with zero intermediary brokerage layer',
        'Physical factory inspection report with unedited photographic evidence',
        'Ethical labor and statutory environmental compliance verification',
        'Storage warehouse moisture and pest isolation audit',
      ],
      icon: Search,
      metrics: 'Zero-Middleman Sourcing',
    },
    {
      step: '02',
      phase: 'Batch Validation',
      badge: 'Laboratory Grade',
      title: 'Pre-Shipment Quality Control & Sampling',
      subtitle: 'Defending your quality specifications before cargo leaves the port',
      desc: 'We conduct independent composite sampling