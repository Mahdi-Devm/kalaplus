"use server";
import { revalidateTag } from "next/cache";

export async function revalidateChache(drId: string) {
  revalidateTag(`schedule-${drId}`, "max");
}
export async function revalidateServiceChache() {
  revalidateTag(`services`, "max");
}
export async function revalidateBookingChache(id: string) {
  revalidateTag(`booking-${id}`, "max");
}
