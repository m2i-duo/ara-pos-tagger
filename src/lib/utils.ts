import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {TaggedWord} from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createJsonFile(taggedOutput: TaggedWord[]): Blob {
  const json = JSON.stringify(taggedOutput, null, 2)
  return new Blob([json], { type: 'application/json' })
}

export function createCsvFile(taggedOutput: TaggedWord[]): Blob {
  const csv = taggedOutput.map((word) => `${word.word},${word.arabicTag},${word.englishTag},${word.frenchTag},${word.abbreviationTag}`).join('\n')
  return new Blob([csv], { type: 'text/csv' })
}

export function createXmlFile(taggedOutput: TaggedWord[]): Blob {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<words>
${taggedOutput.map((word) => `<word>
    <word>${word.word}</word>
    <arabicTag>${word.arabicTag}</arabicTag>
    <englishTag>${word.englishTag}</englishTag>
    <frenchTag>${word.frenchTag}</frenchTag>
    <abbreviationTag>${word.abbreviationTag}</abbreviationTag>
</word>`).join('\n')}
</words>`
  return new Blob([xml], { type: 'application/xml' })
}

export function downloadFile(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}
