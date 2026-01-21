import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        shortDescription: z.string(),
        image: z.union([image(), z.string()]),
        images: z.array(z.union([image(), z.string()])).optional(),
        icon: z.string().optional(),
        technologies: z.array(z.string()),
        github: z.string().optional(),
        demo: z.string().optional(),
        status: z.string(),
        working: z.boolean().default(false),
        order: z.number().default(0),
    }),
});

const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
    schema: z.object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        location: z.string(),
        description: z.string(),
        achievements: z.array(z.string()),
        technologies: z.array(z.string()),
        order: z.number().default(0),
    }),
});

const about = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { projects, experience, about };
