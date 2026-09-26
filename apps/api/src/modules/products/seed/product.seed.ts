import type { Product } from 'src/modules/products/entities/product.entity';
import type { Category } from '../entities/category.entity';

export const createProductSeed = (
  categories: Category[],
): Partial<Product>[] => {
  const getCategory = (slug: string) => {
    const category = categories.find((item) => item.slug === slug);

    if (!category) {
      throw new Error(`Category "${slug}" not found`);
    }

    return category;
  };

  return [
    {
      title: 'قمقه آب نیم لیتری ترموس',
      shortDescription: 'قمقه ورزشی نیم لیتری مناسب باشگاه و استفاده روزانه',
      description:
        'قمقه آب نیم لیتری ترموس با طراحی سبک و کاربردی، مناسب ورزش و استفاده روزمره.',
      price: 485000,
      slug: 'ghom23',
      mainImage: '/uploads/products/product-1788944796775-385991869.png',
      images: ['/uploads/products/product-1788944796775-385991869.png'],
      discountPercent: 10,
      discountPrice: 436500,
      stock: 35,
      sold: 18,
      colors: ['مشکی', 'سفید', 'آبی'],
      sizes: ['500ml'],
      materials: ['استیل'],
      category: getCategory('gear'),
    },

    {
      title: 'راکت چینی پینگ پنگ',
      shortDescription: 'راکت پینگ پنگ مناسب تمرین و بازی',
      description:
        'راکت چینی پینگ پنگ با طراحی سبک و خوش‌دست مناسب تمرین و بازی تفریحی.',
      price: 720000,
      slug: 'rockert-chine',
      mainImage: '/uploads/products/product-1788944683154-122914917.png',
      images: ['/uploads/products/product-1788944683154-122914917.png'],
      discountPercent: 15,
      discountPrice: 612000,
      stock: 20,
      sold: 27,
      colors: ['قرمز', 'مشکی'],
      sizes: ['استاندارد'],
      materials: ['چوب', 'لاستیک'],
      category: getCategory('sports-equipment'),
    },

    {
      title: 'شلوار یوگا',
      shortDescription: 'شلوار ورزشی کشی مناسب یوگا و تمرین',
      description:
        'شلوار یوگا با پارچه نرم و کشسان مناسب یوگا، پیلاتس و تمرین.',
      price: 890000,
      slug: 'yoga-shal',
      mainImage: '/uploads/products/product-1788944706754-545179930.png',
      images: ['/uploads/products/product-1788944706754-545179930.png'],
      discountPercent: 20,
      discountPrice: 712000,
      stock: 42,
      sold: 31,
      colors: ['مشکی', 'طوسی', 'سرمه‌ای'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['پلی‌استر', 'اسپندکس'],
      category: getCategory('sports-pants'),
    },

    {
      title: 'حوله مخصوص یوگا',
      shortDescription: 'حوله سبک و جاذب رطوبت برای تمرین',
      description: 'حوله مخصوص یوگا، سبک و مناسب استفاده در باشگاه و تمرین.',
      price: 390000,
      slug: 'yoga-2026',
      mainImage: '/uploads/products/product-1788944796775-385991869.png',
      images: ['/uploads/products/product-1788944796775-385991869.png'],
      discountPercent: 5,
      discountPrice: 370500,
      stock: 55,
      sold: 14,
      colors: ['سفید', 'آبی', 'صورتی'],
      sizes: ['70x140'],
      materials: ['پنبه'],
      category: getCategory('gear'),
    },

    {
      title: 'لباس بارسلونا 2025',
      shortDescription: 'لباس ورزشی بارسلونا مناسب فوتبال و تمرین',
      description:
        'لباس ورزشی بارسلونا با طراحی مناسب فوتبال، تمرین و استفاده روزمره.',
      price: 1650000,
      slug: 'bar-2026',
      mainImage: '/uploads/products/product-1788944909730-403972339.png',
      images: ['/uploads/products/product-1788944909730-403972339.png'],
      discountPercent: 12,
      discountPrice: 1452000,
      stock: 24,
      sold: 36,
      colors: ['آبی', 'قرمز'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      materials: ['پلی‌استر'],
      category: getCategory('sports-kit'),
    },

    {
      title: 'کوله پشتی ورزشی',
      shortDescription: 'کوله پشتی جادار مناسب باشگاه',
      description:
        'کوله پشتی ورزشی مناسب باشگاه، سفر و حمل لباس و لوازم ورزشی.',
      price: 1250000,
      slug: 'sports-backpack',
      mainImage: '/uploads/products/product-1788944351734-240755757.png',
      images: ['/uploads/products/product-1788944351734-240755757.png'],
      discountPercent: 8,
      discountPrice: 1150000,
      stock: 18,
      sold: 22,
      colors: ['مشکی', 'طوسی'],
      sizes: ['30L'],
      materials: ['پلی‌استر'],
      category: getCategory('sports-bag'),
    },

    {
      title: 'کیت رئال مادرید 2024',
      shortDescription: 'کیت ورزشی رئال مادرید مناسب فوتبال',
      description:
        'کیت ورزشی رئال مادرید مناسب فوتبال، تمرین و استفاده روزمره.',
      price: 1580000,
      slug: 'kit-2026-li',
      mainImage: '/uploads/products/product-1788944738778-572093490.png',
      images: ['/uploads/products/product-1788944738778-572093490.png'],
      discountPercent: 10,
      discountPrice: 1422000,
      stock: 30,
      sold: 41,
      colors: ['سفید'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['پلی‌استر'],
      category: getCategory('sports-wear'),
    },
  ];
};
