import {API_URL} from "@/lib/constants";
import {Model} from "@/lib/types";

const BASE_URL = API_URL + "/pos-tag";
export interface PosTaggerAPIEndpoints {
    models: (model: Model) => {
        analyze: string
    }
}

export const POS_TAGGER_API_ENDPOINTS: PosTaggerAPIEndpoints = {
    models: (model) => {
        let modelName = "hmm"
        switch (model) {
            case "BiLSTM":
                modelName = "keras"
                break
            case "HMM":
                modelName = "hmm"
                break
            case "BERT":
                modelName = "bert"
                break
            default:
                modelName = "hmm"
                break
        }
        return {
            analyze: `${BASE_URL}/${modelName}`
        }
    },
}