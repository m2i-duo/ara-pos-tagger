import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useTranslations} from "next-intl";

const sentence = [
    {
        word: "المنظمة",
        arabicTag: "صفة معرفة",
        englishTag: "Definite adjective",
        frenchTag: "Adjectif défini",
        tagAbbreviation: "Sifa"
    },
    {
        word: "العالمية",
        arabicTag: "صفة معرفة",
        englishTag: "Definite adjective",
        frenchTag: "Adjectif défini",
        tagAbbreviation: "Sifa"
    },
    {
        word: "للصحة",
        arabicTag: "جار ومجرور",
        englishTag: "Genitive",
        frenchTag: "Génitif",
        tagAbbreviation: "Jar wa majrur"
    },
    {
        word: "WHO",
        arabicTag: "اختصار",
        englishTag: "Abbreviation",
        frenchTag: "Abréviation",
        tagAbbreviation: "Iktisar"
    },
    {
        word: "هي",
        arabicTag: "ضمير متصل",
        englishTag: "Attached pronoun",
        frenchTag: "Pronom attaché",
        tagAbbreviation: "Dameer muttasil"
    },
    {
        word: "وكالة",
        arabicTag: "اسم",
        englishTag: "Noun",
        frenchTag: "Nom",
        tagAbbreviation: "Ism"
    },
    {
        word: "الصحة",
        arabicTag: "اسم",
        englishTag: "Noun",
        frenchTag: "Nom",
        tagAbbreviation: "Ism"
    },
    {
        word: "العالمية",
        arabicTag: "صفة معرفة",
        englishTag: "Definite adjective",
        frenchTag: "Adjectif défini",
        tagAbbreviation: "Sifa"
    },
    {
        word: "WHO",
        arabicTag: "اختصار",
        englishTag: "Abbreviation",
        frenchTag: "Abréviation",
        tagAbbreviation: "Iktisar"
    },
    {
        word: "هي",
        arabicTag: "ضمير متصل",
        englishTag: "Attached pronoun",
        frenchTag: "Pronom attaché",
        tagAbbreviation: "Dameer muttasil"
    },
    {
        word: "وكالة",
        arabicTag: "اسم",
        englishTag: "Noun",
        frenchTag: "Nom",
        tagAbbreviation: "Ism"
    },
    {
        word: "الصحة",
        arabicTag: "اسم",
        englishTag: "Noun",
        frenchTag: "Nom",
        tagAbbreviation: "Ism"
    },
    {
        word: "العالمية",
        arabicTag: "صفة معرفة",
        englishTag: "Definite adjective",
        frenchTag: "Adjectif défini",
        tagAbbreviation: "Sifa"
    },
    {
        word: "WHO",
        arabicTag: "اختصار",
        englishTag: "Abbreviation",
        frenchTag: "Abréviation",
        tagAbbreviation: "Iktisar"
    },
    {
        word: "هي",
        arabicTag: "ضمير متصل",
        englishTag: "Attached pronoun",
        frenchTag: "Pronom attaché",
        tagAbbreviation: "Dameer muttasil"
    },
    {
        word: "وكالة",
        arabicTag: "اسم",
        englishTag: "Noun",
        frenchTag: "Nom",
        tagAbbreviation: "Ism"
    },
    {
        word: "الصحة",
        arabicTag: "اسم",
        englishTag: "Noun",
        frenchTag: "Nom",
        tagAbbreviation: "Ism"
    },
    {
        word: "العالمية",
        arabicTag: "صفة معرفة",
        englishTag: "Definite adjective",
        frenchTag: "Adjectif défini",
        tagAbbreviation: "Sifa"
    },
    {
        word: "WHO",
        arabicTag: "اختصار",
        englishTag: "Abbreviation",
        frenchTag: "Abréviation",
        tagAbbreviation: "Iktisar"
    },
    {
        word: "هي",
        arabicTag: "ضمير متصل",
        englishTag: "Attached pronoun",
        frenchTag: "Pronom attaché",
        tagAbbreviation: "Dameer muttasil"
    }
]

export function OutputTable() {
    const t = useTranslations("main.main-box.output-zone.table");
    return (
        <Table style={{direction: "rtl"}}>
            <TableHeader>
                <TableRow>
                    <TableHead className={"text-start"}>{t("header.word")}</TableHead>
                    <TableHead className={"text-start"}>{t("header.arabic-tag")}</TableHead>
                    <TableHead className={"text-start"}>{t("header.english-tag")}</TableHead>
                    <TableHead className={"text-start"}>{t("header.french-tag")}</TableHead>
                    <TableHead className="text-end">{t("header.abbreviation")}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sentence.map((word, idx) => (
                    <TableRow key={idx}>
                        <TableCell className="text-start font-medium">{word.word}</TableCell>
                        <TableCell className={"text-start"}>{word.arabicTag}</TableCell>
                        <TableCell className={"text-start"}>{word.englishTag}</TableCell>
                        <TableCell className={"text-start"}>{word.frenchTag}</TableCell>
                        <TableCell className="text-end">{word.tagAbbreviation}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
