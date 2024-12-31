import React from 'react';
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import { MessageSquareText} from "lucide-react";

function InputZone() {
    return (
        <div className={"p-4 h-full  w-full flex items-center flex-col justify-center "}>
            <Label htmlFor={"text_field"} className={"font-bold text-lg w-full py-4 flex items-center gap-1"}><MessageSquareText size={20} /> Sentence</Label>
            <Textarea id={"text_field"} placeholder={"Input your text in arabic here..."} className={"resize-none h-full"} />
        </div>
    );
}

export default InputZone;