import {z} from 'zod'

export const sentenceSchema = z.object({
    sentence: z.string().min(1),
})

export const taggedWordSchema = z.object({
    word: z.string(),
    arabicTag: z.string(),
    englishTag: z.string(),
    frenchTag: z.string(),
    abbreviationTag: z.string(),
})

export type Sentence = z.infer<typeof sentenceSchema>