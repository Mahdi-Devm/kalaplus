import { SortEnumBy } from "../assets/types/sortBy";

export function getSortBy(sortType: SortEnumBy): string {
  switch (sortType) {
    case SortEnumBy.ASC:
      return "صعودی"; // Ascending
    case SortEnumBy.DESC:
      return "نزولی"; // Descending
    default:
      return "نامشخص";
  }
}
