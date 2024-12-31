import React from 'react'
import {Button} from "@/components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {MODELS} from "@/lib/constants";

function SettingsZone() {
    return (
        <div className={"p-4 w-full h-full flex items-center flex-col justify-center gap-4 "}>
            <div className={"font-bold text-xl"}>
                Select the model you wish to use
            </div>
            <ToggleGroup type="single" className={"flex-wrap"}>
                {
                    Object.entries(MODELS).map(([key, value]) => {
                        return (
                            <ToggleGroupItem key={key} className={"min-w-28"} variant={"default"} value={key}
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
                Analyse
            </Button>
        </div>
    );
}

export default SettingsZone;