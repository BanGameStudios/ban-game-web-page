import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.string(),
        date: z.string(),
        order: z.number(),
        gallery: z.boolean().optional(),
    })
})

export const collections = { proyectos }