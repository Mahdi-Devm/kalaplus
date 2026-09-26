// Mock data for the shop page.
// Replace with real data from the GraphQL mesh endpoint (http://127.0.0.1:4000/graphql)
// once the backend is wired up.

export interface Product {
  id: string;
  title: string;
  image: string | null; // null => renders a placeholder block, same as the muted image box in the design
  price: number;
  originalPrice?: number;
  score: number; // 0-100, drives the small progress bar on the card
  colorId?: string; // matches ColorOption.id
  brandId?: string; // matches BrandOption.id
}

export interface ColorOption {
  id: string;
  label: string;
  hex: string;
}

export interface BrandOption {
  id: string;
  label: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  { value: "default", label: "مرتب سازی پیش‌فرض" },
  { value: "best-selling", label: "پر فروش ترین" },
  { value: "popularity", label: "محبوبیت" },
  { value: "top-rated", label: "میانگین امتیاز" },
  { value: "newest", label: "جدیدترین" },
  { value: "cheapest", label: "ارزان‌ترین" },
  { value: "expensive", label: "گران‌ترین" },
];

export const COLOR_OPTIONS: ColorOption[] = [
  { id: "blue", label: "آبی", hex: "#2563eb" },
  { id: "purple-dark", label: "بنفش تیره", hex: "#6d28d9" },
  { id: "purple-light", label: "بنفش روشن", hex: "#a78bfa" },
  { id: "maroon", label: "جیگری", hex: "#7f1d1d" },
  { id: "yellow", label: "زرد", hex: "#eab308" },
  { id: "green", label: "سبز", hex: "#16a34a" },
  { id: "black", label: "سیاه", hex: "#111827" },
  { id: "orange", label: "نارنجی", hex: "#f97316" },
  { id: "jade", label: "یشمی", hex: "#14b8a6" },
];

export const BRAND_OPTIONS: BrandOption[] = [
  { id: "puma", label: "پوما" },
  { id: "asics", label: "ایسیکس" },
  { id: "adidas", label: "آدیداس" },
  { id: "nike", label: "نایک" },
  { id: "reebok", label: "ریباک" },
];

export const PRICE_BOUNDS = { min: 0, max: 8_000_000, step: 10_000 };

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "توپ پیلاتس کلو Kelo",
    image: null,
    price: 320_000,
    score: 100,
    colorId: "blue",
  },
  {
    id: "2",
    title: "پیراهن ورزشی مدل راکوتن",
    image: null,
    price: 1_100_000,
    originalPrice: 1_200_000,
    score: 100,
    colorId: "maroon",
    brandId: "nike",
  },
  {
    id: "3",
    title: "اسکریپت ایمیل مارکتینگ میلر",
    image: null,
    price: 1_340_000,
    originalPrice: 1_500_000,
    score: 100,
    colorId: "orange",
  },
  {
    id: "4",
    title: "اسکریپت ایمیل مارکتینگ میلر پرو",
    image: null,
    price: 1_500_000,
    score: 100,
    colorId: "orange",
  },
  {
    id: "5",
    title: "شلوار یوگا",
    image: null,
    price: 899_000,
    originalPrice: 1_000_000,
    score: 88,
    colorId: "purple-dark",
  },
  {
    id: "6",
    title: "زیرانداز یوگا مدل TRO478",
    image: null,
    price: 82_000,
    originalPrice: 114_000,
    score: 24,
    colorId: "purple-light",
  },
  {
    id: "7",
    title: "راکت چینی پینگ پنگ",
    image: null,
    price: 499_000,
    originalPrice: 690_000,
    score: 22,
    colorId: "black",
  },
  {
    id: "8",
    title: "حوله مخصوص یوگا",
    image: null,
    price: 420_000,
    originalPrice: 540_000,
    score: 100,
    colorId: "jade",
  },
  {
    id: "9",
    title: "کفش دویدن ایرمکس",
    image: null,
    price: 2_150_000,
    originalPrice: 2_450_000,
    score: 76,
    colorId: "blue",
    brandId: "adidas",
  },
  {
    id: "10",
    title: "دستکش بوکس حرفه‌ای",
    image: null,
    price: 610_000,
    score: 60,
    colorId: "black",
    brandId: "reebok",
  },
  {
    id: "11",
    title: "کوله پشتی ورزشی",
    image: null,
    price: 780_000,
    originalPrice: 890_000,
    score: 94,
    colorId: "green",
    brandId: "puma",
  },
  {
    id: "12",
    title: "کش تمرینی مقاومتی",
    image: null,
    price: 145_000,
    score: 100,
    colorId: "yellow",
    brandId: "asics",
  },
];
