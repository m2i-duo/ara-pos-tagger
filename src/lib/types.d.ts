import {ReactNode} from "react";
import {taggedWordSchema} from "@/lib/schema";
import {z} from "zod";

export type Theme = "light" | "dark";
export type Locale = "ar" | "fr" | "en";
export type Model = 'HMM' | 'BiLSTM' | 'BERT';
export type SaveFormat = 'xml' | 'json' | 'csv';
export type TaggedWord  = z.infer<typeof taggedWordSchema>;
export type DownloadItem = {
    icon: ReactNode;
    name: string;
    description: string;
    format: SaveFormat;
}
export type ModelDetails = {
    name: string;
    description: string;
    version: string;
}