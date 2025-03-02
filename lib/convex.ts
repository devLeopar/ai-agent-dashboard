import { ConvexHttpClient } from "convex/browser";

// Doğru singleton implementasyonu ✅
let instance: ConvexHttpClient | null = null;

export const getConvexClient = () => {
  if (!instance) {
    instance = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  }
  return instance;
};
