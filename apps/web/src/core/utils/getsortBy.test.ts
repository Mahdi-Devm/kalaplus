import { describe, expect, it } from "vitest";
import { SortEnumBy } from "../assets/types/sortBy";
import { getSortBy } from "./getsortBy";

describe("getSortBy", () => {
  it("should return ascending label for ASC", () => {
    expect(getSortBy(SortEnumBy.ASC)).toBe("صعودی");
  });

  it("should return descending label for DESC", () => {
    expect(getSortBy(SortEnumBy.DESC)).toBe("نزولی");
  });

  it("should return unknown label for invalid value", () => {
    expect(getSortBy("random" as SortEnumBy)).toBe("نامشخص");
  });
});
