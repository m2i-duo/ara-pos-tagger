"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";
import { usePosTagger } from "@/context/pos-tagger-context";
import { Skeleton } from "@/components/ui/skeleton";
import {useEffect} from "react";

export function OutputTable() {
    const t = useTranslations("main.main-box.output-zone.table");
    const { taggedOutput, loading } = usePosTagger();
    return (
        loading ? <OutputTableSkeleton /> :
        <Table style={{ direction: "rtl" }}>
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
                {taggedOutput?.map((word, idx) => (
                    <TableRow key={idx}>
                        <TableCell className="text-start font-medium">{word.word}</TableCell>
                        <TableCell className={"text-start"}>{word.arabicTag}</TableCell>
                        <TableCell className={"text-start"}>{word.englishTag}</TableCell>
                        <TableCell className={"text-start"}>{word.frenchTag}</TableCell>
                        <TableCell className="text-end">{word.abbreviationTag}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

const OutputTableSkeleton = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {Array.from({length: 5}).map((_, idx) => (
                        <TableHead key={idx}>
                            <Skeleton className={"w-full h-full"} />
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.from({length: 10}).map((_, idx) => (
                    <TableRow key={idx}>
                        {Array.from({length: 5}).map((_, idx) => (
                            <TableCell key={idx}>
                                <Skeleton className={"w-full h-12"} />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}