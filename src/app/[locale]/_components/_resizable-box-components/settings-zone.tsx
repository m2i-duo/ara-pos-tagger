"use client"
import {Button} from "@/components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {MODELS} from "@/lib/constants";
import {Model, ModelDetails} from "@/lib/types";
import {usePosTagger} from "@/context/pos-tagger-context";
import {useTranslations} from "next-intl";

function SettingsZone() {
    const {model, setModel} = usePosTagger()
    const t = useTranslations("main.main-box.settings-zone");
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
            <Button>
                {t("action.analyze")}
            </Button>
        </div>
    );
}

export default SettingsZone;