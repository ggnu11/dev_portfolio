export function parsePrismaJSON<T>(json: unknown): T {
  return JSON.parse(JSON.stringify(json)) as T;
}
