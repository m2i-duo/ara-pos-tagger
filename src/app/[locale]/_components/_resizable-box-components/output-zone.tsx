import React from 'react';
import {Label} from "@/components/ui/label";
import {MessageSquareShare} from "lucide-react";
import {OutputTable} from "@/app/[locale]/_components/output-table";
import {ScrollArea} from "@/components/ui/scroll-area";

function OutputZone() {
    return (
        <ScrollArea className={"p-4 h-full  w-full flex items-center flex-col justify-start "}>
            <Label htmlFor={"text_field"}
                   className={"font-bold text-lg w-full py-4 flex items-center gap-1"}><MessageSquareShare
                size={20}/> Tagged output</Label>
            <OutputTable />
        </ScrollArea>
    );
}

export default OutputZone;