"use client"
import {Button} from "@/components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {MODELS} from "@/lib/constants";
import {Model, ModelDetails} from "@/lib/types";
import {usePosTagger} from "@/context/pos-tagger-context";
import {useTranslations} from "next-intl";
import {POS_TAGGER_API_ENDPOINTS} from "@/config/endpoints/arapt-api-endpoints";
import {PosDtoMapper} from "@/lib/pos-mapper";
import {Sentence} from "@/lib/schema";
import {PosResponseDto} from "@/lib/pos-dto";

function SettingsZone() {
    const {model, setModel, sentence, loading, setLoading, setTaggedOutput} = usePosTagger()
    const t = useTranslations("main.main-box.settings-zone");

    const handleClick = async() => {
        setLoading(true)
        await handleAnalyze()
        setLoading(false)
    }
    const handleAnalyze = async() => {
        const posDtoMapper = new PosDtoMapper();
        const reqSentence: Sentence = {
            sentence: sentence
        };
        const posRequest = posDtoMapper.mapRequestDto(reqSentence);


        const res = await fetch(POS_TAGGER_API_ENDPOINTS.models(model).analyze, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posRequest)
        })
        const data = await res.json() as PosResponseDto[]
        const taggedWords = data
            .map((response) => posDtoMapper.mapResponseDto(response))
            .filter((taggedWord) => taggedWord !== null)
        setTaggedOutput(taggedWords)

    }
    return (
        <div className={"p-4 w-full h-full flex items-center flex-col justify-center gap-4 "}>
            <div className={"font-bold text-xl"}>
                {t("model-select")}
            </div>
            <ToggleGroup defaultValue={model} value={model} type="single" className={"flex-wrap"}>
                {
                    Object.entries(MODELS).map(([key, value]: [string, ModelDetails]) => {
                        return (
                            <ToggleGroupItem onClick={() => setModel(key as Model)} key={key} className={"min-w-28"} variant={"default"} value={key}
                                             aria-label={"Toggle " + value.name}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <p>
                                                {value.name}
                                            </p>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                {value.description}
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ToggleGroupItem>
                        )
                    })
                }
            </ToggleGroup>
            <Button onClick={handleClick} disabled={sentence == null || model == null}>
                {loading ? t("action.analyzing") : t("action.analyze")}
            </Button>
        </div>
    );
}

export default SettingsZone;