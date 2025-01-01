import {ReactNode} from "react";

export type Theme = "light" | "dark";
export type Locale = "ar" | "fr" | "en";
export type Model = 'HMM' | 'BiLSTM' | 'BERT';
export type SaveFormat = 'xml' | 'json' | 'csv';
export type TaggedWord = {
    word: string;
    arabicTag: string;
    englishTag: string;
    frenchTag: string;
    abbreviationTag: string;
};
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