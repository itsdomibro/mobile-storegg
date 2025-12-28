import * as z from "zod";

export const productResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

export type ProductResponseDto = z.infer<typeof productResponseSchema>;
