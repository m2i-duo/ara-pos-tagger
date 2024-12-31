"use client"
import {APP_LOCALES} from "@/lib/constants";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useChangeLocale} from "@/hooks/use-change-locale";
import {Languages} from "lucide-react";
import * as React from "react";

export function LocaleToggle() {
    const { changeLocale } = useChangeLocale();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className={"h-[1.2rem] w-[1.2rem]"} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {APP_LOCALES.map((locale) => (
                    <DropdownMenuItem key={locale} onClick={() => changeLocale(locale)}>
                        {locale.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
