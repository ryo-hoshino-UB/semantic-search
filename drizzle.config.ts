import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  out: "./dirzzle",
} satisfies Config;

type Options = "numberFormat" | "stringFormat";
type ValueType = string | number;
const normalHash = {
  numberFormat: 12345,
  stringFormat: "string",
} satisfies Record<Options, ValueType>;
// tscをしたときにエラーが出る
console.log(normalHash["numberFormat"] + 1);
// tscをしたときにエラーが出る
console.log(normalHash["stringFormat"].charAt(2));
