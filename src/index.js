import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const buildSeatData = (seatMetadata, availabilityChance) => {
  var seatData = []
  for(var i = 1; i <= seatMetadata["maxRow"]; i++) {
    for (var j = 1; j <= seatMetadata["maxColumn"]; j++) {
      const availability = Math.random() > availabilityChance ? "Available" : "Taken";
      seatData.push({ row: i, column: j, availability: availability });
    }
  }

  return seatData;
}

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
  leftback: {
    zoneName: "Left Back Side",
    maxColumn: 3,
    maxRow: 10,
  },
  rightback: {
    zoneName: "Right Back Side",
    maxColumn: 3,
    maxRow: 10,
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

const seatData = {
  leftside: buildSeatData(seatMetadata["leftside"], 0.8),
  rightside: buildSeatData(seatMetadata["rightside"], 0.8),
  leftback: buildSeatData(seatMetadata["leftback"], 0.8),
  rightback: buildSeatData(seatMetadata["rightback"], 0.8),

  vip: buildSeatData(seatMetadata["vip"], 0.3),
  mid: buildSeatData(seatMetadata["mid"], 0.5),
  furthest: buildSeatData(seatMetadata["furthest"], 0.7),
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
