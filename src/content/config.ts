import { defineCollection, z } from "astro:content";

const essayCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    categories: z.array(z.string()).default([]),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

const bookCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    categories: z.array(z.string()).default([]),
  }),
});

const noteCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    categories: z.array(z.string()).default([]),
  }),
});

export const collections = {
  essays: essayCollection,
  books: bookCollection,
  notes: noteCollection,
};
