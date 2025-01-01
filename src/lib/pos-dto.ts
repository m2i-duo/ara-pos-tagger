import { z } from 'zod';

export const posRequestDtoSchema = z.object({
    text: z.string().min(1),
})

export type PosRequestDto = z.infer<typeof posRequestDtoSchema>

export const posResponseDtoSchema = z.object({
    word: z.string(),
    tag: z.string(),
    arabic_tag: z.string(),
    english_tag: z.string(),
    french_tag: z.string(),
})

export type PosResponseDto = z.infer<typeof posResponseDtoSchema>