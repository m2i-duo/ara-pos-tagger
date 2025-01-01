import {MessageSquareShare} from "lucide-react";
import {OutputTable} from "@/app/[locale]/_components/output-table";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useLocale, useTranslations} from "next-intl";

function OutputZone() {
    const t = useTranslations("main.main-box.output-zone");
    const locale = useLocale()
    return (
        <ScrollArea className={"p-4 h-full  w-full flex items-center flex-col justify-start "} style={{direction: locale === "ar" ? "rtl": "ltr"}}>
            <div className={"font-bold text-lg w-full py-4 flex items-center gap-1 justify-start"}>
                <MessageSquareShare size={20}/>
                {t("title")}
            </div>
            <OutputTable />
        </ScrollArea>
    );
}

export default OutputZone;