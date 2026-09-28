import { Home } from "lucide-react";
import { FiBookOpen, FiGrid, FiShoppingBag } from "react-icons/fi";
export const navItemsHeader = [
  {
    title: "خانه",
    href: "/",
    icon: Home,
  },

  {
    title: "مقالات",
    href: "/blog",
    icon: FiBookOpen,
  },
  {
    title: "فروشگاه",
    href: "/shop",
    icon: FiShoppingBag,
  },
  {
    title: "صفحات",
    href: "#",
    icon: FiGrid,
    hasArrow: true,
  },
];
