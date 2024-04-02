const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "";

export const CALCOM_ENV = process.env.CALCOM_ENV || process.env.NODE_ENV;
export const IS_PRODUCTION = CALCOM_ENV === "production";
export const IS_PRODUCTION_BUILD = process.env.NODE_ENV === "production";
const IS_DEV = CALCOM_ENV === "development";

export const WEBAPP_URL =
  process.env.NEXT_PUBLIC_WEBAPP_URL ||
  VERCEL_URL ||
  "http://localhost:3000/dashboard";
