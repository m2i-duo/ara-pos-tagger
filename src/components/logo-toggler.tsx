"use client"
import {LOGO} from "@/lib/constants";
import {useTheme} from "next-themes";
import Image from "next/image";
import {Theme} from "@/lib/types";


function LogoToggle() {
    const theme = (useTheme()).theme as Theme;
    return (
        <>
            {
                theme === "dark"
                    ? <LogoSingleton src={LOGO.src.dark} alt={LOGO.alt} />
                    : <LogoSingleton src={LOGO.src.light} alt={LOGO.alt}/>
            }
        </>
    );
}

const LogoSingleton = ({src, alt, height=120, width=180}: {src:string, alt:string, width?:number, height?:number}) => {
    return <Image src={src} alt={alt} width={width} height={height} />
}
export default LogoToggle;