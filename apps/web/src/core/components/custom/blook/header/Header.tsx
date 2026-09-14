"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiBookOpen,
  FiChevronDown,
  FiGrid,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet/sheet";

import Logo from "@/core/components/custom/ui/logo/Logo";
import { Button } from "@/core/components/shadcn/ui/button/button";
import AuthComponents from "@/core/features/auth/components/block/AuthComponents";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    {
      title: "پرفروش‌ترین‌ها",
      href: "/best-selling",
      icon: FiTrendingUp,
    },
    {
      title: "مقالات",
      href: "/blogs",
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-[76px] items-center justify-between gap-6">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-lg">
                  <FiMenu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle className="text-right">منوی کالا پلاس</SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col">
                  {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center justify-between border-b py-4 text-sm font-medium"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="size-[18px] text-muted-foreground" />
                          <span>{item.title}</span>
                        </div>

                        {item.hasArrow && (
                          <FiChevronDown className="size-4 text-muted-foreground" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6 flex flex-col">
                  <Link
                    href="/favorites"
                    className="flex items-center gap-3 py-4 text-sm font-medium"
                  >
                    <FiHeart className="size-[18px]" />
                    علاقه‌مندی‌ها
                  </Link>

                  <Link
                    href="/cart"
                    className="flex items-center justify-between py-4 text-sm font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <FiShoppingBag className="size-[18px]" />
                      سبد خرید
                    </div>

                    <span className="text-xs text-muted-foreground">
                      2 محصول
                    </span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
          >
            <Logo width={95} classname="h-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-2 px-4 py-2 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-[17px]" />

                  <span>{item.title}</span>

                  {item.hasArrow && (
                    <FiChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              {searchOpen ? (
                <FiX className="size-[19px]" />
              ) : (
                <FiSearch className="size-[19px]" />
              )}
            </Button>

            {/* Favorites */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden rounded-lg sm:inline-flex"
              asChild
            >
              <Link href="/favorites">
                <FiHeart className="size-[19px]" />
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-lg"
              asChild
            >
              <Link href="/cart">
                <FiShoppingBag className="size-[19px]" />

                <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  2
                </span>
              </Link>
            </Button>

            {/* Auth */}
            <div className="hidden sm:block">
              <AuthComponents />
            </div>
          </div>
        </div>

        {/* Search */}
        {searchOpen && (
          <div className="border-t py-4">
            <div className="relative">
              <FiSearch className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

              <input
                autoFocus
                type="search"
                placeholder="جستجوی محصول..."
                className="h-12 w-full rounded-xl bg-muted/50 px-12 text-sm outline-none transition focus:bg-background focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
