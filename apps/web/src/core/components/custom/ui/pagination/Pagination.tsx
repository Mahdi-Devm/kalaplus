"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/ui/pagination/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export function Paginations({
  pagination,
}: {
  pagination?: {
    page: number;
    total: number;
  };
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = pagination?.page ?? 1;
  const total = pagination?.total ?? 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size="sm"
            href={page > 1 ? createPageURL(page - 1) : undefined}
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
            aria-label="صفحه قبلی"
          />
        </PaginationItem>

        <>
          <PaginationItem>
            <PaginationLink size="sm" href={createPageURL(total)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        </>

        <PaginationItem>
          <PaginationNext
            size="sm"
            href={page < total ? createPageURL(page + 1) : undefined}
            className={page >= total ? "pointer-events-none opacity-50" : ""}
            aria-label="صفحه بعدی"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
