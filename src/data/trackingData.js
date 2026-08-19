/**
 * Mock Shipment Tracking Data for Live Simulator
 */

export const MOCK_SHIPMENTS = {
  "VG-84920": {
    lrNumber: "VG-84920",
    bookingDate: "Today, 07:30 AM",
    status: "IN_TRANSIT",
    statusLabel: "In Transit on Highway",
    statusColor: "#f95700",
    origin: "Pune Yard (Bhosari MIDC)",
    destination: "Navi Mumbai (APMC Market)",
    vehicleType: "Eicher Pro 17ft (MH 14 EM 4821)",
    driverName: "Sanjay Kumar Gurjar",
    driverPhone: "+91 98765 00123",
    driverRating: 4.9,
    currentSpeed: "54 km/h",
    currentLocation: "Lonavala Ghat Bypass (Km 78)",
    estDeliveryTime: "Today, 02:45 PM",
    cargoDescription: "38 Pallets of Automotive Precision Components",
    weight: "5,800 kg",
    insuranceCovered: true,
    totalDistanceKm: 145,
    distanceCoveredKm: 88,
    timeline: [
      { time: "07:30 AM", title: "Consignment Booked & LR Issued", desc: "Digital E-Way bill validated at Pune Dispatch Desk", completed: true },
      { time: "08:45 AM", title: "Cargo Loading & Strapping Completed", desc: "Inspected by Yard Supervisor (Mr. Vinod Jadhav)", completed: true },
      { time: "09:30 AM", title: "Dispatched from Pune Hub", desc: "Departed via Old Highway bypass with seal #VG-8921", completed: true },
      { time: "11:15 AM", title: "Passed Talegaon Toll Plaza", desc: "Fastag scanned • Running on scheduled speed", completed: true },
      { time: "01:20 PM", title: "Current: Lonavala Ghat Expressway", desc: "Live GPS reporting steady transit (54 km/h)", completed: true, current: true },
      { time: "02:45 PM (Est.)", title: "Expected Arrival at Consignee Yard", desc: "Navi Mumbai Gate 4 Handover", completed: false }
    ]
  },
  "VG-55102": {
    lrNumber: "VG-55102",
    bookingDate: "Today, 09:15 AM",
    status: "OUT_FOR_DELIVERY",
    statusLabel: "Out for Doorstep Delivery",
    statusColor: "#ffb703",
    origin: "Kothrud, Pune",
    destination: "Wakad, Pune (Dutta Mandir Road)",
    vehicleType: "Mahindra Bolero Maxi Truck (MH 12 QX 9912)",
    driverName: "Rameshwar 'Bablu' Yadav",
    driverPhone: "+91 98765 00456",
    driverRating: 4.8,
    currentSpeed: "22 km/h (City Traffic)",
    currentLocation: "Bavdhan Flyover Junction",
    estDeliveryTime: "Within 35 Minutes",
    cargoDescription: "Complete 2BHK Household Furniture & 42-inch TV",
    weight: "1,200 kg",
    insuranceCovered: true,
    totalDistanceKm: 24,
    distanceCoveredKm: 18,
    timeline: [
      { time: "09:15 AM", title: "Pickup Completed at Kothrud", desc: "2 Helpers loaded items with safety bubble wrap", completed: true },
      { time: "10:00 AM", title: "Vehicle En Route via Chandani Chowk", desc: "Driver safely navigating city traffic", completed: true },
      { time: "10:45 AM", title: "Current: Approaching Wakad Destination", desc: "Driver will call 10 minutes prior to arrival", completed: true, current: true },
      { time: "11:20 AM (Est.)", title: "Unloading & Item Placement", desc: "Helpers will assist with heavy furniture placement", completed: false }
    ]
  },
  "VG-99231": {
    lrNumber: "VG-99231",
    bookingDate: "Yesterday, 04:00 PM",
    status: "DELIVERED",
    statusLabel: "Delivered & Signed POD Available",
    statusColor: "#22c55e",
    origin: "Nashik MIDC",
    destination: "Chakan Industrial Zone, Pune",
    vehicleType: "Tata Signa 32ft Container (MH 15 AG 7741)",
    driverName: "Balwinder Singh",
    driverPhone: "+91 98765 00789",
    driverRating: 5.0,
    currentSpeed: "Parked at Destination",
    currentLocation: "Chakan Phase-2 Gate 3",
    estDeliveryTime: "Delivered on Yesterday, 11:40 PM",
    cargoDescription: "18.5 Tonnes Industrial Raw Steel Billets",
    weight: "18,500 kg",
    insuranceCovered: true,
    totalDistanceKm: 215,
    distanceCoveredKm: 215,
    podReceiverName: "Mahesh Shinde (Store Manager)",
    podTime: "11:45 PM",
    timeline: [
      { time: "04:00 PM", title: "Loaded & Weighed at Nashik Plant", desc: "Gross Weight 32.4T Verified at Weighbridge", completed: true },
      { time: "05:30 PM", title: "Highway Departure via Sangamner", desc: "All seals checked and logged", completed: true },
      { time: "09:15 PM", title: "Crossed Narayangaon Checkpoint", desc: "Clear transit with zero stoppage", completed: true },
      { time: "11:40 PM", title: "Delivered at Chakan Unloading Bay", desc: "Consignee signed physical & digital LR POD", completed: true, current: true }
    ]
  }
};

/**
 * Generate synthetic tracking details if a user enters any custom LR/Docket number
 */
export function getTrackingDetails(inputCode) {
  const code = (inputCode || "").trim().toUpperCase();
  if (MOCK_SHIPMENTS[code]) {
    return MOCK_SHIPMENTS[code];
  }
  
  // Return dynamic mock for any code
  return {
    lrNumber: code || "VG-DEMO123",
    bookingDate: "Today, 08:00 AM",
    status: "IN_TRANSIT",
    statusLabel: "Active Consignment En Route",
    statusColor: "#f95700",
    origin: "Regional Transport Hub (Yard #4)",
    destination: "Client Specified Delivery Location",
    vehicleType: "Vanguard Commercial Fleet Unit (GPS Active)",
    driverName: "Kailash Waghmare",
    driverPhone: "+91 98765 43210",
    driverRating: 4.9,
    currentSpeed: "48 km/h",
    currentLocation: "Inter-city Highway Corridor",
    estDeliveryTime: "Estimated 2 - 4 Hours",
    cargoDescription: "Standard Commercial Goods / Shifting Consignment",
    weight: "Verified at Dispatch",
    insuranceCovered: true,
    totalDistanceKm: 120,
    distanceCoveredKm: 65,
    timeline: [
      { time: "08:00 AM", title: "LR Generated & Vehicle Assigned", desc: "Pre-trip mechanical safety check cleared", completed: true },
      { time: "09:15 AM", title: "Goods Loaded & Lashings Secured", desc: "Waterproof tarpaulin and safety seals locked", completed: true },
      { time: "10:30 AM", title: "Dispatched from Origin Hub", desc: "Live GPS active and tracking link generated", completed: true, current: true },
      { time: "Estimated", title: "En Route to Destination", desc: "Driver adhering to safe highway corridor speed", completed: false },
      { time: "Estimated", title: "Doorstep Delivery & POD Handover", desc: "Signature on delivery document", completed: false }
    ]
  };
}
