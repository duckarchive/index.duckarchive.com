import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "node_modules/@duckarchive/prisma/prisma/duckkey/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsup prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
