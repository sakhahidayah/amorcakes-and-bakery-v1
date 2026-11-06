export interface BakeryProductCategory {
  id: string;
  name: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
  price: null;
  isPlaceholder: true;
}

export const bakeryProductCategories: BakeryProductCategory[] = [
  {
    id: "artisan-breads",
    name: "Artisan Breads",
    description:
      "Dummy category copy for handcrafted loaves and daily-baked bread selections.",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Placeholder stock photograph of a rustic artisan loaf",
    price: null,
    isPlaceholder: true,
  },
  {
    id: "sweet-pastries",
    name: "Sweet Pastries",
    description:
      "Dummy category copy for buttery pastries, morning treats, and seasonal bakes.",
    imageSrc:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Placeholder stock photograph of golden sweet pastries",
    price: null,
    isPlaceholder: true,
  },
  {
    id: "custom-cakes",
    name: "Custom Cakes",
    description:
      "Dummy category copy for celebration cakes made to suit each special occasion.",
    imageSrc:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Placeholder stock photograph of a decorated celebration cake",
    price: null,
    isPlaceholder: true,
  },
];

export interface BakeryGalleryItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
  aspectRatio: "portrait" | "landscape" | "square";
  isPlaceholder: true;
}

export const bakeryGalleryItems: BakeryGalleryItem[] = [
  {
    id: "gallery-bread-texture",
    title: "Bread, slowly made",
    description: "Warm, rustic bread with a crisp crust and a tender crumb.",
    imageSrc:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Rustic artisan bread loaves cooling on a bakery surface",
    aspectRatio: "portrait",
    isPlaceholder: true,
  },
  {
    id: "gallery-pastry-detail",
    title: "Golden pastry layers",
    description: "Flaky, golden layers made for slow mornings and sweet pauses.",
    imageSrc:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Golden flaky pastries arranged on a bakery tray",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
  {
    id: "gallery-celebration-cake",
    title: "A cake for the occasion",
    description: "A soft, celebratory centerpiece for moments worth remembering.",
    imageSrc:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Decorated celebration cake on a warm bakery table",
    aspectRatio: "square",
    isPlaceholder: true,
  },
  {
    id: "gallery-bakery-table",
    title: "Made for sharing",
    description: "A generous table scene filled with the textures of a bakery day.",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Fresh artisan loaf presented on a warm bakery table",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
];

export interface VisitUsImage {
  id: string;
  title: string;
  imageSrc: string | null;
  imageAlt: string;
  aspectRatio: "portrait" | "landscape" | "square";
  isPlaceholder: true;
}

export const visitUsImages: VisitUsImage[] = [
  {
    id: "visit-us-front-counter",
    title: "Bakery counter image",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Warm bakery-inspired counter and café interior",
    aspectRatio: "portrait",
    isPlaceholder: true,
  },
  {
    id: "visit-us-fresh-bakes",
    title: "Fresh bakes image",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Fresh rustic bread prepared for a bakery display",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
  {
    id: "visit-us-warm-table",
    title: "Warm table image",
    imageSrc:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Warmly lit table setting with bakery-inspired food styling",
    aspectRatio: "square",
    isPlaceholder: true,
  },
  {
    id: "visit-us-bakery-detail",
    title: "Bakery detail image",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Close detail of a handcrafted artisan loaf",
    aspectRatio: "landscape",
    isPlaceholder: true,
  },
];
