"use client"
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import { MessageSquareText} from "lucide-react";
import {usePosTagger} from "@/context/pos-tagger-context";
import {useTranslations} from "next-intl";

function InputZone() {
    const {sentence, setSentence} = usePosTagger()
    const t = useTranslations("main.main-box.input-zone");
    return (
        <div className={"p-4 h-full  w-full flex items-center flex-col justify-center "}>
            <Label htmlFor={"text_field"} className={"font-bold text-lg w-full py-4 flex items-center gap-1"}><MessageSquareText size={20} /> {t("label")}</Label>
            <Textarea value={sentence} onChange={(e) => setSentence(e.target.value)} id={"text_field"} placeholder={t("placeholder")} className={"resize-none h-full"} />
        </div>
    );
}

export default InputZone;