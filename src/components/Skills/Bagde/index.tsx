import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface BadgeProps {
    technology: string;
    size?: string;
}

export const Badge = ({ technology, size }: BadgeProps) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    const logoSrc = `/src/assets/technologies/${encodeURIComponent(technology.toLowerCase())}-logo.svg`;
    const gridArea = technology.toLowerCase();
    const altText = `${technology} Logo`;

    if (technology === "google-cloud") {
        technology = "Google Cloud";
    }

    if (technology === "styled-components") {
        technology = "Styled Components";
    }

    if (technology === "react-router") {
        technology = "React Router";
    }

    switch (randomNumber) {
        case 1:
            return (
                <motion.div
                    style={{ gridArea }}
                    initial={{ x: 100, scale: 0.2, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    className="z-10"
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 90,
                        duration: 0.5
                    }}
                >
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
                </motion.div>
            );

        case 2:
            return (
                <motion.div
                    style={{ gridArea }}
                    className="z-20"
                    initial={{ scale: 0.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 90,
                        duration: 0.5
                    }}
                >
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
                </motion.div>
            );

        case 3:
            return (
                <motion.div
                    style={{ gridArea }}
                    className="z-9"
                    initial={{ x: -100, scale: 0.2, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 90,
                        duration: 0.5
                    }}
                >
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
                </motion.div>
            );
    }


};