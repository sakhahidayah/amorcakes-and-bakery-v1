export type AssetGroup = "hero" | "product-categories" | "gallery" | "visit-us";

export interface BakeryAsset {
  id: string;
  group: AssetGroup;
  src: string | null;
  alt: string;
  status: "missing" | "placeholder";
}

export const bakeryAssets: BakeryAsset[] = [
  {
    id: "hero-bakery-collage",
    group: "hero",
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1800&q=85",
    alt: "Placeholder stock photograph of golden croissants on a bakery table",
    status: "placeholder",
  },
  {
    id: "artisan-breads-category",
    group: "product-categories",
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=85",
    alt: "Placeholder stock photograph of rustic artisan bread loaves",
    status: "placeholder",
  },
  {
    id: "sweet-pastries-category",
    group: "product-categories",
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85&sat=-5",
    alt: "Placeholder stock photograph of flaky golden croissants",
    status: "placeholder",
  },
  {
    id: "custom-cakes-category",
    group: "product-categories",
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
    alt: "Placeholder stock photograph of a decorated cream cake",
    status: "placeholder",
  },
  {
    id: "gallery-product-selection",
    group: "gallery",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    alt: "Placeholder stock photograph of coffee and pastries on a warm table",
    status: "placeholder",
  },
  {
    id: "visit-us-storefront",
    group: "visit-us",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85&sat=-8",
    alt: "Placeholder stock photograph of a warm bakery-inspired cafe interior",
    status: "placeholder",
  },
];
