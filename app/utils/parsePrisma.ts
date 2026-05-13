import type { Prisma } from "@prisma/client";

export function parsePrismaJSON<T>(json: Prisma.JsonValue): T {
  return JSON.parse(JSON.stringify(json)) as T;
}
