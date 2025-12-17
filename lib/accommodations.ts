export type AccommodationType = 'Hotel' | 'Resort' | 'Villa' | 'Condo' | 'Airbnb'

export type PriceRange = '₱₱' | '₱₱₱' | '₱₱₱₱'

export interface Accommodation {
  name: string
  type: AccommodationType
  area: string
  highlights: string
  approxDrive?: string
  priceRange?: PriceRange
  mapsUrl: string
  websiteUrl?: string
}

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export const tagaytayAccommodations: Accommodation[] = [
  {
    name: 'Taal Vista Hotel',
    type: 'Hotel',
    area: 'Tagaytay, Cavite',
    highlights: 'Classic Tagaytay hotel with iconic ridge views.',
    approxDrive: 'Approx. 10–25 min drive',
    priceRange: '₱₱₱',
    mapsUrl: mapsSearchUrl('Taal Vista Hotel Tagaytay'),
    websiteUrl: 'https://www.taalvistahotel.com/',
  },
  {
    name: 'Anya Resort Tagaytay',
    type: 'Resort',
    area: 'Tagaytay, Cavite',
    highlights: 'Boutique luxury resort with spa and serene gardens.',
    approxDrive: 'Approx. 15–30 min drive',
    priceRange: '₱₱₱₱',
    mapsUrl: mapsSearchUrl('Anya Resort Tagaytay'),
    websiteUrl: 'https://www.anyaresorts.com/',
  },
  {
    name: 'Escala Tagaytay',
    type: 'Resort',
    area: 'Tagaytay, Cavite',
    highlights: 'Modern resort with spacious rooms and a relaxing pool area.',
    approxDrive: 'Approx. 15–30 min drive',
    priceRange: '₱₱₱',
    mapsUrl: mapsSearchUrl('Escala Tagaytay'),
  },
  {
    name: 'The Lake Hotel Tagaytay',
    type: 'Hotel',
    area: 'Tagaytay, Cavite',
    highlights: 'Comfortable stay near the ridge with great views.',
    approxDrive: 'Approx. 15–30 min drive',
    priceRange: '₱₱₱',
    mapsUrl: mapsSearchUrl('The Lake Hotel Tagaytay'),
    websiteUrl: 'https://thelakehotel.com.ph/',
  },
  {
    name: 'Summit Ridge Tagaytay',
    type: 'Hotel',
    area: 'Tagaytay, Cavite',
    highlights: 'Convenient location near dining spots and viewpoint areas.',
    approxDrive: 'Approx. 15–35 min drive',
    priceRange: '₱₱₱',
    mapsUrl: mapsSearchUrl('Summit Ridge Tagaytay'),
  },
  {
    name: 'Hotel Kimberly Tagaytay',
    type: 'Hotel',
    area: 'Alfonso / Tagaytay area, Cavite',
    highlights: 'A cozy, family-friendly option with a relaxed atmosphere.',
    approxDrive: 'Approx. 20–40 min drive',
    priceRange: '₱₱',
    mapsUrl: mapsSearchUrl('Hotel Kimberly Tagaytay'),
  },
  {
    name: 'Wind Residences (Condo rentals)',
    type: 'Condo',
    area: 'Tagaytay, Cavite',
    highlights: 'Popular condo option—many units available via short-term rentals.',
    approxDrive: 'Approx. 10–30 min drive',
    priceRange: '₱₱',
    mapsUrl: mapsSearchUrl('Wind Residences Tagaytay'),
  },
  {
    name: 'Airbnb / Private Villas in Tagaytay',
    type: 'Airbnb',
    area: 'Tagaytay, Cavite',
    highlights: 'Great for groups—look for villas near the venue for an easy commute.',
    mapsUrl: mapsSearchUrl('Airbnb Tagaytay'),
  },
]
