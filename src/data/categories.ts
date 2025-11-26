/**
 * Central category definitions for the wishlist
 * Add new categories here - they'll be available for autocomplete everywhere
 */

export const CATEGORIES = {
  CYCLING: "CYCLING",
  CREATIVE_TOOLS: "CREATIVE_TOOLS", 
  NEW_PLACE: "NEW_PLACE",
  EXPERIENCES: "EXPERIENCES",
  DAILY_LIFE: "DAILY_LIFE",
} as const;

// Type for category values
export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

// Array version if you need to iterate/render a dropdown
export const CATEGORY_LIST = Object.values(CATEGORIES);

// Display names (optional - for nicer UI labels)
export const CATEGORY_LABELS: Record<Category, string> = {
  CYCLING: "Cycling",
  CREATIVE_TOOLS: "Creative Tools",
  NEW_PLACE: "Domicile",
  EXPERIENCES: "Experience", 
  DAILY_LIFE: "Daily Life",
};

