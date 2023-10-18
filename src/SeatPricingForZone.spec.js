import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from '@jest/globals';
import "@testing-library/jest-dom";

import { SeatPricingForZone } from "./SeatPricingForZone";

describe('SeatPricingForZone', () => {
  it.each`
  zoneName
  ${"furthest"}
  ${"closer"}
  ${"standing"}
  ${"frontmost"}
  ${"hitouch"}
  `("Renders zone name $zoneName correctly", ({zoneName}) => {
    const zoneInfo = { 
      zoneName: zoneName, 
      regularPrice: 100, 
      premiumMemberPrice: 200 
    }
    render(<SeatPricingForZone
      zoneInfo={zoneInfo}
      isCustomerPremiumMember={false} />)

    expect(screen.getByText(zoneName, { exact: false })).toBeInTheDocument()
})
  it.each`
    isCustomerPremiumMember | regularPrice | canSeePremiumPrice | premiumMemberPrice
    ${false}                | ${200}       | ${false}           | ${150}
    ${false}                | ${250}       | ${false}           | ${200}
    ${false}                | ${500}       | ${false}           | ${400}
    ${false}                | ${800}       | ${false}           | ${600}
    ${false}                | ${1500}      | ${false}           | ${1200}
    ${true}                 | ${200}       | ${true}            | ${150}
    ${true}                 | ${250}       | ${true}            | ${200}
    ${true}                 | ${500}       | ${true}            | ${400}
    ${true}                 | ${800}       | ${true}            | ${600}
    ${false}                | ${1500}      | ${false}           | ${1200}
      `("Given { isCustomerPremiumMember : $isCustomerPremiumMember }, should display its price(s) correctly",
    ({ isCustomerPremiumMember, regularPrice, canSeePremiumPrice, premiumMemberPrice }) => {
      const zoneInfo = { 
        zoneName: "ZONE_NAME", 
        regularPrice: regularPrice, 
        premiumMemberPrice: premiumMemberPrice 
      }
        render(<SeatPricingForZone
        zoneInfo={zoneInfo}
        isCustomerPremiumMember={isCustomerPremiumMember} />)

      const formatPrice = (number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(number);
      expect(screen.getByText(formatPrice(regularPrice), { exact: false })).toBeInTheDocument()

      if (canSeePremiumPrice) {
        expect(screen.getByText(formatPrice(premiumMemberPrice), { exact: false })).toBeInTheDocument()
      } else {
        expect(screen.queryByText(formatPrice(premiumMemberPrice), { exact: false })).not.toBeInTheDocument()
      }
    })
})
