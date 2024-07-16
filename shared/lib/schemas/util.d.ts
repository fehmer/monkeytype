import { z, ZodString } from "zod";
export declare const StringNumberSchema: z.ZodType<
  `${number}`,
  z.ZodTypeDef,
  `${number}`
>;
export type StringNumber = z.infer<typeof StringNumberSchema>;
export declare const token: () => ZodString;
//# sourceMappingURL=util.d.ts.map
