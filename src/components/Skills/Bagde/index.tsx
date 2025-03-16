import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface BadgeProps {
    technology: string;
    size?: string;
}

type TechnologyNames = {
    [key: string]: string;
};

export const Badge = ({ technology, size }: BadgeProps) => {
    const formattedTechNames: TechnologyNames = {
        "google-cloud": "Google Cloud",
        "styled-components": "Styled Components",
        "react-router": "React Router"
    } as const;

    const displayTechnology = formattedTechNames[technology] || technology;
    const logoSrc = `public/assets/technologies/${encodeURIComponent(technology.toLowerCase())}-logo.svg`;
    const gridArea = technology.toLowerCase();
    const altText = `${displayTechnology} Logo`;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    const animationVariants = [
        { initial: { x: 100, scale: 0.2, opacity: 0 }, whileInView: { x: 0, scale: 1, opacity: 1 }, className: "z-10" },
        { initial: { scale: 0.2, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, className: "z-20" },
        { initial: { x: -100, scale: 0.2, opacity: 0 }, whileInView: { x: 0, scale: 1, opacity: 1 }, className: "z-9" }
    ];

    return (
        <motion.div
            style={{ gridArea }}
            {...animationVariants[randomNumber - 1]}
            transition={{ type: "spring", damping: 15, stiffness: 90, duration: 0.5 }}
        >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <img className={size} src={logoSrc} alt={altText} title={altText} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{displayTechnology}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </motion.div>
    );
};