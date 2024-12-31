import {ReactNode} from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";

export const ToolTipButton = ({tooltip, onClick, className, children} : { tooltip: string, onClick?: () => void, className?: string, children: ReactNode}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={onClick} className={className}>
                        {children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {tooltip}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}