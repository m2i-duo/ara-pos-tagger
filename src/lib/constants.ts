import {Locale} from "@/lib/types";

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

export const MODELS = {
    "HMM-MODEL": {
        name: "HMM Model",
        description: "Hidden Markov Model",
        version: "1.0.0",
    },
    "BiLSTM-MODEL": {
        name: "BiLSTM Model",
        description: "Bidirectional Long Short-Term Memory",
        version: "1.0.0",
    },
    "BERT-MODEL": {
        name: "BERT Model",
        description: "Bidirectional Encoder Representations from Transformers",
        version: "1.0.0",
    },
    "ALKHALIL-MODEL": {
        name: "AlKhalil Model",
        description: "AlKhalil Model",
        version: "1.0.0",
    }
}