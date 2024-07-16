import { z, ZodSchema } from "zod";
export type OperationTag = "configs";
export type EndpointMetadata = {
  /** Authentication options, by default a bearer token is required. */
  authenticationOptions?: RequestAuthenticationOptions;
  openApiTags?: OperationTag | OperationTag[];
};
export type RequestAuthenticationOptions = {
  /** Endpoint is accessible without any authentication. If `false` bearer authentication is required. */
  isPublic?: boolean;
  /** Endpoint is accessible with ape key authentication in  _addition_ to the bearer authentication. */
  acceptApeKeys?: boolean;
  /** Endpoint requires an authentication token which is younger than one minute.  */
  requireFreshToken?: boolean;
  noCache?: boolean;
};
export declare const MonkeyResponseSchema: z.ZodObject<
  {
    message: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    message?: string;
  },
  {
    message?: string;
  }
>;
export type MonkeyResponseType = z.infer<typeof MonkeyResponseSchema>;
export declare const MonkeyValidationErrorSchema: z.ZodObject<
  z.objectUtil.extendShape<
    {
      message: z.ZodString;
    },
    {
      validationErrors: z.ZodArray<z.ZodString, "atleastone">;
    }
  >,
  "strip",
  z.ZodTypeAny,
  {
    message?: string;
    validationErrors?: [string, ...string[]];
  },
  {
    message?: string;
    validationErrors?: [string, ...string[]];
  }
>;
export type MonkeyValidationError = z.infer<typeof MonkeyValidationErrorSchema>;
export declare const MonkeyClientError: z.ZodObject<
  {
    message: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    message?: string;
  },
  {
    message?: string;
  }
>;
export declare const MonkeyServerError: z.ZodObject<
  z.objectUtil.extendShape<
    {
      message: z.ZodString;
    },
    {
      errorId: z.ZodString;
      uid: z.ZodOptional<z.ZodString>;
    }
  >,
  "strip",
  z.ZodTypeAny,
  {
    message?: string;
    errorId?: string;
    uid?: string;
  },
  {
    message?: string;
    errorId?: string;
    uid?: string;
  }
>;
export type MonkeyServerErrorType = z.infer<typeof MonkeyServerError>;
export declare function responseWithNullableData<T extends ZodSchema>(
  dataSchema: T
): z.ZodObject<
  z.objectUtil.extendShape<
    typeof MonkeyResponseSchema.shape,
    {
      data: z.ZodNullable<T>;
    }
  >
>;
export declare function responseWithData<T extends ZodSchema>(
  dataSchema: T
): z.ZodObject<
  z.objectUtil.extendShape<
    typeof MonkeyResponseSchema.shape,
    {
      data: T;
    }
  >
>;
//# sourceMappingURL=api.d.ts.map
