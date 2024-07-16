import { z } from "zod";
export declare const PersonalBestSchema: z.ZodObject<
  {
    acc: z.ZodNumber;
    consistency: z.ZodNumber;
    difficulty: z.ZodEnum<["normal", "expert", "master"]>;
    lazyMode: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodString;
    punctuation: z.ZodOptional<z.ZodBoolean>;
    numbers: z.ZodOptional<z.ZodBoolean>;
    raw: z.ZodNumber;
    wpm: z.ZodNumber;
    timestamp: z.ZodNumber;
  },
  "strip",
  z.ZodTypeAny,
  {
    wpm?: number;
    acc?: number;
    punctuation?: boolean;
    numbers?: boolean;
    language?: string;
    difficulty?: "normal" | "expert" | "master";
    lazyMode?: boolean;
    consistency?: number;
    raw?: number;
    timestamp?: number;
  },
  {
    wpm?: number;
    acc?: number;
    punctuation?: boolean;
    numbers?: boolean;
    language?: string;
    difficulty?: "normal" | "expert" | "master";
    lazyMode?: boolean;
    consistency?: number;
    raw?: number;
    timestamp?: number;
  }
>;
export type PersonalBest = z.infer<typeof PersonalBestSchema>;
export declare const PersonalBestsSchema: z.ZodObject<
  {
    time: z.ZodRecord<
      z.ZodType<`${number}`, z.ZodTypeDef, `${number}`>,
      z.ZodArray<
        z.ZodObject<
          {
            acc: z.ZodNumber;
            consistency: z.ZodNumber;
            difficulty: z.ZodEnum<["normal", "expert", "master"]>;
            lazyMode: z.ZodOptional<z.ZodBoolean>;
            language: z.ZodString;
            punctuation: z.ZodOptional<z.ZodBoolean>;
            numbers: z.ZodOptional<z.ZodBoolean>;
            raw: z.ZodNumber;
            wpm: z.ZodNumber;
            timestamp: z.ZodNumber;
          },
          "strip",
          z.ZodTypeAny,
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          },
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          }
        >,
        "many"
      >
    >;
    words: z.ZodRecord<
      z.ZodType<`${number}`, z.ZodTypeDef, `${number}`>,
      z.ZodArray<
        z.ZodObject<
          {
            acc: z.ZodNumber;
            consistency: z.ZodNumber;
            difficulty: z.ZodEnum<["normal", "expert", "master"]>;
            lazyMode: z.ZodOptional<z.ZodBoolean>;
            language: z.ZodString;
            punctuation: z.ZodOptional<z.ZodBoolean>;
            numbers: z.ZodOptional<z.ZodBoolean>;
            raw: z.ZodNumber;
            wpm: z.ZodNumber;
            timestamp: z.ZodNumber;
          },
          "strip",
          z.ZodTypeAny,
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          },
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          }
        >,
        "many"
      >
    >;
    quote: z.ZodRecord<
      z.ZodType<`${number}`, z.ZodTypeDef, `${number}`>,
      z.ZodArray<
        z.ZodObject<
          {
            acc: z.ZodNumber;
            consistency: z.ZodNumber;
            difficulty: z.ZodEnum<["normal", "expert", "master"]>;
            lazyMode: z.ZodOptional<z.ZodBoolean>;
            language: z.ZodString;
            punctuation: z.ZodOptional<z.ZodBoolean>;
            numbers: z.ZodOptional<z.ZodBoolean>;
            raw: z.ZodNumber;
            wpm: z.ZodNumber;
            timestamp: z.ZodNumber;
          },
          "strip",
          z.ZodTypeAny,
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          },
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          }
        >,
        "many"
      >
    >;
    custom: z.ZodRecord<
      z.ZodLiteral<"custom">,
      z.ZodArray<
        z.ZodObject<
          {
            acc: z.ZodNumber;
            consistency: z.ZodNumber;
            difficulty: z.ZodEnum<["normal", "expert", "master"]>;
            lazyMode: z.ZodOptional<z.ZodBoolean>;
            language: z.ZodString;
            punctuation: z.ZodOptional<z.ZodBoolean>;
            numbers: z.ZodOptional<z.ZodBoolean>;
            raw: z.ZodNumber;
            wpm: z.ZodNumber;
            timestamp: z.ZodNumber;
          },
          "strip",
          z.ZodTypeAny,
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          },
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          }
        >,
        "many"
      >
    >;
    zen: z.ZodRecord<
      z.ZodLiteral<"zen">,
      z.ZodArray<
        z.ZodObject<
          {
            acc: z.ZodNumber;
            consistency: z.ZodNumber;
            difficulty: z.ZodEnum<["normal", "expert", "master"]>;
            lazyMode: z.ZodOptional<z.ZodBoolean>;
            language: z.ZodString;
            punctuation: z.ZodOptional<z.ZodBoolean>;
            numbers: z.ZodOptional<z.ZodBoolean>;
            raw: z.ZodNumber;
            wpm: z.ZodNumber;
            timestamp: z.ZodNumber;
          },
          "strip",
          z.ZodTypeAny,
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          },
          {
            wpm?: number;
            acc?: number;
            punctuation?: boolean;
            numbers?: boolean;
            language?: string;
            difficulty?: "normal" | "expert" | "master";
            lazyMode?: boolean;
            consistency?: number;
            raw?: number;
            timestamp?: number;
          }
        >,
        "many"
      >
    >;
  },
  "strip",
  z.ZodTypeAny,
  {
    custom?: Partial<
      Record<
        "custom",
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    time?: Partial<
      Record<
        `${number}`,
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    words?: Partial<
      Record<
        `${number}`,
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    quote?: Partial<
      Record<
        `${number}`,
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    zen?: Partial<
      Record<
        "zen",
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
  },
  {
    custom?: Partial<
      Record<
        "custom",
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    time?: Partial<
      Record<
        `${number}`,
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    words?: Partial<
      Record<
        `${number}`,
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    quote?: Partial<
      Record<
        `${number}`,
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
    zen?: Partial<
      Record<
        "zen",
        {
          wpm?: number;
          acc?: number;
          punctuation?: boolean;
          numbers?: boolean;
          language?: string;
          difficulty?: "normal" | "expert" | "master";
          lazyMode?: boolean;
          consistency?: number;
          raw?: number;
          timestamp?: number;
        }[]
      >
    >;
  }
>;
export type PersonalBests = z.infer<typeof PersonalBestsSchema>;
//# sourceMappingURL=users.d.ts.map
