import {ReactNode} from "react";
import {Heart} from "lucide-react";

export const headerNavLinks: TNavLink[] = [
    {
        href: '/docs',
        title: 'Docs',
    },
    {
        href: '/about',
        title: 'about',
    },
    {
        href: '/contact',
        title: 'contact',
    },
    {
        href : "/special-mentions",
        title : "special-mentions",
        icon: <Heart color={"red"} className={"w-[1.2rem] h-[1.2rem]"} />
    },
    {
        external: true,
        href: "https://github.com/m2i-duo/ara-pos-tagger-api",
        title: "Source code",
    }
]

type TNavLink = {
    external?: boolean;
    href: string;
    title: string;
    icon?: ReactNode;
}