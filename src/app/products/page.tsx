'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Coconut' | 'Groundnut' | 'Spices' | 'Rice';
  grade: string;
  moisture: string;
  packaging: string;
  fclCapacity: string;
  description: string;
  image?: string;
}

const INITIAL_PRODUCTS: Product[] = [
  // --- 1. RICE (Karuppu Kavuni first) ---
  {
    id: 'p12',
    name: 'Emperor Rice (Karuppu Kavuni Black Rice)',
    category: 'Rice',
    grade: 'Heritage Whole Grain (Sortex Cleaned, Unpolished)',
    moisture: '< 12.5% Max',
    packaging: '1kg, 5kg, 10kg, 25kg Vacuum or Food-Grade PP Bags',
    fclCapacity: '20ft FCL: 24 - 25 Metric Tons',
    description: 'Ancient heirloom black rice cultivated across Tamil Nadu’s fertile Cauvery basin. Packed with powerful anthocyanin antioxidants, high dietary fiber, and essential minerals with an authentic nutty aroma and firm texture.',
    image: '/rice-karuppu-kavuni.png'
  },
  {
    id: 'p8',
    name: 'Thanjavur Ponni Boiled Rice',
    category: 'Rice',
    grade: 'Single / Double Boiled (100% Sortex Cleaned)',
    moisture: '< 13.0% Max',
    packaging: '5kg, 10kg, 25kg, 50kg BOPP / PP Bags',
    fclCapacity: '20ft FCL: 25 - 26 Metric Tons',
    description: 'Fine slender non-sticky grain from the Cauvery delta basin. High elongation ratio upon cooking with distinctive light texture, ideal for everyday South Indian and international retail distribution.',
    image: '/rice-ponni.png'
  },
  {
    id: 'p9',
    name: 'Palakkadan Matta Rice (Kerala Red Rice)',
    category: 'Rice',
    grade: 'Vadi Matta / Unda Matta (Double Boiled)',
    moisture: '< 13.0% Max',
    packaging: