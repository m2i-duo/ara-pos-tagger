import {Locale, Model, ModelDetails} from "@/lib/types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1"
export const APP_LOCALES : Locale[] = ["ar", "fr", "en"]

export const LOGO = {
    src: {
        light: "/assets/images/logo/logo-full-light.png",
        dark: "/assets/images/logo/logo-full-dark.png",
    },
    alt: "ARAPT",
    width: 40,
    height: 40,
}

export const MODELS: Record<Model, ModelDetails> = {
   "HMM" : {
        name: "HMM Model",
        description: "Hidden Markov Model",
        version: "1.0.0",
    },
    "BiLSTM": {
        name: "BiLSTM Model",
        description: "Bidirectional Long Short-Term Memory",
        version: "1.0.0",
    },
    "BERT": {
        name: "BERT Model",
        description: "Bidirectional Encoder Representations from Transformers",
        version: "1.0.0",
    }
}