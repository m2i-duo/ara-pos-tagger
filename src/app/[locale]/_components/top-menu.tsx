import React, { Suspense} from 'react';
import {Skeleton} from "@/components/ui/skeleton";
import {Upload} from "lucide-react";
import {ToolTipButton} from "@/components/ui/tooltip-button";
import {DownloadMenu} from "@/app/[locale]/_components/download-menu";
import {LocaleToggle} from "@/components/locale-toggler";
import {ModeToggle} from "@/components/theme-toggler";

function TopMenu() {
    return (
        <Suspense fallback={<Skeleton className="w-full h-24 sm:h-16" />}>
            <div className={"w-full h-24 sm:h-16 flex items-center justify-between shadow p-4"}>
                <div className="flex items-center gap-2">
                    <ToolTipButton tooltip={"Upload"}>
                        <Upload className={"h-[1.2rem] w-[1.2rem]"}/>
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