"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {ToolTipButton} from "@/components/ui/tooltip-button";
import {Download, FileCode, FileJson, FileSpreadsheet} from "lucide-react";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";
import {DownloadItem, SaveFormat} from "@/lib/types";
import {usePosTagger} from "@/context/pos-tagger-context";
import {cn} from "@/lib/utils";
import {useTranslations} from "next-intl";

const downloadItems: DownloadItem[] = [
    {
        icon:<FileSpreadsheet className={"h-[1.2rem] w-[1.2rem]"} />,
        name: "CSV",
        description: "Comma Separated Values",
        format: "csv",
    },
    {
        icon:<FileJson className={"h-[1.2rem] w-[1.2rem]"} />,
        name: "JSON",
        description: "JavaScript Object Notation",
        format: "json",
    },
    {
        icon:<FileCode className={"h-[1.2rem] w-[1.2rem]"} />,
        name: "XML",
        description: "Extensible Markup Language",
        format: "xml",
    }
]
export function DownloadMenu() {
    const t = useTranslations("main.top-menu.download");
    const {saveFormat, setSaveFormat, taggedOutput} = usePosTagger()
    return (
        <Dialog >
            {
                taggedOutput.length > 0 ? (
                    <DialogTrigger asChild>
                        <div>
                            <DialogTriggerItem disabled={false} />
                        </div>
                    </DialogTrigger>
                ) : (
                    <DialogTriggerItem disabled={true} />
                )
            }
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                    <DialogDescription>
                        {t("description")}
                    </DialogDescription>
                </DialogHeader>
                <ToggleGroup type="single" defaultValue={saveFormat} value={saveFormat} className={"flex-wrap"}>
                    {
                        downloadItems.map((downloadItem: DownloadItem, idx) => {
                            return (
                                <ToggleGroupItem onClick={() => setSaveFormat(downloadItem.format as SaveFormat)} key={idx} className={"min-w-28"} variant={"default"} value={downloadItem.format}
                                                 aria-label={"Toggle " + downloadItem.name}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className={"flex items-center justify-center gap-0.5"}>
                                                    {downloadItem.icon}
                                                    {downloadItem.name}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    {t(`format.${downloadItem.format}`)}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ToggleGroupItem>
                            )
                        })
                    }
                </ToggleGroup>
                <DialogFooter>
                    <Button type="submit">{t("action.download")}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

const DialogTriggerItem  = ({disabled= false}: {disabled: boolean}) => {
    const t = useTranslations("main.top-menu.download");
    return (
        <ToolTipButton tooltip={t("tooltip")} disabled={disabled}>
            <Download className={cn("h-[1.2rem] w-[1.2rem]")}/>
        </ToolTipButton>
    )
}