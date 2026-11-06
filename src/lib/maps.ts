const GOOGLE_MAPS_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=";

export function buildGoogleMapsSearchLink(address: string): string {
  return `${GOOGLE_MAPS_SEARCH_URL}${encodeURIComponent(address)}`;
}
