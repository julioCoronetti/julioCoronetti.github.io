import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BadgeProps {
    technology: string;
    size?: string;
}

export const Badge = ({ technology, size }: BadgeProps) => {
    const logoSrc = `/src/assets/technologies/${encodeURIComponent(technology.toLowerCase())}-logo.svg`;
    const gridArea = technology.toLowerCase();
    const altText = `${technology} Logo`;

    if (technology === "google-cloud") {
        technology = "Google Cloud";
    }

    return (
        <div style={{ gridArea }}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <img
                            className={size}
                            src={logoSrc}
                            alt={altText}
                            title={altText}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{technology}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};