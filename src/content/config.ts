import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Essential for Markdown
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: image(), // This validates the relative path
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blogCollection,
};