"use client"
import {ChangeEvent, Suspense} from 'react';
import {Skeleton} from "@/components/ui/skeleton";
import {Upload} from "lucide-react";
import {ToolTipButton} from "@/components/ui/tooltip-button";
import {DownloadMenu} from "@/app/[locale]/_components/download-menu";
import {LocaleToggle} from "@/components/locale-toggler";
import {ModeToggle} from "@/components/theme-toggler";
import {useTranslations} from "next-intl";
import {Label} from "@/components/ui/label";
import {usePosTagger} from "@/context/pos-tagger-context";

function TopMenu() {
    const t = useTranslations("main.top-menu");
    const {setSentence} = usePosTagger()
    const handleUpload = async(e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        const content = file ? await file.text() : ""
        setSentence(content)
    }
    return (
        <Suspense fallback={<Skeleton className="w-full h-24 sm:h-16" />}>
            <div className={"w-full h-24 sm:h-16 flex items-center justify-between shadow p-4"}>
                <div className="flex items-center gap-2">
                    <ToolTipButton tooltip={t("upload.tooltip")}>
                        <input id={"upload-file"} onChange={handleUpload} type="file" className="hidden"/>
                        <Label htmlFor={"upload-file"} className="cursor-pointer">
                            <Upload className={"h-[1.2rem] w-[1.2rem]"}/>
                        </Label>
                    </ToolTipButton>
                    <DownloadMenu />
                </div>
                <div className="flex items-center gap-2">
                    <LocaleToggle/>
                    <ModeToggle/>
                </div>
            </div>
        </Suspense>
    );
}



export default TopMenu;