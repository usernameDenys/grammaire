import type { NextConfig } from "next";
import { LANGS, hasMap, mapPath, pairPath } from "./lib/i18n/config";

const nextConfig: NextConfig = {
  // Pairs without a map (for example uk → uk) are not published: send them to an existing map
  // in the same interface language. Built from AVAILABLE_PAIRS, so new maps need no change here.
  async redirects() {
    return LANGS.flatMap((native) =>
      LANGS.filter((target) => !hasMap(native, target)).map((target) => ({
        source: pairPath(native, target),
        destination: mapPath(native, target),
        permanent: false,
      })),
    );
  },
};

export default nextConfig;
