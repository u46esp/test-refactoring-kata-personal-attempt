import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const seatData = {
  leftside: [
    { row: 1, column: 1, availability: "Available" },
    { row: 1, column: 2, availability: "Available" },
    { row: 1, column: 3, availability: "Available" },
    { row: 2, column: 1, availability: "Available" },
    { row: 2, column: 2, availability: "Available" },
    { row: 2, column: 3, availability: "Available" },
    { row: 3, column: 1, availability: "Available" },
    { row: 3, column: 2, availability: "Available" },
    { row: 3, column: 3, availability: "Available" },
    { row: 4, column: 1, availability: "Available" },
    { row: 4, column: 2, availability: "Available" },
    { row: 4, column: 3, availability: "Available" },
    { row: 5, column: 1, availability: "Available" },
    { row: 5, column: 2, availability: "Available" },
    { row: 5, column: 3, availability: "Available" },
    { row: 6, column: 1, availability: "Available" },
    { row: 6, column: 2, availability: "Available" },
    { row: 6, column: 3, availability: "Available" },
    { row: 7, column: 1, availability: "Available" },
    { row: 7, column: 2, availability: "Available" },
    { row: 7, column: 3, availability: "Available" },
    { row: 8, column: 1, availability: "Available" },
    { row: 8, column: 2, availability: "Available" },
    { row: 8, column: 3, availability: "Available" },
    { row: 9, column: 1, availability: "Available" },
    { row: 9, column: 2, availability: "Available" },
    { row: 9, column: 3, availability: "Available" },
    { row: 10, column: 1, availability: "Available" },
    { row: 10, column: 2, availability: "Available" },
    { row: 10, column: 3, availability: "Available" },
    { row: 11, column: 1, availability: "Available" },
    { row: 11, column: 2, availability: "Available" },
    { row: 11, column: 3, availability: "Available" },
    { row: 12, column: 1, availability: "Available" },
    { row: 12, column: 2, availability: "Available" },
    { row: 12, column: 3, availability: "Available" },
    { row: 13, column: 1, availability: "Available" },
    { row: 13, column: 2, availability: "Available" },
    { row: 13, column: 3, availability: "Available" },
    { row: 14, column: 1, availability: "Available" },
    { row: 14, column: 2, availability: "Available" },
    { row: 14, column: 3, availability: "Available" },
    { row: 15, column: 1, availability: "Available" },
    { row: 15, column: 2, availability: "Available" },
    { row: 15, column: 3, availability: "Available" },
  ],

  rightside: [
    { row: 1, column: 1, availability: "Available" },
    { row: 1, column: 2, availability: "Available" },
    { row: 1, column: 3, availability: "Available" },
    { row: 2, column: 1, availability: "Available" },
    { row: 2, column: 2, availability: "Available" },
    { row: 2, column: 3, availability: "Available" },
    { row: 3, column: 1, availability: "Available" },
    { row: 3, column: 2, availability: "Available" },
    { row: 3, column: 3, availability: "Available" },
    { row: 4, column: 1, availability: "Available" },
    { row: 4, column: 2, availability: "Available" },
    { row: 4, column: 3, availability: "Available" },
    { row: 5, column: 1, availability: "Available" },
    { row: 5, column: 2, availability: "Available" },
    { row: 5, column: 3, availability: "Available" },
    { row: 6, column: 1, availability: "Available" },
    { row: 6, column: 2, availability: "Available" },
    { row: 6, column: 3, availability: "Available" },
    { row: 7, column: 1, availability: "Available" },
    { row: 7, column: 2, availability: "Available" },
    { row: 7, column: 3, availability: "Available" },
    { row: 8, column: 1, availability: "Available" },
    { row: 8, column: 2, availability: "Available" },
    { row: 8, column: 3, availability: "Available" },
    { row: 9, column: 1, availability: "Available" },
    { row: 9, column: 2, availability: "Available" },
    { row: 9, column: 3, availability: "Available" },
    { row: 10, column: 1, availability: "Available" },
    { row: 10, column: 2, availability: "Available" },
    { row: 10, column: 3, availability: "Available" },
    { row: 11, column: 1, availability: "Available" },
    { row: 11, column: 2, availability: "Available" },
    { row: 11, column: 3, availability: "Available" },
    { row: 12, column: 1, availability: "Available" },
    { row: 12, column: 2, availability: "Available" },
    { row: 12, column: 3, availability: "Available" },
    { row: 13, column: 1, availability: "Available" },
    { row: 13, column: 2, availability: "Available" },
    { row: 13, column: 3, availability: "Available" },
    { row: 14, column: 1, availability: "Available" },
    { row: 14, column: 2, availability: "Available" },
    { row: 14, column: 3, availability: "Available" },
    { row: 15, column: 1, availability: "Available" },
    { row: 15, column: 2, availability: "Available" },
    { row: 15, column: 3, availability: "Available" },
  ],

  vip: [
    { row: 1, column: 1, availability: "Available" },
    { row: 1, column: 2, availability: "Available" },
    { row: 1, column: 3, availability: "Available" },
    { row: 1, column: 4, availability: "Available" },
    { row: 1, column: 5, availability: "Available" },
    { row: 1, column: 6, availability: "Available" },
    { row: 1, column: 7, availability: "Available" },
    { row: 1, column: 8, availability: "Available" },
    { row: 1, column: 9, availability: "Available" },
    { row: 1, column: 10, availability: "Available" },
    { row: 1, column: 11, availability: "Available" },
    { row: 1, column: 12, availability: "Available" },
    { row: 1, column: 13, availability: "Available" },
    { row: 1, column: 14, availability: "Available" },
    { row: 1, column: 15, availability: "Available" },
    { row: 1, column: 16, availability: "Available" },
    { row: 1, column: 17, availability: "Available" },
    { row: 1, column: 18, availability: "Available" },
    { row: 1, column: 19, availability: "Available" },
    { row: 1, column: 20, availability: "Available" },

    { row: 2, column: 1, availability: "Available" },
    { row: 2, column: 2, availability: "Available" },
    { row: 2, column: 3, availability: "Available" },
    { row: 2, column: 4, availability: "Available" },
    { row: 2, column: 5, availability: "Available" },
    { row: 2, column: 6, availability: "Available" },
    { row: 2, column: 7, availability: "Available" },
    { row: 2, column: 8, availability: "Available" },
    { row: 2, column: 9, availability: "Available" },
    { row: 2, column: 10, availability: "Available" },
    { row: 2, column: 11, availability: "Available" },
    { row: 2, column: 12, availability: "Available" },
    { row: 2, column: 13, availability: "Available" },
    { row: 2, column: 14, availability: "Available" },
    { row: 2, column: 15, availability: "Available" },
    { row: 2, column: 16, availability: "Available" },
    { row: 2, column: 17, availability: "Available" },
    { row: 2, column: 18, availability: "Available" },
    { row: 2, column: 19, availability: "Available" },
    { row: 2, column: 20, availability: "Available" },

    { row: 3, column: 1, availability: "Available" },
    { row: 3, column: 2, availability: "Available" },
    { row: 3, column: 3, availability: "Available" },
    { row: 3, column: 4, availability: "Available" },
    { row: 3, column: 5, availability: "Available" },
    { row: 3, column: 6, availability: "Available" },
    { row: 3, column: 7, availability: "Available" },
    { row: 3, column: 8, availability: "Available" },
    { row: 3, column: 9, availability: "Available" },
    { row: 3, column: 10, availability: "Available" },
    { row: 3, column: 11, availability: "Available" },
    { row: 3, column: 12, availability: "Available" },
    { row: 3, column: 13, availability: "Available" },
    { row: 3, column: 14, availability: "Available" },
    { row: 3, column: 15, availability: "Available" },
    { row: 3, column: 16, availability: "Available" },
    { row: 3, column: 17, availability: "Available" },
    { row: 3, column: 18, availability: "Available" },
    { row: 3, column: 19, availability: "Available" },
    { row: 3, column: 20, availability: "Available" },
  ],

  mid: [
    { row: 1, column: 1, availability: "Available" },
    { row: 1, column: 2, availability: "Available" },
    { row: 1, column: 3, availability: "Available" },
    { row: 1, column: 4, availability: "Available" },
    { row: 1, column: 5, availability: "Available" },
    { row: 1, column: 6, availability: "Available" },
    { row: 1, column: 7, availability: "Available" },
    { row: 1, column: 8, availability: "Available" },
    { row: 1, column: 9, availability: "Available" },
    { row: 1, column: 10, availability: "Available" },
    { row: 1, column: 11, availability: "Available" },
    { row: 1, column: 12, availability: "Available" },
    { row: 1, column: 13, availability: "Available" },
    { row: 1, column: 14, availability: "Available" },
    { row: 1, column: 15, availability: "Available" },
    { row: 1, column: 16, availability: "Available" },
    { row: 1, column: 17, availability: "Available" },
    { row: 1, column: 18, availability: "Available" },
    { row: 1, column: 19, availability: "Available" },
    { row: 1, column: 20, availability: "Available" },

    { row: 2, column: 1, availability: "Available" },
    { row: 2, column: 2, availability: "Available" },
    { row: 2, column: 3, availability: "Available" },
    { row: 2, column: 4, availability: "Available" },
    { row: 2, column: 5, availability: "Available" },
    { row: 2, column: 6, availability: "Available" },
    { row: 2, column: 7, availability: "Available" },
    { row: 2, column: 8, availability: "Available" },
    { row: 2, column: 9, availability: "Available" },
    { row: 2, column: 10, availability: "Available" },
    { row: 2, column: 11, availability: "Available" },
    { row: 2, column: 12, availability: "Available" },
    { row: 2, column: 13, availability: "Available" },
    { row: 2, column: 14, availability: "Available" },
    { row: 2, column: 15, availability: "Available" },
    { row: 2, column: 16, availability: "Available" },
    { row: 2, column: 17, availability: "Available" },
    { row: 2, column: 18, availability: "Available" },
    { row: 2, column: 19, availability: "Available" },
    { row: 2, column: 20, availability: "Available" },

    { row: 3, column: 1, availability: "Available" },
    { row: 3, column: 2, availability: "Available" },
    { row: 3, column: 3, availability: "Available" },
    { row: 3, column: 4, availability: "Available" },
    { row: 3, column: 5, availability: "Available" },
    { row: 3, column: 6, availability: "Available" },
    { row: 3, column: 7, availability: "Available" },
    { row: 3, column: 8, availability: "Available" },
    { row: 3, column: 9, availability: "Available" },
    { row: 3, column: 10, availability: "Available" },
    { row: 3, column: 11, availability: "Available" },
    { row: 3, column: 12, availability: "Available" },
    { row: 3, column: 13, availability: "Available" },
    { row: 3, column: 14, availability: "Available" },
    { row: 3, column: 15, availability: "Available" },
    { row: 3, column: 16, availability: "Available" },
    { row: 3, column: 17, availability: "Available" },
    { row: 3, column: 18, availability: "Available" },
    { row: 3, column: 19, availability: "Available" },
    { row: 3, column: 20, availability: "Available" },

    { row: 4, column: 1, availability: "Available" },
    { row: 4, column: 2, availability: "Available" },
    { row: 4, column: 3, availability: "Available" },
    { row: 4, column: 4, availability: "Available" },
    { row: 4, column: 5, availability: "Available" },
    { row: 4, column: 6, availability: "Available" },
    { row: 4, column: 7, availability: "Available" },
    { row: 4, column: 8, availability: "Available" },
    { row: 4, column: 9, availability: "Available" },
    { row: 4, column: 10, availability: "Available" },
    { row: 4, column: 11, availability: "Available" },
    { row: 4, column: 12, availability: "Available" },
    { row: 4, column: 13, availability: "Available" },
    { row: 4, column: 14, availability: "Available" },
    { row: 4, column: 15, availability: "Available" },
    { row: 4, column: 16, availability: "Available" },
    { row: 4, column: 17, availability: "Available" },
    { row: 4, column: 18, availability: "Available" },
    { row: 4, column: 19, availability: "Available" },
    { row: 4, column: 20, availability: "Available" },

    { row: 5, column: 1, availability: "Available" },
    { row: 5, column: 2, availability: "Available" },
    { row: 5, column: 3, availability: "Available" },
    { row: 5, column: 4, availability: "Available" },
    { row: 5, column: 5, availability: "Available" },
    { row: 5, column: 6, availability: "Available" },
    { row: 5, column: 7, availability: "Available" },
    { row: 5, column: 8, availability: "Available" },
    { row: 5, column: 9, availability: "Available" },
    { row: 5, column: 10, availability: "Available" },
    { row: 5, column: 11, availability: "Available" },
    { row: 5, column: 12, availability: "Available" },
    { row: 5, column: 13, availability: "Available" },
    { row: 5, column: 14, availability: "Available" },
    { row: 5, column: 15, availability: "Available" },
    { row: 5, column: 16, availability: "Available" },
    { row: 5, column: 17, availability: "Available" },
    { row: 5, column: 18, availability: "Available" },
    { row: 5, column: 19, availability: "Available" },
    { row: 5, column: 20, availability: "Available" },

    { row: 6, column: 1, availability: "Available" },
    { row: 6, column: 2, availability: "Available" },
    { row: 6, column: 3, availability: "Available" },
    { row: 6, column: 4, availability: "Available" },
    { row: 6, column: 5, availability: "Available" },
    { row: 6, column: 6, availability: "Available" },
    { row: 6, column: 7, availability: "Available" },
    { row: 6, column: 8, availability: "Available" },
    { row: 6, column: 9, availability: "Available" },
    { row: 6, column: 10, availability: "Available" },
    { row: 6, column: 11, availability: "Available" },
    { row: 6, column: 12, availability: "Available" },
    { row: 6, column: 13, availability: "Available" },
    { row: 6, column: 14, availability: "Available" },
    { row: 6, column: 15, availability: "Available" },
    { row: 6, column: 16, availability: "Available" },
    { row: 6, column: 17, availability: "Available" },
    { row: 6, column: 18, availability: "Available" },
    { row: 6, column: 19, availability: "Available" },
    { row: 6, column: 20, availability: "Available" },
  ],
  furthest: [
    { row: 1, column: 1, availability: "Available" },
    { row: 1, column: 2, availability: "Available" },
    { row: 1, column: 3, availability: "Available" },
    { row: 1, column: 4, availability: "Available" },
    { row: 1, column: 5, availability: "Available" },
    { row: 1, column: 6, availability: "Available" },
    { row: 1, column: 7, availability: "Available" },
    { row: 1, column: 8, availability: "Available" },
    { row: 1, column: 9, availability: "Available" },
    { row: 1, column: 10, availability: "Available" },
    { row: 1, column: 11, availability: "Available" },
    { row: 1, column: 12, availability: "Available" },
    { row: 1, column: 13, availability: "Available" },
    { row: 1, column: 14, availability: "Available" },
    { row: 1, column: 15, availability: "Available" },
    { row: 1, column: 16, availability: "Available" },
    { row: 1, column: 17, availability: "Available" },
    { row: 1, column: 18, availability: "Available" },
    { row: 1, column: 19, availability: "Available" },
    { row: 1, column: 20, availability: "Available" },

    { row: 2, column: 1, availability: "Available" },
    { row: 2, column: 2, availability: "Available" },
    { row: 2, column: 3, availability: "Available" },
    { row: 2, column: 4, availability: "Available" },
    { row: 2, column: 5, availability: "Available" },
    { row: 2, column: 6, availability: "Available" },
    { row: 2, column: 7, availability: "Available" },
    { row: 2, column: 8, availability: "Available" },
    { row: 2, column: 9, availability: "Available" },
    { row: 2, column: 10, availability: "Available" },
    { row: 2, column: 11, availability: "Available" },
    { row: 2, column: 12, availability: "Available" },
    { row: 2, column: 13, availability: "Available" },
    { row: 2, column: 14, availability: "Available" },
    { row: 2, column: 15, availability: "Available" },
    { row: 2, column: 16, availability: "Available" },
    { row: 2, column: 17, availability: "Available" },
    { row: 2, column: 18, availability: "Available" },
    { row: 2, column: 19, availability: "Available" },
    { row: 2, column: 20, availability: "Available" },

    { row: 3, column: 1, availability: "Available" },
    { row: 3, column: 2, availability: "Available" },
    { row: 3, column: 3, availability: "Available" },
    { row: 3, column: 4, availability: "Available" },
    { row: 3, column: 5, availability: "Available" },
    { row: 3, column: 6, availability: "Available" },
    { row: 3, column: 7, availability: "Available" },
    { row: 3, column: 8, availability: "Available" },
    { row: 3, column: 9, availability: "Available" },
    { row: 3, column: 10, availability: "Available" },
    { row: 3, column: 11, availability: "Available" },
    { row: 3, column: 12, availability: "Available" },
    { row: 3, column: 13, availability: "Available" },
    { row: 3, column: 14, availability: "Available" },
    { row: 3, column: 15, availability: "Available" },
    { row: 3, column: 16, availability: "Available" },
    { row: 3, column: 17, availability: "Available" },
    { row: 3, column: 18, availability: "Available" },
    { row: 3, column: 19, availability: "Available" },
    { row: 3, column: 20, availability: "Available" },

    { row: 4, column: 1, availability: "Available" },
    { row: 4, column: 2, availability: "Available" },
    { row: 4, column: 3, availability: "Available" },
    { row: 4, column: 4, availability: "Available" },
    { row: 4, column: 5, availability: "Available" },
    { row: 4, column: 6, availability: "Available" },
    { row: 4, column: 7, availability: "Available" },
    { row: 4, column: 8, availability: "Available" },
    { row: 4, column: 9, availability: "Available" },
    { row: 4, column: 10, availability: "Available" },
    { row: 4, column: 11, availability: "Available" },
    { row: 4, column: 12, availability: "Available" },
    { row: 4, column: 13, availability: "Available" },
    { row: 4, column: 14, availability: "Available" },
    { row: 4, column: 15, availability: "Available" },
    { row: 4, column: 16, availability: "Available" },
    { row: 4, column: 17, availability: "Available" },
    { row: 4, column: 18, availability: "Available" },
    { row: 4, column: 19, availability: "Available" },
    { row: 4, column: 20, availability: "Available" },

    { row: 5, column: 1, availability: "Available" },
    { row: 5, column: 2, availability: "Available" },
    { row: 5, column: 3, availability: "Available" },
    { row: 5, column: 4, availability: "Available" },
    { row: 5, column: 5, availability: "Available" },
    { row: 5, column: 6, availability: "Available" },
    { row: 5, column: 7, availability: "Available" },
    { row: 5, column: 8, availability: "Available" },
    { row: 5, column: 9, availability: "Available" },
    { row: 5, column: 10, availability: "Available" },
    { row: 5, column: 11, availability: "Available" },
    { row: 5, column: 12, availability: "Available" },
    { row: 5, column: 13, availability: "Available" },
    { row: 5, column: 14, availability: "Available" },
    { row: 5, column: 15, availability: "Available" },
    { row: 5, column: 16, availability: "Available" },
    { row: 5, column: 17, availability: "Available" },
    { row: 5, column: 18, availability: "Available" },
    { row: 5, column: 19, availability: "Available" },
    { row: 5, column: 20, availability: "Available" },

    { row: 6, column: 1, availability: "Available" },
    { row: 6, column: 2, availability: "Available" },
    { row: 6, column: 3, availability: "Available" },
    { row: 6, column: 4, availability: "Available" },
    { row: 6, column: 5, availability: "Available" },
    { row: 6, column: 6, availability: "Available" },
    { row: 6, column: 7, availability: "Available" },
    { row: 6, column: 8, availability: "Available" },
    { row: 6, column: 9, availability: "Available" },
    { row: 6, column: 10, availability: "Available" },
    { row: 6, column: 11, availability: "Available" },
    { row: 6, column: 12, availability: "Available" },
    { row: 6, column: 13, availability: "Available" },
    { row: 6, column: 14, availability: "Available" },
    { row: 6, column: 15, availability: "Available" },
    { row: 6, column: 16, availability: "Available" },
    { row: 6, column: 17, availability: "Available" },
    { row: 6, column: 18, availability: "Available" },
    { row: 6, column: 19, availability: "Available" },
    { row: 6, column: 20, availability: "Available" },

  ]
};

const seatMetadata = {
  furthest: {
    zoneName: "Furthest",
    maxColumn: 20,
    maxRow: 6,
  },
  mid: {
    zoneName: "Middle Area",
    maxColumn: 20,
    maxRow: 10,
  },
  leftside: {
    zoneName: "Left Side",
    maxColumn: 3,
    maxRow: 15,
  },
  rightside: {
    zoneName: "Right Side",
    maxColumn: 3,
    maxRow: 15,
  },
  standing: {
    zoneName: "Standing Area",
    maxColumn: 10,
    maxRow: 3,
  },
  vip: {
    zoneName: "VIP with Hi - Touch",
    maxColumn: 20,
    maxRow: 3,
  },
};

const seatPricing = [
  { zone: "furthest", regularPrice: 2500, premiumMemberPrice: 2125 },
  { zone: "mid", regularPrice: 3500, premiumMemberPrice: 2975 },
  { zone: "leftside", regularPrice: 4000, premiumMemberPrice: 3400 },
  { zone: "rightside", regularPrice: 4000, premiumMemberPrice: 3400 },
  { zone: "standing", regularPrice: 3000, premiumMemberPrice: 2550 },
  { zone: "frontmost", regularPrice: 6000, premiumMemberPrice: 5100 },
  { zone: "vip", regularPrice: 2500, premiumMemberPrice: 6375 },
];

root.render(
  <StrictMode>
    <App
      seatData={seatData}
      seatPricing={seatPricing}
      seatMetadata={seatMetadata}
      isCustomerPremiumMember={true}
    />
  </StrictMode>,
);
