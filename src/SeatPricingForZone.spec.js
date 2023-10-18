import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from '@jest/globals';
import "@testing-library/jest-dom";

import { SeatPricingForZone } from "./SeatPricingForZone";

const formatPrice = (number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(number);

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

describe('when customer is not premium member', () => {
  it.each`
    regularPrice | premiumMemberPrice
    ${200}       | ${150}
    ${250}       | ${200}
    ${500}       | ${400}
    ${800}       | ${600}
    ${1500}      | ${1200}
    ${1500}      | ${1200}
      `("Should only display regular price without showing premium price",
    ({ regularPrice, premiumMemberPrice }) => {
      const zoneInfo = { 
        zoneName: "ZONE_NAME", 
        regularPrice: regularPrice, 
        premiumMemberPrice: premiumMemberPrice 
      }
        render(<SeatPricingForZone
        zoneInfo={zoneInfo}
        isCustomerPremiumMember={false} />)

      expect(screen.getByText(formatPrice(regularPrice), { exact: false })).toBeInTheDocument()
      expect(screen.queryByText(formatPrice(premiumMemberPrice), { exact: false })).not.toBeInTheDocument()
    })
  })
  describe('when customer is premium member', () => {
    it.each`
      regularPrice   | premiumMemberPrice
      | ${200}       | ${150}
      | ${250}       | ${200}
      | ${500}       | ${400}
      | ${800}       | ${600}
        `("Should displays both premium price and regular price",
      ({ regularPrice, premiumMemberPrice }) => {
        const zoneInfo = { 
          zoneName: "ZONE_NAME", 
          regularPrice: regularPrice, 
          premiumMemberPrice: premiumMemberPrice 
        }
          render(<SeatPricingForZone
          zoneInfo={zoneInfo}
          isCustomerPremiumMember={true} />)

        expect(screen.getByText(formatPrice(regularPrice), { exact: false })).toBeInTheDocument()
        expect(screen.getByText(formatPrice(premiumMemberPrice), { exact: false })).toBeInTheDocument()
      })
    })
})
