/**
 * Fleet Specifications & Pricing Data with Real Vehicle Imagery
 */

export const FLEET_VEHICLES = [
  {
    id: "tata-ace",
    name: "Tata Ace ('Chhota Hathi')",
    category: "Mini Truck / Tempo",
    payloadCapacity: "750 kg",
    payloadKg: 750,
    dimensions: "5.5 ft (L) x 4.8 ft (W) x 4.5 ft (H)",
    volumeCuFt: "120 cu.ft",
    basePrice: 499,
    baseKm: 5,
    ratePerKm: 18,
    fuelType: "Diesel / CNG",
    floorHeight: "2.4 ft from ground",
    coverType: "Open Deck with Heavy Waterproof Tarpaulin",
    badge: "Most Popular for City Shifting",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    bestFor: [
      "1 RK / Studio apartment shifting",
      "Single large appliances (Fridge, Washing Machine)",
      "Retail shop carton deliveries",
      "Local courier & ecommerce bulk parcel drops",
      "Plywood sheets & light hardware items"
    ],
    specs: {
      lengthFt: 5.5,
      widthFt: 4.8,
      heightFt: 4.5,
      maxPayloadTons: 0.75,
      turningRadius: "4.3 m (Easy for narrow gallis)",
      driverAssistantIncluded: false
    },
    samplePhotoPlaceholder: "[REPLACE: Photo of loaded Tata Ace at customer site]"
  },
  {
    id: "bolero-pickup",
    name: "Mahindra Bolero Maxi Truck / Dost",
    category: "Commercial Pickup",
    payloadCapacity: "1.2 - 1.5 Tonne (1,500 kg)",
    payloadKg: 1500,
    dimensions: "8.2 ft (L) x 5.2 ft (W) x 5.5 ft (H)",
    volumeCuFt: "230 cu.ft",
    basePrice: 799,
    baseKm: 5,
    ratePerKm: 24,
    fuelType: "Heavy-duty Turbo Diesel",
    floorHeight: "2.8 ft from ground",
    coverType: "High-rail body with double tarpaulin & lashing ropes",
    badge: "Heavy City & Suburban Loads",
    imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    bestFor: [
      "1 BHK complete household shifting",
      "Commercial wholesale goods (Grain, FMCG, Hardware)",
      "Catering equipment & event setup items",
      "Fabrication metal items & pipes up to 9ft",
      "Industrial spare parts & engineering components"
    ],
    specs: {
      lengthFt: 8.2,
      widthFt: 5.2,
      heightFt: 5.5,
      maxPayloadTons: 1.5,
      turningRadius: "5.8 m",
      driverAssistantIncluded: false
    },
    samplePhotoPlaceholder: "[REPLACE: Photo of Vanguard Bolero Maxi Truck in yard]"
  },
  {
    id: "eicher-14ft",
    name: "Tata 407 / Eicher Pro 14ft",
    category: "Medium Duty Truck",
    payloadCapacity: "3.5 - 4.0 Tonne (4,000 kg)",
    payloadKg: 4000,
    dimensions: "14 ft (L) x 6.5 ft (W) x 6.5 ft (H)",
    volumeCuFt: "590 cu.ft",
    basePrice: 1699,
    baseKm: 10,
    ratePerKm: 38,
    fuelType: "BS6 Heavy Diesel",
    floorHeight: "3.5 ft from ground",
    coverType: "Closed Steel Container / High Side Open Deck",
    badge: "Ideal for 2BHK / 3BHK Shifting",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    bestFor: [
      "2 BHK / 3 BHK complete home furniture & appliances",
      "Office furniture & modular workstations",
      "Industrial machinery, motors & electrical panels",
      "Agricultural produce & wholesale bags",
      "Intercity factory-to-distributor distribution"
    ],
    specs: {
      lengthFt: 14,
      widthFt: 6.5,
      heightFt: 6.5,
      maxPayloadTons: 4.0,
      turningRadius: "6.9 m",
      driverAssistantIncluded: true
    },
    samplePhotoPlaceholder: "[REPLACE: Photo of Vanguard 14ft truck at loading dock]"
  },
  {
    id: "eicher-19ft",
    name: "Eicher Pro 17ft / 19ft (6-Wheeler)",
    category: "Heavy Freight Truck",
    payloadCapacity: "7.0 - 9.0 Tonne (9,000 kg)",
    payloadKg: 9000,
    dimensions: "19 ft (L) x 7.2 ft (W) x 7.5 ft (H)",
    volumeCuFt: "1,020 cu.ft",
    basePrice: 2899,
    baseKm: 15,
    ratePerKm: 52,
    fuelType: "BS6 Heavy Turbo Diesel",
    floorHeight: "4.0 ft from ground",
    coverType: "All-Weather Sealed Metal Container / Heavy Deck",
    badge: "High-Volume Intercity Freight",
    imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    bestFor: [
      "Industrial manufacturing goods & heavy pallets",
      "Large corporate office & IT setup relocation",
      "Automotive components & sheet metal goods",
      "FMCG full truckload direct distributor supply",
      "Heavy construction materials & electrical transformers"
    ],
    specs: {
      lengthFt: 19,
      widthFt: 7.2,
      heightFt: 7.5,
      maxPayloadTons: 9.0,
      turningRadius: "8.2 m",
      driverAssistantIncluded: true
    },
    samplePhotoPlaceholder: "[REPLACE: Photo of Vanguard 19ft 6-wheeler on highway]"
  },
  {
    id: "container-32ft",
    name: "Tata Signa 32ft Multi-Axle Container (10-Wheeler)",
    category: "Full Truckload (FTL) Long-Haul",
    payloadCapacity: "15 - 20 Tonne (20,000 kg)",
    payloadKg: 20000,
    dimensions: "32 ft (L) x 8.0 ft (W) x 8.5 ft (H)",
    volumeCuFt: "2,170 cu.ft",
    basePrice: 5999,
    baseKm: 25,
    ratePerKm: 78,
    fuelType: "Heavy Multi-Axle Diesel Rig",
    floorHeight: "4.5 ft from ground",
    coverType: "High-Cube Sealed Security Container with Tamper Seals",
    badge: "National Highway Long-Haul",
    imageUrl: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=800&q=80",
    bestFor: [
      "National inter-state supply chain logistics",
      "E-commerce fulfillment center bulk feeder routes",
      "Pharmaceuticals & temperature-sensitive cargo (on request)",
      "Textiles, consumer durables & white goods",
      "Port & container freight station (CFS) transport"
    ],
    specs: {
      lengthFt: 32,
      widthFt: 8.0,
      heightFt: 8.5,
      maxPayloadTons: 20.0,
      turningRadius: "11.5 m",
      driverAssistantIncluded: true
    },
    samplePhotoPlaceholder: "[REPLACE: Photo of Vanguard 32ft multi-axle truck]"
  }
];

// Common Load Types for instant fare calculator
export const LOAD_TYPES = [
  { id: "house-1bhk", label: "Household Shifting (1 BHK / Studio)", recommendedVehicle: "bolero-pickup", defaultHelpers: 2 },
  { id: "house-2bhk", label: "Household Shifting (2 BHK / 3 BHK)", recommendedVehicle: "eicher-14ft", defaultHelpers: 3 },
  { id: "appliances", label: "Single Heavy Appliance / Furniture", recommendedVehicle: "tata-ace", defaultHelpers: 1 },
  { id: "commercial-stock", label: "Commercial Retail / Wholesale Stock", recommendedVehicle: "bolero-pickup", defaultHelpers: 1 },
  { id: "industrial-machinery", label: "Industrial Machinery / Engineering Goods", recommendedVehicle: "eicher-19ft", defaultHelpers: 2 },
  { id: "bulk-freight", label: "Factory Raw Material / Bulk FTL", recommendedVehicle: "container-32ft", defaultHelpers: 0 },
  { id: "courier-parcels", label: "Cartons / Parcel Bags / Sample Goods", recommendedVehicle: "tata-ace", defaultHelpers: 1 }
];

// Popular route distances for instant calculation demo
export const POPULAR_ROUTES = [
  { from: "Pune (Wakad / Hinjawadi)", to: "Pune (Kharadi / Hadapsar)", distanceKm: 28, estDuration: "1 hr 15 mins" },
  { from: "Pune (Transport Nagar)", to: "Navi Mumbai (Vashi / APMC)", distanceKm: 135, estDuration: "3 hrs 30 mins" },
  { from: "Pune", to: "Nashik (Ambad MIDC)", distanceKm: 215, estDuration: "5 hrs 30 mins" },
  { from: "Pune", to: "Kolhapur (Shiroli MIDC)", distanceKm: 235, estDuration: "5 hrs 45 mins" },
  { from: "Mumbai", to: "Surat (Industrial Estate)", distanceKm: 285, estDuration: "6 hrs 30 mins" },
  { from: "Pune", to: "Bangalore (Peenya Hub)", distanceKm: 840, estDuration: "18 - 20 hrs" }
];
