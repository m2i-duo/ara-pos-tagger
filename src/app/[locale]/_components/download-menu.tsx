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

const downloadFormats = [
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
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <ToolTipButton tooltip={"Download"}>
                        <Download className={"h-[1.2rem] w-[1.2rem]"}/>
                    </ToolTipButton>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Download output</DialogTitle>
                    <DialogDescription>
                        Please select the format you wish to download your output data on
                    </DialogDescription>
                </DialogHeader>
                <ToggleGroup type="single" className={"flex-wrap"}>
                    {
                        downloadFormats.map((format, idx) => {
                            return (
                                <ToggleGroupItem key={idx} className={"min-w-28"} variant={"default"} value={format.format}
                                                 aria-label={"Toggle " + format.name}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className={"flex items-center justify-center gap-0.5"}>
                                                    {format.icon}
                                                    {format.name}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    {format.description}
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
                    <Button type="submit">Download</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
