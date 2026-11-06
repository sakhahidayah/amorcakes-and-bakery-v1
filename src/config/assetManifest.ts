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
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=85",
    alt: "Placeholder stock photograph of a rustic artisan loaf on a bakery table",
    status: "placeholder",
  },
  {
    id: "artisan-breads-category",
    group: "product-categories",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
    alt: "Placeholder stock photograph of a rustic artisan loaf",
    status: "placeholder",
  },
  {
    id: "sweet-pastries-category",
    group: "product-categories",
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
    alt: "Placeholder stock photograph of golden sweet pastries",
    status: "placeholder",
  },
  {
    id: "custom-cakes-category",
    group: "product-categories",
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    alt: "Placeholder stock photograph of a decorated celebration cake",
    status: "placeholder",
  },
  {
    id: "gallery-product-selection",
    group: "gallery",
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=85",
    alt: "Placeholder stock photograph of rustic artisan bread and pastries",
    status: "placeholder",
  },
  {
    id: "visit-us-storefront",
    group: "visit-us",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    alt: "Placeholder stock photograph of a warm bakery-inspired interior",
    status: "placeholder",
  },
];
