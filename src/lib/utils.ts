import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

export function compoundMonthly(principal: number, monthly: number, annualRate: number, years: number) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  let balance = principal;
  const points = [];
  for (let month = 1; month <= months; month += 1) {
    balance = balance * (1 + monthlyRate) + monthly;
    if (month % 12 === 0) points.push({ year: month / 12, value: Math.round(balance), invested: principal + monthly * month });
  }
  return { balance: Math.round(balance), points };
}
