/**
 * Facetious cost tiers
 * Edit items with real USD prices, displayed as whimsical strings
 */

export const COST_TIERS = [
  "Free",
  "A pittance",
  "A trifle",
  "A modest sum",
  "A tidy sum",
  "A small fortune",
  "A fortune",
  "An unfathomable cost"
] as const;

export const MAX_COST_INDEX = COST_TIERS.length - 1;

export type CostTier = typeof COST_TIERS[number];
export type CostIndex = number;

/**
 * USD thresholds for each tier
 * Adjust these to taste!
 */
const COST_THRESHOLDS: [number, CostTier][] = [
  [0, "Free"],
  [20, "A pittance"],
  [40, "A trifle"],
  [100, "A modest sum"],
  [200, "A tidy sum"],
  [1000, "A small fortune"],
  [2000, "A fortune"],
  [Infinity, "An unfathomable cost"]
];

/**
 * Convert a USD price to its facetious tier index
 */
export function getCostIndex(usd: number): CostIndex {
  for (let i = 0; i < COST_THRESHOLDS.length - 1; i++) {
    if (usd <= COST_THRESHOLDS[i][0]) {
      return i;
    }
  }
  return MAX_COST_INDEX;
}

/**
 * Convert a USD price to its facetious string
 */
export function getCostLabel(usd: number): CostTier {
  return COST_TIERS[getCostIndex(usd)];
}

/**
 * Generate the filter description based on tier indices
 */
export function getCostRangeLabel(minIndex: number, maxIndex: number): string {
  // All selected
  if (minIndex === 0 && maxIndex === MAX_COST_INDEX) {
    return "Cost is no object";
  }
  
  // Single tier selected
  if (minIndex === maxIndex) {
    return `Only ${COST_TIERS[minIndex].toLowerCase()}`;
  }
  
  // From zero
  if (minIndex === 0) {
    return `Up to ${COST_TIERS[maxIndex].toLowerCase()}`;
  }
  
  // To max
  if (maxIndex === MAX_COST_INDEX) {
    return `At least ${COST_TIERS[minIndex].toLowerCase()}`;
  }
  
  // Range in the middle
  return `Between ${COST_TIERS[minIndex].toLowerCase()} and ${COST_TIERS[maxIndex].toLowerCase()}`;
}

/**
 * Check if a USD price falls within a tier range
 */
export function isInCostRange(usd: number, minIndex: number, maxIndex: number): boolean {
  const itemIndex = getCostIndex(usd);
  return itemIndex >= minIndex && itemIndex <= maxIndex;
}
