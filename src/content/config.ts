import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.string(),
        date: z.string(),
        desc: z.string(),
        order: z.number(),
        gallery: z.array(z.object({
            type: z.string(),
            src: z.string().url(),
            title: z.string()
        })).optional()
    })
})

const info = defineCollection({})

export const collections = { proyectos, info }